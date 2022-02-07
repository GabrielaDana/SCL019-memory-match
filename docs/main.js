import App from "./components/App.js";
import { checkCard } from "./components/game.js";
import botones from "./components/botones.js";
import bar from "./components/bar.js";

document.getElementById("root").appendChild(App());
document.getElementById("header").appendChild(botones());
document.getElementById("leftBar").appendChild(bar());

const pkmn = document.getElementsByClassName("pkmn");
const card = document.getElementsByClassName("card");

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function (event) {
    event.currentTarget.classList.add("flip");
    pkmn[i].classList.add("pkmnFlip");
    checkCard(event);
  });
}
