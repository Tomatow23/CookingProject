class Item {
//    static newRecipe = [];
    constructor(item_name, recipe = []) {
        this.item_name = item_name;
        this.recipe = recipe;
    }

    get_item_name(){
        return this.item_name;
    }
    get_recipe(){
        return this.recipe;
    }
    getRecipeSize(){
        return this.recipe.length;
    }
    // addItem(item){
    //     newRecipe.push(item);
    // }


}


