export default class Categories{
    constructor(){
        this.categories = []
    }

    addCategory(newCategory){
        console.log(this.categories)
        this.categories.push(newCategory)
    }
}