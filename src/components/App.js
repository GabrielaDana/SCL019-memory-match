
import pokemon from '../data/pokemon/pokemon.js';
console.log(pokemon);

const App = () => {
    const poke = pokemon.items;
    //se usa var o let (?)
    var doublepoke = poke.concat(poke);
    doublepoke.sort(() => 0.5 - Math.random());

//Primer div creado, padre de los siguientes, necesita return para aparecer dentro de root
    const board = document.createElement("div");
    board.className = "board";

  for(let i = 0; i<doublepoke.length; i++){


    const card = document.createElement("div");
    card.className = "card";
    board.appendChild(card);


    const cardFront = document.createElement("div");
    cardFront.className = "cardFront";
    cardFront.setAttribute = "doublepoke.length";
    card.appendChild(cardFront);


    const cardImage = document.createElement("img");
// cardImage.alt = "pokeball";
    cardImage.className = "image";
    cardImage.src = "images/pokeball.png";
    cardFront.appendChild(cardImage);


    const cardBack = document.createElement("div");
    cardBack.className = "cardBack";
    card.appendChild(cardBack);

  
    const backImage = document.createElement("img");
    backImage.src = doublepoke[i].image;
    backImage.id = doublepoke[i].id;
    cardBack.appendChild(backImage);
};

//Return para que muestre el div como padre y aparezca en el html
  return board;
};
export default App;