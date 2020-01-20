<template>
    <v-card>
        <v-img
            :src="image"
            height="200px"
        >
        <v-card-title>
            {{title}}
        </v-card-title>
    </v-card>
</template>

<script>
export default {
    name: 'RecipeDisplay',
    data: () => {
        return {
            title: 'Spaghetti Bolognese',
            image: require('../assets/spaghetti-bolognese.jpeg'),
            url: 'https://www.lecker.de/spaghetti-bolognese-38274.html'}
        }
}
</script>