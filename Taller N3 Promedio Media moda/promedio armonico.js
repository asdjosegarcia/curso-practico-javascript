function armonica(lista) {
      var divididos =lista.map(function(numero){
       return 1/numero;
}); 
    sumaDivididos=divididos.reduce((a,b)=>a+b);
    mediaArmonica=lista.length/sumaDivididos;
    return mediaArmonica;
}

