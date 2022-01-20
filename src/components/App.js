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

// const App = () => {
//   const el = document.createElement('div');

//   el.className = 'App';
//   el.textContent = 'Hola mundo!';

//   return el;
// };
<<<<<<< HEAD
// export default setCards;
export default App;
=======

const setCards = () => {
  const cards = document.createElement("div");

  cards.className = "carta";
  return cards;
};
export default setCards;
// export default App;
>>>>>>> f79d4eff16bed9725a311f1b4ef27e9ed3e91eda
