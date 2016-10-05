var palette = document.getElementById("id_div"); 
var nodo = document.getElementById("id_aside");
var nodo2 = document.getElementById("id_section"); 
palette.onclick = function (){
    nodo.classList.add("hide");
    nodo2.classList.add("block");
}