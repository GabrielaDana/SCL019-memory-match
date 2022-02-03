
const botones = () => {

    const contenedor = document.createElement("div");
    contenedor.className = "contenedor";

    const barra = document.createElement("div");
    barra.className = "barra";
    contenedor.appendChild(barra);

    const circulo = document.createElement("div");
    circulo.className = "circulo";
    contenedor.appendChild(circulo);
    
    const circulo2 = document.createElement("div");
    circulo2.className = "circulo2";
    contenedor.appendChild(circulo2);

    const boton = document.createElement("div");
    boton.className = "boton";
    contenedor.appendChild(boton);

    const logo = document.createElement("img");
    logo.src = "images/logo.png";
    logo.id = "logo";
    contenedor.appendChild(logo);

    const btnInstructions = document.createElement("img");
    btnInstructions.src = "images/instrucciones.png";
    btnInstructions.id = "btnInstructions";
    contenedor.appendChild(btnInstructions);

    const btnHome = document.createElement("img");
    btnHome.src = "images/Home.png";
    btnHome.id = "btnHome";
    contenedor.appendChild(btnHome);

return contenedor;
}

export default botones; 