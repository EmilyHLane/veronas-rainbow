//parens after function name

 //{foo: "bar", hello: "world" };

//click on each piece of rainbow to set colors to roygbiv

// CHANGE border color also

$("#red").click(function() {
	$(this).css("background", "red");
	$(this).css("border-color", "red");
});

$("#orange").click(function() {
	$(this).css("background", "orange");
	$(this).css("border-color", "orange");
});

$("#yellow").click(function() {
	$(this).css("background", "yellow");
	$(this).css("border-color", "yellow");
});

$("#green").click(function() {
	$(this).css("background", "green");
	$(this).css("border-color", "green");
});

$("#blue").click(function() {
	$(this).css("background", "blue");
	$(this).css("border-color", "blue");
});

$("#purple").click(function() {
	$(this).css("background", "purple");
	$(this).css("border", "purple");
	$("#rainbow-bottom").css("border-color", "#87CEFA");
});


//when all colors are not equal to white, show Orco.

//animate Orco moving across page.

//when Orco gets to middle of page, change colors to random within color family.

//when click on Orco, change again.

//count number of times Orco clicked.

//when Orco clicked 5 times, hearts rain animation.

