const rollBtn = document.querySelector("button");
const diceImg = document.querySelector("img");
let audio = new Audio("effect from pixabay.mp3");
let imgArray = [
  "./image/dice 1.png",
  "./image/dice 2.png",
  "./image/dice 3.png",
  "./image/dice 8.png",
  "./image/dice 5.png",
  "./image/dice 6.png",
  "./image/dice 7.png",
];

function randomDice() {
  let randomIndex = Math.floor(Math.random() * imgArray.length);
  diceImg.src = imgArray[randomIndex];
}

function rollingDice() {
  intervalImg = setInterval(randomDice, 1000 / 10);
  setTimeout(() => clearInterval(intervalImg), 1000);
}

function resultDice() {
  let intervalDice = setInterval(() => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    console.log(randomNum);
    diceImg.src = `./image/${randomNum}.png`;
  }, 1000);

  setTimeout(() => clearInterval(intervalDice), 1000);
}

rollBtn.addEventListener("click", function (e) {
  audio.play();
  rollingDice();
  resultDice();
});
