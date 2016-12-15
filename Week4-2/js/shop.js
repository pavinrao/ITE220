// var customerName = "Pavin";
// var price = 10;
// var quantity = 2;
// var totalPrice = 0;

// var products = [
// 	"Brooklyn T-Shirt White",
// 	"Brooklyn T-Shirt Black",
// 	"Apple Watch",
// 	"Andriod Phone"
// 	];

// var prices= [10,10,199,159];

// var productsText = "";
// var productsElement = document.getElementById("product-list");


// var time = new Date();
// var curHr = time.getHours();
// var timeofDay = "null";
// var timeofDayElement = document.getElementById("time-of-day");
// var discount = 0.75;


// for (var i = 0; i < products.length; i++) {
// 	productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[i]+"</span>" + products[i]+ "</li>";
// 	productsElement.innerHTML = productsText;
// }


// var customerElement = document.getElementById("customer");
// customerElement.textContent = customerName;

// //var customerElement = document.getElementById("price");
// //customerElement.textContent = price;

// totalPrice = (prices[0] + prices[1] + prices[2] + prices[3]) * discount;

// var totalPriceElement = document.getElementById("total-price");
// totalPriceElement.textContent = totalPrice; 


// if(curHr<12){
// 	timeofDay = "Good morning ";
// }else if (curHr<18) {
// 	timeofDay = "Good afternoon ";
// }else{
// 	timeofDay = "Good evening ";
// }

// timeofDayElement.textContent = timeofDay;

var shop = {
	customerName: "Pavin",
	totalPrice: 0,
	products: [
	"Brooklyn TShirt White",
	"Brooklyn TShirt Black",
	"Apple Watch",
	"Android Phone"
	],
	prices: [10,10,199,159],
	displayCustomerName: function() {
		var customerElement = document.getElementById("customer");
		customerElement.textContent = this.customerName;
	},
	displayProductList: function() {
		var productsText = "";
		var productsElement = document.getElementById("product-list");

		productsText +="<li class= 'list-group-item'><span class='badge'>$"+ this.prices[0]+"</span>" + this.products[0]+ "</li>";
		productsText +="<li class=' list-group-item'><span class='badge'>$"+ this.prices[1]+ "</span>"+ this.products[1]+"</li>";
	    productsText +="<li class=' list-group-item'><span class='badge'>$"+ this.prices[2]+ "</span>"+ this.products[2]+"</li>";
	    productsText +="<li class=' list-group-item'><span class='badge'>$"+ this.prices[3]+ "</span>"+ this.products[3]+"</li>";

	    productsElement.innerHTML = productsText;
	},
	calculateTotalPrice: function() {
		return (this.prices[0] +this.prices[1] + this.prices[2] + this.prices[3]) * 0.75;
	},
	displayTotalPrice: function() { 
		this.totalPrice = this.calculateTotalPrice();
		var totalPriceElement = document.getElementById("total-price");
		totalPriceElement.textContent = this.totalPrice;
	}
};

shop.displayCustomerName();
shop.displayProductList();
shop.displayTotalPrice();
