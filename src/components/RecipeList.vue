<template>
    <div>
      <v-flex v-for="recipe in recipes" v-bind:key="recipe.id">
        <v-card class="recipeCard" @click="showRecipe(recipe)">
          <v-img
              :src="baseUrl + recipe.imageUrl"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              width="430px"
              cover="true"
            >
            <v-card-title v-text="recipe.title"></v-card-title>
          </v-img>
        </v-card>
      </v-flex>
    </div>
</template>

<style scoped>
  .recipeCard {
    margin:5px
  }
</style>
 
<script>
export default {
  name: 'RecipeList',
  computed: {
    baseUrl() {
      return this.$store.state.baseUrl
    },
    currentRecipe() {
      return this.$store.state.currentRecipe
    },
    recipes() {
      return this.$store.state.recipes
    }
  },
  methods: {
    showRecipe: function(recipe){
      this.$store.commit('setCurrentRecipe', recipe)  
      this.$router.push('recipe')
    }
  },

  mounted: function() {
    this.$store.commit('loadRecipes') 
  },
};
</script>
