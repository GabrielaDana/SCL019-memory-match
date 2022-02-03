
const flip = document.getElementsByClassName("flip");
let contador = 0;

function checkCard(){
    let pkmnFlip = document.getElementsByClassName("pkmnFlip");
    
        if (pkmnFlip.length === 2){
        
        if (pkmnFlip[0].getAttribute("id") === pkmnFlip[1].getAttribute("id")){
            ++contador;

            match();
        }   

        else {
            setTimeout(() =>
            flip[1].classList.remove("flip"),1000);
            setTimeout(() =>
            flip[0].classList.remove("flip"),1000);
    
            pkmnFlip[1].classList.remove("pkmnFlip");
            pkmnFlip[0].classList.remove("pkmnFlip");   
        }
        if(contador === 9){
            Swal.fire({
                title: '¡FELICITACIONES!',
                text: 'Eres un verdadero maestro Pokemon',
                imageUrl: './images/oak.gif',
                imageWidth: 400,
                imageHeight: 250,
            })
        }
    }
    
    }
    
    function match() {
        const pkmnFlip = document.getElementsByClassName("pkmnFlip");
        flip[1].classList.add("match"); 
        flip[0].classList.add("match"); 
        flip[1].classList.remove("flip");
        flip[0].classList.remove("flip");
    
        pkmnFlip[1].classList.remove("pkmnFlip");
        pkmnFlip[0].classList.remove("pkmnFlip");
    }

    export {checkCard, match};