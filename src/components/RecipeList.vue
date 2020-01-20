<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/recipe_logo.jpeg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>
      <v-flex v-for="recipe in recipes" v-bind:key="recipe.title">
        <v-card class="recipeCard">
          <v-img
              :src="recipe.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            <v-card-title v-text="recipe.title"></v-card-title>
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
  .recipeCard {
    margin:5px
  }
</style>
 
<script>
export default {
  name: 'RecipeList',

  data: function() {
return {
    recipes: [
      {title: 'Spaghetti Bolognese',
      image: require('../assets/spaghetti-bolognese.jpeg'),
      url: 'https://www.lecker.de/spaghetti-bolognese-38274.html'},
      {title: 'Ribollata',
      image: require('../assets/ribollita.jpeg'),
      url: 'https://rezeptebuch.com/rezept/31637'}
    ]
  };
},
};
</script>
