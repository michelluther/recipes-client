<template>
    <div class="d-flex align-center flex-column">
        <div class="maxWidth body-1 pa-5">
            <h3 class="title">Zutaten</h3>
            <table style="width:100%">
                <tr v-for="ingredient in ingredients" v-bind:key="ingredient.id">
                    <td>{{ingredient.amount ? ingredient.amount : ''}} {{ingredient.unit}}</td>
                    <td>{{ingredient.title}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IngredientsTable',
    props: ['recipe'],
    computed: {
        ingredients() {
            return this.$store.state.ingredients
        }
    },
    mounted() {
        this.$store.commit('loadIngredients', this.recipe) 
    }
}
</script>
<style scoped>
    .maxWidth {
        width:100%;
        max-width: 800px;
    }
</style>