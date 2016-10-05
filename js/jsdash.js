var $icon_nodo = document.getElementById("icon_ocultar");
var $menu_nodo = document.getElementById("id_header");
$icon_nodo.onclick = function(){
     
    
    if ($menu_nodo.style.display == "none"){
        $menu_nodo.style.display = "flex";
    } else {
        $menu_nodo.style.display = "none";
    }
}

var $icon_nodo2 = document.getElementById("icon_ocultar2");
var $menu_nodo2 = document.getElementById("id_aside");
var $section = document.getElementById("id_section");
$icon_nodo2.onclick = function(){
    if ($menu_nodo2.style.display == "none"){
        $menu_nodo2.style.display = "flex";
    } else {
        $menu_nodo2.style.display = "none";
        $section.style.width = "100%";
    } 
}

var $icon_nodo3 = document.getElementById("icon_ocultar3");
var $footer_nodo3 = document.getElementById("id_footer");
$icon_nodo3.onclick = function(){
    if ($footer_nodo3.style.display == "none") {
       $footer_nodo3.style.display = "flex";
    } else {
        $footer_nodo3.style.display = "none";
        $section.style.height = "100vh";
}
}