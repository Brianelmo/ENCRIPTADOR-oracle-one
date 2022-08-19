const texto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje"); 
const boton = document.querySelector('.encriptar'); 
const munheco = document.querySelector('.pre-mensaje'); 
const boton2 = document.querySelector('.desencriptar');
const btncopiar = document.querySelector('.copiar');

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function encriptar(palabraEncriptada){
    let remplazos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u", "ufat"]]; 

    palabraEncriptada = palabraEncriptada.toLowerCase();  

    for(let i = 0; i < remplazos.length; i++){
        if(palabraEncriptada.includes(remplazos[i][0])){
            palabraEncriptada = palabraEncriptada.replaceAll(remplazos[i][0], remplazos[i][1]);
        }
        
    }

    return palabraEncriptada;


}

function desencriptar(palabraEncriptada){
    let remplazos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u", "ufat"]]; 

    palabraEncriptada = palabraEncriptada.toLowerCase();  

    for(let i = 0; i < remplazos.length; i++){
        if(palabraEncriptada.includes(remplazos[i][1])){
            palabraEncriptada = palabraEncriptada.replaceAll(remplazos[i][1], remplazos[i][0]);
        }
        
    }

    return palabraEncriptada;


} 


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = ''

    alert('Texto copiado');

}



function btndesencriptar(){
    const textoEncriptado = desencriptar(texto.value);
    mensaje.value = textoEncriptado; 
    
    

    texto.value = '';
}

function btnEncriptar(){
    const textoEncriptado = encriptar(texto.value);
    mensaje.value = textoEncriptado; 
    munheco.style.display = 'none';
    mensaje.style.display = 'block'

    texto.value = '';
}





boton.onclick = btnEncriptar; 
boton2.onclick = btndesencriptar;
btncopiar.onclick = copiar;

