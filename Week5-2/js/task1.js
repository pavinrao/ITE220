(function() {

var task1 = {
	render: function(){
		document.getElementById("screenX").textContent = window.screenX;
		document.getElementById("screenY").textContent = window.screenY;
		document.getElementById("screenWidth").textContent = window.screen.width;
		document.getElementById("screenHeight").textContent = window.screen.height;
		document.getElementById("location").textContent = window.location;
	},
	resize: function() { 
		window.addEventListener("resize", this.render);
	},
	devInfo: function(){
		var btnDev = document.getElementById("dev-info");
		btnDev.addEventListener("click", function() {

		});
	}
}
task1.render();
task1.resize();
task.devInfo();
})();
