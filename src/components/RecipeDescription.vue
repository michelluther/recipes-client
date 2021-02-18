<template>
    <div class="d-flex align-center flex-column">
        <div class="maxWidth body-1 pa-5">
            <h3 class="title">Anleitung</h3>
            <div v-html="recipe.getDescriptionHtml()" class=""/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecipeDescription',
    props: ['recipe'],
    
}
</script>
<style scoped>
    .maxWidth {
        width: 100%;
        max-width: 800px;
    }
</style>