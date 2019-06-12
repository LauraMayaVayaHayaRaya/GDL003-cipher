
document.getElementById('pagina1').style.display = 'block';

function cifrar(){
    document.getElementById('pagina1').style.display = 'none';
    document.getElementById('pagina2').style.display = 'block';
    document.getElementById('pagina3').style.display = 'none';
    document.getElementById('pagina4').style.display = 'none'; 
}  
function decifrar(){
    document.getElementById('pagina1').style.display = 'none';
    document.getElementById('pagina2').style.display = 'none';
    document.getElementById('pagina3').style.display = 'block';
    document.getElementById('pagina4').style.display = 'none'; 
}
function resultadoCifrar(){
    let ofset=parseInt(document.getElementById('numberCifrar').value);
    let string=document.getElementById('textoAcifrar').value;
    let encode=window.cipher.encode(ofset,string);//guarda el resultado que me da la funcion encode
    document.getElementById('pagina1').style.display = 'none';
    document.getElementById('pagina2').style.display = 'none';
    document.getElementById('pagina3').style.display = 'none';
    document.getElementById('pagina4').style.display = 'block';
    document.getElementById('resultados').innerHTML=encode;

}
function resultadoDecifrar(){
    let ofset=document.getElementById('numberDecifrar').value;
    let string=document.getElementById('textoAdecifrar').value;
    let decode=window.cipher.decode(ofset,string);
    document.getElementById('pagina1').style.display = 'none';
    document.getElementById('pagina2').style.display = 'none';
    document.getElementById('pagina3').style.display = 'none';
    document.getElementById('pagina4').style.display = 'block';
    document.getElementById('resultados').innerHTML=decode;

}
