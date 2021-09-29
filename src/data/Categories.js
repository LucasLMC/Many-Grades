export default class Categories{
    constructor(){
        this.categories = []
        this._enrolleds = []
    }

    register(func){
        this._enrolleds.push(func);
    }

    unRegister(func){
        this._enrolleds = this._enrolleds.filter(f => f !== func)
    }

    notify(){
        this._enrolleds.forEach(func => {
            func(this.categories)
        })
    }

    addCategory(newCategory){
        this.categories.push(newCategory)
        this.notify()
    }
}