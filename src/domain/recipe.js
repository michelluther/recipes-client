
function Recipe(id, title, imageUrl, description, ingredients){
    this.id = id
    this.title = title
    this.imageUrl = imageUrl
    this.description = description
    this.ingredients = ingredients
    this.templateType = description ? 'withDescription' : 'imageOnly'
    this.getDescriptionHtml = () => {
        const descriptionParagraphs = this.description.split('\n')
        return `<p>${descriptionParagraphs.join('</p><p>')}</p>`
    }

    this.getIngredientsHtml = () => {
        if(this.ingredients)
            return `<table>${this.ingredients.html().join('')}</table>` 
        else 
            return ''
    }

}

export default Recipe