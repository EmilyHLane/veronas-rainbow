//click on each piece of rainbow to set colors to roygbiv

$(".red").click(function() {
  $(this).css("background", "red");
  $(this).css("border-color", "red");
  isRainbowColored();
});

$(".orange").click(function() {
  $(this).css("background", "orange");
  $(this).css("border-color", "orange");
  isRainbowColored();
});

$(".yellow").click(function() {
  $(this).css("background", "yellow");
  $(this).css("border-color", "yellow");
  isRainbowColored();
});

$(".green").click(function() {
  $(this).css("background", "green");
  $(this).css("border-color", "green");
  isRainbowColored();
});

$(".blue").click(function() {
  $(this).css("background", "blue");
  $(this).css("border-color", "blue");
  isRainbowColored();
});

$(".purple").click(function() {
  $(this).css("background", "purple");
  $(this).css("border", "purple");
  $(".rainbow-bottom").css("border-color", "#87CEFA");
  isRainbowColored();
});

//when all colors are not equal to white, show Orco.

function isRainbowColored() {
  const red = $(".red").css("background-color");
  const orange = $(".orange").css("background-color");
  const yellow = $(".yellow").css("background-color");
  const green = $(".green").css("background-color");
  const blue = $(".blue").css("background-color");
  const purple = $(".purple").css("background-color");
  const white = "rgb(255, 255, 255)";
  const cat = $(".cat");

  //if rainbow is filled in, remove "hide" class
  if (
    red !== white &&
    orange !== white &&
    yellow !== white &&
    green !== white &&
    blue !== white &&
    purple !== white
  ) {
    cat.removeClass("hide");
  }
}

//when Orco gets to middle of page, change colors to random within color family.

//when click on Orco, change again.

//count number of times Orco clicked.

//when Orco clicked 5 times, hearts rain animation.
