window.cipher = {
  // ...  
  encode:(ofset,string)=>{
    let palabraCifrada='';
    for(let i=0;i< string.length;i++){
      let ascii=string[i].toUpperCase().charCodeAt();
      if (ascii >= 65 && ascii <= 90){
        let saltos=(ascii-65+ofset)%26+65;
        palabraCifrada+=String.fromCharCode(saltos);
      }else{
        palabraCifrada+=String.fromCharCode(ascii);
      }
    }
    return palabraCifrada;
  },

  decode:(ofset,string)=>{
    let palabraDecifrada='';
    for(let i=0;i< string.length;i++){
      let ascii=string[i].toUpperCase().charCodeAt();
      if (ascii >= 65 && ascii <= 90){
        let saltos=(ascii+65-ofset)%26+65; //minúsculas --+
        palabraDecifrada+=String.fromCharCode(saltos);
      }else{
        palabraDecifrada+=String.fromCharCode(ascii);
      }
    }
    return palabraDecifrada; 
  }
};
