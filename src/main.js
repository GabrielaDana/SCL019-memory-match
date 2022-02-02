
import App from './components/App.js';

document.getElementById("root").appendChild(App());
const flip = document.getElementsByClassName("flip");
const pkmn = document.getElementsByClassName("pkmn");
const card = document.getElementsByClassName("card");


for(let i = 0; i < card.length; i++){
    card[i].addEventListener("click", function(event){

        event.currentTarget.classList.add("flip");
        pkmn[i].classList.add("pkmnFlip");
        checkCard(event);
    });
}

function checkCard(event){
const pkmnFlip = document.getElementsByClassName("pkmnFlip");
    if (pkmnFlip.length === 2){
        console.log(pkmnFlip[0].getAttribute("id"),"1",pkmnFlip[1].getAttribute("id"),"2");
      if (pkmnFlip[0].getAttribute("id") === pkmnFlip[1].getAttribute("id")){
        match();
    }   

      else {
        setTimeout(() =>
        flip[1].classList.remove("flip"),1000);
        setTimeout(() =>
        flip[0].classList.remove("flip"),1000);

        pkmnFlip[1].classList.remove("pkmnFlip");
        pkmnFlip[0].classList.remove("pkmnFlip");
    };
          
    }
};

function match() {
    const pkmnFlip = document.getElementsByClassName("pkmnFlip");
    flip[1].classList.add("match"); 
    flip[0].classList.add("match"); 
    flip[1].classList.remove("flip");
    flip[0].classList.remove("flip");

    pkmnFlip[1].classList.remove("pkmnFlip");
    pkmnFlip[0].classList.remove("pkmnFlip");
};
