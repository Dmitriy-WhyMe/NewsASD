window.onload = init;
		function init(){
			var button = document.getElementById("click_menu")
		    button.onclick = handleButtonClick;
		    var button1 = document.getElementById("click_krest")
		    button1.onclick = handleButtonClick1;
		}
		function handleButtonClick() {
			document.getElementById("menu-open").style.display = "flex";
			document.getElementById("click_menu").style.display = "none";
			document.getElementById("click_krest").style.display = "flex";
		}
		function handleButtonClick1() {
			document.getElementById("click_krest").style.display = "none";
			document.getElementById("click_menu").style.display = "flex";
			document.getElementById("menu-open").style.display = "none";
		}
