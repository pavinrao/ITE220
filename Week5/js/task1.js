(function() {

var task1 = {
	render: function(){
		document.getElementById("screenX").textContent = window.screenX;
		document.getElementById("screenY").textContent = window.screenY;
		document.getElementById("screenWidth").textContent = window.innerWidth;
		document.getElementById("screenHeight").textContent = window.innerHeight;
		document.getElementById("location").textContent = window.location.pathname;
	},
	resize: function() { 
		window.addEventListener("resize", this.render);
	},
	devInfo: function(){
		var btnDev = document.getElementById("dev-info");
		btnDev.addEventListener("click", function(){
			document.getElementById("dev-info-container").innerhtml = 
			"<p>Pavin</p><p>Student</p><p><a href='https://github.com/pavinrao' target='_blank'>https://github.com/pavinrao</a></p>";
		});
	}
}
task1.render();
task1.resize();
task.devInfo();
})();
