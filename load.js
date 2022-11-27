






function getSave(){
    for(let i = 0; i < sessionStorage.length; i++){
        let key = sessionStorage.key(i);
        sessionStorage.removeItem("IsThisFirstTime_Log_From_LiveServer");
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
    const h1 = document.getElementById("recipe_name");
    ul.append(li);
    li.innerText = key
    li.onclick = function(){
        let item = sessionStorage.getItem(key);
        console.log(item);
        let pObj = JSON.parse(item);
        console.log(pObj);
        const ul = document.getElementById("item_list");
        for(let i = 0; i < pObj.recipe.length; i++){
        const li = document.createElement("li");
        ul.append(li);
        li.innerText = pObj.recipe[i];
        li.setAttribute("class", "list-group-item");
         }
        h1.innerText = key
    
    }
    
}
function reset(){
    window.location.reload();
    
}

window.addEventListener("load", getSave);

