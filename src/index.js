
document.getElementById('pagina1').style.display = 'block';

//function cifrar(){
 const cifrar=()=>{
    document.getElementById('pagina1').style.display = 'none';
    document.getElementById('pagina2').style.display = 'block';
    document.getElementById('pagina3').style.display = 'none';
    document.getElementById('pagina4').style.display = 'none'; 
}; 
let linkCifrar = document.getElementById("cifrar");
linkCifrar.addEventListener("click", cifrar);
let linkRegresarACifrar = document.getElementById("regresarAcifrar");
linkRegresarACifrar.addEventListener("click", cifrar);



//function decifrar(){
    const decifrar=()=>{
    document.getElementById('pagina1').style.display = 'none';
    document.getElementById('pagina2').style.display = 'none';
    document.getElementById('pagina3').style.display = 'block';
    document.getElementById('pagina4').style.display = 'none'; 
};
let linkDecifrar = document.getElementById("decifrar");
linkDecifrar.addEventListener("click", decifrar);
let linkRegresarADecifrar = document.getElementById("regresarAdecifrar");
linkRegresarADecifrar.addEventListener("click", decifrar);


//function resultadoCifrar(){
    const resultadoCifrar=()=>{
    let ofset=parseInt(document.getElementById('numberCifrar').value);
    let string=document.getElementById('textoAcifrar').value;
    let encode=window.cipher.encode(ofset,string);//guarda el resultado que me da la funcion encode
    document.getElementById('pagina1').style.display = 'none';
    document.getElementById('pagina2').style.display = 'none';
    document.getElementById('pagina3').style.display = 'none';
    document.getElementById('pagina4').style.display = 'block';
    document.getElementById('resultados').innerHTML=encode;

};
let linkResultadoCifrar = document.getElementById("botonResultadoCifrar");
linkResultadoCifrar.addEventListener("click", resultadoCifrar);

//function resultadoDecifrar(){
    const resultadoDecifrar=()=>{
    let ofset=document.getElementById('numberDecifrar').value;
    let string=document.getElementById('textoAdecifrar').value;
    let decode=window.cipher.decode(ofset,string);
    document.getElementById('pagina1').style.display = 'none';
    document.getElementById('pagina2').style.display = 'none';
    document.getElementById('pagina3').style.display = 'none';
    document.getElementById('pagina4').style.display = 'block';
    document.getElementById('resultados').innerHTML=decode;

};
let linkResultadoDecifrar = document.getElementById("botonResultadoDecifrar");
linkResultadoDecifrar.addEventListener("click", resultadoDecifrar);

