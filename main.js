menu_list_array=["Chicken Tandoori Pizza","Veg Supreme Pizza", "Veg Extravaganza Pizza", "Paneer Tikka Pizza", "Deluxe Veggie Pizza"];

function getmenu(){
    var htmldata;
    htmldata="<ol class= 'menulist'>"
    menu_list_array.sort();
    for(i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>';
    }
    htmldata=htmldata+"</ol>";
    document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
    var html_data;
    var item= document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    html_data="<section class='cards' "
    for(var i=0;i<menu_list_array.length;i++){
        html_data=html_data+"<div class='cards' ">+"<img src= 'images/pizza.png'>"+menu_list_array[i] +"</div>"

    }

    html_data=html_data+"</section>"
    document.getElementById("display_addedmenu").innerHTML=html_data;
}