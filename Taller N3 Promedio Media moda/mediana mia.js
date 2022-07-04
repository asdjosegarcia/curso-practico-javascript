function calcular(listaNoOrdenada){
    const listaOrdenada=listaNoOrdenada.sort(function (a, b) {
        return a - b;
      });
      let mitadLista=parseInt(listaOrdenada.length / 2);
   if (listaOrdenada.length%2===0){
    const elemento1 = listaOrdenada [mitadLista-1];
    const elemento2 = listaOrdenada [mitadLista];
    const resultado= (elemento1+elemento2)/2;
    console.log(resultado);
   }
   else {
    console.log (mitadLista);
   }
    
}