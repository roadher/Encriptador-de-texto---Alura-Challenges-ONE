/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
//var texto=" ";
//var textoEncriptado=" ";
//var textoDesencriptado=" ";

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function obtenerTexto(){
    let textoUsuario = document.getElementById('textoUsuario').value; //El texto se guarda como un array. Cada letra es un posicion del array.
    //console.log(textoUsuario);
    return textoUsuario;
}

function ocultarImagen(elemento) {
    document.getElementById(elemento).style.display = "none";
    //document.getElementById("myP2").style.visibility = "hidden"; //elimino objeto
  }

function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoEncriptado =" ";
    //console.log(texto);
    
    for(let i=0;i<texto.length;i++){
        if(texto[i]=="a"){
            textoEncriptado = textoEncriptado + "ai"; 
        }else if(texto[i]=="e"){
            textoEncriptado = textoEncriptado + "enter";
        }
        else if(texto[i]=="i"){
            textoEncriptado = textoEncriptado + "imes";
        }
        else if(texto[i]=="o"){
            textoEncriptado = textoEncriptado + "ober";
        }
        else if(texto[i]=="u"){
            textoEncriptado = textoEncriptado + "ufat";
        }else {
            textoEncriptado=textoEncriptado + texto[i];
            //console.log(texto);
            //console.log(textoEncriptado[i+1]);
            //console.log(i);
        }
    }
    console.log(textoEncriptado);
    return textoEncriptado;
}

function desencriptarTexto(mensaje){
    let texto=mensaje;
    textoDesencriptado= " ";
    for(let i=0;i<texto.length;i++){
        if(texto[i]=="a"){
            textoDesencriptado = textoDesencriptado + "a";
            i++;
        }else if(texto[i]=="e"){
            textoDesencriptado = textoDesencriptado + "e";
            i=i+4;
        }else if(texto[i]=="i"){
            textoDesencriptado = textoDesencriptado + "i";
            i=i+3;
        }else if(texto[i]=="o"){
            textoDesencriptado = textoDesencriptado + "o";
            i=i+3;
        }else if(texto[i]=="u"){
            textoDesencriptado = textoDesencriptado + "u";
            i=i+3;
        }else{
            textoDesencriptado = textoDesencriptado + texto[i];
        }
    }
   console.log(textoDesencriptado);
   return textoDesencriptado;
}

function encriptar(){
    let mensaje = obtenerTexto();
    ocultarImagen("muñeco");
    ocultarImagen("p2");
    ocultarImagen("p21");
    mensaje = encriptarTexto(mensaje);
    asignarTextoElemento('p1',mensaje);
}

function desencriptar(){
    let mensaje=obtenerTexto();
    ocultarImagen("muñeco");
    ocultarImagen("p2");
    ocultarImagen("p21");
    mensaje = desencriptarTexto(mensaje);
    asignarTextoElemento('p1',mensaje);
}





