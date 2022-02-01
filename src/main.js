
import App from './components/App.js';

document.getElementById("root").appendChild(App());


const card = document.getElementsByClassName("card");
console.log(card);
for(let i = 0; i < card.length; i++){
    card[i].addEventListener("click", function(event){
        // console.log(event.target);
        event.currentTarget.classList.add("flip")
    });
}
