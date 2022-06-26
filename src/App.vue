<template>
  <v-app class="d-flex">
    <div class="d-flex appContainer align-stretch">
    
      <div class="appContent">
        <router-view></router-view>
      </div>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  computed: {
    currentRecipe() {
      return this.$store.state.currentRecipe
    }
  },
  components: {
  },

  data: () => {
    return {
      
    }
  },
};
</script>
<style scoped>
  .appContainer {height: 100%;}
  .appContent {
    overflow-y:auto;
    height: 100%;
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
</style>