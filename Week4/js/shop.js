var customerName = "Pavin";
var price = 10;
var quantity = 2;
var totalPrice = 0;

var products = [
	"Brooklyn T-Shirt White",
	"Brooklyn T-Shirt Black",
	"Apple Watch",
	"Andriod Phone"
	];

var prices= [10,10,199,159];

var productsText = "";
var productsElement = document.getElementById("product-list");


var time = new Date();
var curHr = time.getHours();
var timeofDay = "null";
var timeofDayElement = document.getElementById("time-of-day");
var discount = 0.75;


for (var i = 0; i < products.length; i++) {
	productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[i]+"</span>" + products[i]+ "</li>";
	productsElement.innerHTML = productsText;
}


var customerElement = document.getElementById("customer");
customerElement.textContent = customerName;

//var customerElement = document.getElementById("price");
//customerElement.textContent = price;

totalPrice = (prices[0] + prices[1] + prices[2] + prices[3]) * discount;

var totalPriceElement = document.getElementById("total-price");
totalPriceElement.textContent = totalPrice; 


if(curHr<12){
	timeofDay = "Good morning ";
}else if (curHr<18) {
	timeofDay = "Good afternoon ";
}else{
	timeofDay = "Good evening ";
}

timeofDayElement.textContent = timeofDay;
