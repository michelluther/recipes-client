<template>  
  <transition name="scale-transition">
    <v-layout 
        text-center
        wrap>
        <!-- <v-flex xs12> -->
          
      <v-flex width="100%">
        <v-card class="ma-4" v-if="recipe.templateType !== 'imageOnly'">
          <div>
            <v-img
              :src="baseUrl + recipe.imageUrl"
              height="400px"
              contain="true"
            />
            <h1 class="font-italic font-weight-light pa-5">
                {{recipe.title}}
            </h1>
            <v-divider/>
            <IngredientsTable :recipe="recipe" class="pa-5"/>
            <v-divider/>
            <RecipeDescription :recipe="recipe" />
          </div>
        </v-card>
        <v-card class="ma-4" v-else >
          <!-- <h1 class="font-italic font-weight-light pa-5">
                {{recipe.title}}
            </h1> -->
          <v-img
            :src="baseUrl + recipe.imageUrl"
            contain="true"
            class="fullWidthImage"
          />
        
        </v-card>
      </v-flex> 
    </v-layout>
  </transition>
</template>

<script>
import IngredientsTable from './IngredientsTable'
import RecipeDescription from './RecipeDescription'
export default {
    name: 'RecipeDisplay',
    components: {IngredientsTable,RecipeDescription},
    computed: {
        baseUrl() {
            return this.$store.state.baseUrl
        },
        recipe() {
            return this.$store.state.currentRecipe
        },
        showDialog() {
          return this.$store.state.showDialog
        }
    },
    methods: {
      close: function(){
        this.$store.commit('hideDialog', null)
      }
    }
}
</script>
<style scoped>
  .ingredients {
    background: rgb(236,229,206);
    background: linear-gradient(-10deg, rgba(236,229,206,1) 0%, rgba(256,249,226,1) 100%);
    border-top: 2px solid #C5E0DC;
    border-bottom: 2px solid #C5E0DC;
    color: #333
  }
  .fullWidthImage {
    width:100%;
    max-width: 1000px;
  }
</style>