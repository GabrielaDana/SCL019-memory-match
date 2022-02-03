
const bar = () => {

    const barra = document.createElement("div");
    barra.id = "bar";

    const avatar = document.createElement("div")
    avatar.id = "avatar";
    barra.appendChild(avatar);

    const name = document.createElement("imput");
    name.type = "text";
    name.id = "name";
    name.textContent = "Gaby/Liz";
    name.value = "Player";
    barra.appendChild(name)

    const time1 = document.createElement("div");
    time1.id = "time1";
    barra.appendChild(time1);

    const time = document.createElement("imput");
    time.type = "text";
    time.id = "time";
    time.textContent = "00:54"
    time.value = "00:15";
    barra.appendChild(time);

    const puntaje = document.createElement("imput");
    puntaje.type = "text";
    puntaje.id = "puntaje";
    puntaje.textContent = "score: 80"
    puntaje.value = "Score: 80";
    barra.appendChild(puntaje);

    // const movimientos = document.createElement("imput");
    // movimientos.type = "text";
    // movimientos.id = "puntaje";
    // movimientos.value = "";
    // barra.appendChild(movimientos);
    
    return barra;
}

export default bar;