//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
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
  const card = document.createElement("div");
  card.className = "card";

  const cardInner = document.createElement("div");
  cardInner.className = "cardInner";
  card.appendChild(cardInner);

  const cardFront = document.createElement("div");
  cardFront.className = "cardFront";
  cardInner.appendChild(cardFront);

  // const cardImage = document.createElement("img");
  // cardImage.alt = "pokeball";
  // cardImage.className = "image";
  // cardImage.src = "./images/pokeball.png"
  // cardImage.style = "widht:160px; height:160px;"
  // cardFront.appendChild(cardImage);

  const cardBack = document.createElement("div");
  cardBack.className = "cardBack";
  cardBack.textContent = "Atrás";
  cardInner.appendChild(cardBack);
  return card;
};
export default App;