class Item {
//    static newRecipe = [];
    constructor(item_name, recipe = []) {
        this.item_name = item_name;
    }

    get_item_name(){
        return this.item_name;
    }
    // addItem(item){
    //     newRecipe.push(item);
    // }


}


