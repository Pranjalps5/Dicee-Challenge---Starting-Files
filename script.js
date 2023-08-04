var randomNum = Math.floor(Math.random() * 6) + 1;

var randomImageSourse = "images/dice" + randomNum + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSourse);

var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomImageSourse2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSourse2);

// ifff statement

if (randomNum > randomNum2) {
  document.querySelector("h1").innerHTML = "🤑 Player 1 Win";
} else if (randomNum < randomNum2) {
  document.querySelector("h1").innerHTML = " Player 2 Win 😀🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
