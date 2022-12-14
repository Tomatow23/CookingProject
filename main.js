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
    recipeList.push(input_item.value); 
}

function constrRecipe(){
    let input_name = document.getElementById("recipe_name").value;
    let item = new Item(input_name, recipeList);
    addToRecipes(item);
}


function addToRecipes(recipe){
    recipes.push(recipe);
    addToDropDownList(recipe);
}

function addToDropDownList(recipe){
    const ul = document.getElementById("recipe_dropdown_menu");
    const li = document.createElement("li");
    const a = document.createElement("a");
    ul.append(li);
    li.append(a);
    a.innerText = recipe.item_name;
    save(recipe.item_name, recipe);
    // for(let i = 0; i < recipes.length; i++){
    //     const getObj = Object.(recipes[i].item_name);
    //     ul.append(li);
    //     li.append(a)
    //     a.innerText = getObj;
    //     save(getObj, recipes[i]);
    // }
    
}

// Session Data

function save(recipe_name, recipeObj){
    sessionStorage.setItem(recipe_name, JSON.stringify(recipeObj));
}
function getSave(){
    sessionStorage.removeItem("IsThisFirstTime_Log_From_LiveServer");
    for(let i = 0; i < sessionStorage.length; i++){
        let key = sessionStorage.key(i);
        let item = sessionStorage.getItem(key);
        // console.log(item);
        let pObj = JSON.parse(item);
        updateDropDownList(pObj.item_name);
    }
}
function updateDropDownList(key){
    const ul = document.getElementById("recipe_dropdown_menu");
    const li = document.createElement("li");
    const a = document.createElement("a");
    ul.append(li);
    li.append(a);
    a.innerText = key
}

// Event Listeners

const btn_addItem = document.getElementById("addItem");
btn_addItem.addEventListener("click", addRecipeItem);

const btn_submitRecipe = document.getElementById("submitRecipe");
btn_submitRecipe.addEventListener("click", constrRecipe);

    window.addEventListener("load", getSave);





