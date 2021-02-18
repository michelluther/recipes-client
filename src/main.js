import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'es6-promise/auto'
import Recipe from './domain/recipe'
import Ingredient from './domain/ingredient'
import axios from 'axios'

import Vuex from 'vuex'
import VueRouter from 'vue-router'
import RecipeList from './components/RecipeList';
import RecipeDisplay from './components/RecipeDisplay';

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(VueRouter);
import "@/assets/style.css"
const store = new Vuex.Store({
  state: {
    baseUrl: `http://${location.hostname}:8000/`,
    recipes: [],
    currentRecipe: null,
    ingredients: [],
    showDialog: false
  },
  mutations: {
    setCurrentRecipe: (state, recipe) => {
      state.currentRecipe = recipe
    },
    clearCurrentRecipe: (state) => {
      state.currentRecipe = null
    },
    showDialog: (state) => {
      state.showDialog = true
    },
    hideDialog: (state) => {
      state.showDialog = false
    },
    loadRecipes: (state) => {

      axios.get(state.baseUrl + 'api/recipes?api_token=1234567890',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic bWljaGVsOkJydW5vMTIz'
        }
      }).then(function(result){
        // debugger;
        state.recipes = result.data.map(element => {
          return new Recipe(
            element.id,
            element.title, 
            element.imageUrl, 
            element.description)
        })

      })
    },
    loadIngredients: (state, recipe) => {
      axios.get(state.baseUrl + `api/recipes/${recipe.id}?api_token=1234567890`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic bWljaGVsOkJydW5vMTIz'
        }
      }).then(function(result){
        // debugger;
        state.ingredients = result.data.ingredients.map(element => {
          return new Ingredient(
            element.id, element.name, element.amount, element.unit, element.recipe
          )
        })

      })
    }
  }
})
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: RecipeList
    },
    {
      path: '/recipe',
      component: RecipeDisplay,
      props: true
    }
  ]
})
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
