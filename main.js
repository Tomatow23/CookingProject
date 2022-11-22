// arrays
// arrays: this array stores the recipes items
let recipeList = [];
// arrays: this array stores the recipes
let recipes = [];

// functions 

function addRecipeItem(){
    const ul = document.getElementById("item_list");
    const li = document.createElement("li");
    const input_item = document.getElementById("item_name");
    ul.append(li);
    li.innerText = input_item.value;
    recipeList.push(li.innerText); 
}

function constrRecipe(){
    let input_name = document.getElementById("recipe_name").value;
    let item = new Item(input_name, recipeList);
    addToRecipes(item);
}


function addToRecipes(recipe){
    recipes.push(recipe);
    addToDropDownList();
}

function addToDropDownList(){
    const ul = document.getElementById("recipe_dropdown_menu");
    const li = document.createElement("li");
    for(let i = 0; i < recipes.length; i++){
        ul.append(li);
        li.innerText = document.getElementById("recipe_name").value;
        save();
    }
    
}

// Session Data

function save(){
    sessionStorage.setItem(document.getElementById("recipe_name").value, document.getElementById("recipe_name").value);
}
function getSave(){
    for(let i = 0; i < sessionStorage.length; i++){
        let key = sessionStorage.key(i);
        let item = sessionStorage.getItem(key);
        updateDropDownList(item);
    }
    
}
function updateDropDownList(key){
    const ul = document.getElementById("recipe_dropdown_menu");
    const li = document.createElement("li");
    ul.append(li);
    li.innerText = key
}

// Buttons


const btn_addItem = document.getElementById("addItem");
btn_addItem.addEventListener("click", addRecipeItem);

const btn_submitRecipe = document.getElementById("submitRecipe");
btn_submitRecipe.addEventListener("click", constrRecipe);

window.addEventListener("load", getSave);