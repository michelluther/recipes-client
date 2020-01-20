<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      
    </v-app-bar>

    <v-content>
      <RecipeList/>
    <v-btn
      absolute
      dark
      fab
      bottom
      right
      color="red"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    </v-content>
  </v-app>
</template>

<script>
import RecipeList from './components/RecipeList';

export default {
  name: 'App',

  components: {
    RecipeList,
  },

  data: () => ({
    //
  }),
};
</script>
