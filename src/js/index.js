/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

function deal() {
  let top = ["&#9824", "&#9827", "&#9829", "&#9830"];
  let middle = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let randomNumber = middle[Math.floor(Math.random() * middle.length)];
  let randomSuite = top[Math.floor(Math.random() * top.length)];
  console.log(randomSuite);

  if (randomSuite === "&#9830" || randomSuite === "&#9829") {
    document.querySelector("#top").style.color = "red";
    document.querySelector("#middle").style.color = "red";
    document.querySelector("#bottom").style.color = "red";
  }
  document.querySelector("#top").innerHTML = randomSuite;
  document.querySelector("#middle").innerHTML = randomNumber;
  document.querySelector("#bottom").innerHTML = randomSuite;
}
