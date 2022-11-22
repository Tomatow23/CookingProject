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

window.addEventListener("load", getSave);