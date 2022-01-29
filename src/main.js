
import App from './components/App.js';

document.getElementById("root").appendChild(App());


function flip(){

document.querySelector(".card").className += "Flip";
};

document.querySelector(".image").addEventListener("click", flip);
