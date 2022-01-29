//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from '../data/pokemon/pokemon.js';
console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//
const App = () => {
  //
  const poke = pokemon.items;
  const doublepoke = poke.concat(poke);
  //Primer div creado, padre de los siguientes, necesita return para aparecer dentro de root
  const board = document.createElement("div");
  board.className = "board";

  doublepoke.forEach(function(index, element){
    const card = document.createElement("div");
    card.className = "card";
    board.appendChild(card);
 
    const cardFront = document.createElement("div");
    cardFront.className = "cardFront";
    card.appendChild(cardFront);

    const cardImage = document.createElement("img");
    cardImage.alt = "pokeball";
    cardImage.className = "image";
    cardImage.src = "./images/pokeball.png";
    cardFront.appendChild(cardImage);

    const cardBack = document.createElement("div");
    cardBack.className = "cardBack";
    card.appendChild(cardBack);
  
  // console.log(doublepoke[items].image);
    for (let i = 0; i < doublepoke.length; i++){
      const backImage = document.createElement("img");
      backImage.src = doublepoke[i].image;
      backImage.id = doublepoke[i].id;
      cardBack.appendChild(backImage);
    }; 

  });
  
  //Return para que muestre el div como padre y aparezca en el html
  return board;
};
export default App;