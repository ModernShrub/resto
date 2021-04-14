menu_items = ["Pizza","Burger", "Shahi paneer", "tandoori roti", "chicken tikka", "fried chicken" ];
function menulist(){
document.getElementById("menu").innerHTML = menu_items;
}
item = "";
function place(){
item = document.getElementById("menurecive").value;
menu_items.push(item);
menu_items.sort();
document.getElementById("menu").innerHTML = menu_items;
}