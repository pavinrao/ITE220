var products = [
	"Brooklyn T-Shirt White",
	"Brooklyn T-Shirt Black",
	"Apple Watch",
	"Android Phone"
	];
var customerName = "Pavin";
var price = 10;
var quantity = 2;
var totalPrice = 0;
var prices = [10, 10, 199, 159];

var customerElement = document.getElementById("customer");
customerElement.textContent = customerName;

var customerElement = document.getElementById("price");
customerElement.textContent = price;

var productsText = "";
var productsElement = document.getElementById("product-list");

productsText += "<li class = 'list-group-item'><span class='badge'>$"+ prices[0]+"</span>" + products[0]+ "</li>"
productsElement.innerHTML = productsText; 

totalPrice = prices[0] +prices[1] +prices[2] +prices[3];