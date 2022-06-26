<template>
    <div class="d-flex align-center flex-column maxWidth">
        <div class="d-flex align-center flex-column header maxWidth">
            <h1>Luthers Essen</h1>
        </div>
        <div class="search">
            <input :value="searchString" />
        </div>
        <div class="buttons d-flex flex-row">
            <button>Neues Rezept</button>
            <button>Schlag mir was vor!</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    props: [''],
    data: function(){
        return {
            searchString: ''
        }
    }
}
</script>
<style scoped>
    .maxWidth {
        width:100%;
        max-width: 800px;
    }
    .header {
        border-bottom: 1px solid #eee;
        margin-bottom: 2rem;
    }

    input {
        border: 1px solid #aaa;
        border-radius: 0.25rem;
        height: 2rem;
    }
</style>