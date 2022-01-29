
import App from './components/App.js';

document.getElementById("root").appendChild(App());


function flip(){
document.getElementsByClassName("card").className += "Flip";
};
document.getElementsByClassName("image").addEventListener("click", flip);
