addEventListener("keydown", function(event) {
    if (event.keyCode == 73)
    	document.body.style.background = "black"; 
    	document.p.style.color = "white";
  });
  addEventListener("keyup", function(event) {
    if (event.keyCode == 73)
    	document.body.style.background = "";
    	document.p.style.color = "";

  });



$(document).ready(main);