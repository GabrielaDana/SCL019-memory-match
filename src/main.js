
import App from './components/App.js';

document.getElementById("root").appendChild(App());


// function flip(){
//    const carta = document.querySelectorAll(".card");
//    console.log(carta);
// carta.className += "Flip";
// };

const imagen = document.querySelectorAll(".card");
console.log(imagen);
for(let i = 0; i < imagen.length; i++){
    imagen[i].addEventListener("click", function(event){
        // console.log(event.target);
        event.target.parentElement.parentElement.classList.add("flip")
    });
}
