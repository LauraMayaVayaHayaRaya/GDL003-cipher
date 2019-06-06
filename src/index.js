
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
    var ofset=document.getElementById('numberCifrar').value;
    var string=document.getElementById('textoAcifrar').value;
    var codificado = window.cipher.encode(ofset,string);
    document.getElementById('pagina1').style.display = 'none';
    document.getElementById('pagina2').style.display = 'none';
    document.getElementById('pagina3').style.display = 'none';
    document.getElementById('pagina4').style.display = 'block';

}
function resultadoDecifrar(){
    var ofset=document.getElementById('numberDecifrar').value;
    var string=document.getElementById('textoAdecifrar').value;
    window.cipher.decode(ofset,string);
    document.getElementById('pagina1').style.display = 'none';
    document.getElementById('pagina2').style.display = 'none';
    document.getElementById('pagina3').style.display = 'none';
    document.getElementById('pagina4').style.display = 'block';

}
