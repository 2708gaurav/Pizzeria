list_menu_array = ["Peppy Paneer" , "Veg Margherita" , "Panner Onion" , 
"Chicken Tandoori" , "Veggie Paradise"];

function getmenu() {
 var menu  = "";
 for(var i = 0;i<list_menu_array.length;i++){
     menu = menu + list_menu_array[i] + '<br>'


 } 
 document.getElementById("display_menu").innerHTML = menu;

}
function add_item() {
    var htmldata;
    var dish= document.getElementById("add_item").value;
    list_menu_array.push(dish);
    list_menu_array.sort();
    htmldata= "<div class = 'suggestion'>"
    for(var i = 0;i<list_menu_array.length;i++){
     htmldata= htmldata+  "<div class = 'suggestion'>" +  list_menu_array[i]+'</div>' 

    }
    htmldata=htmldata+'</div>'
    document.getElementById("display_menu").innerHTML= htmldata;
}