
function Ingredient(id, title, amount, unit, recipe){
    this.id = id
    this.title = title
    this.amount = amount
    this.unit = unit
    this.recipe = recipe

    this.html = () => {
        return `<tr><td width="200"><span class="body-1">${this.amount ? this.amount : ''} ${this.unit}</td><td width="400" class="body-1">${this.title}</td></tr>`
    }
}

export default Ingredient