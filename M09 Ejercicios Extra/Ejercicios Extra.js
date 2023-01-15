/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
  var a=(Object.keys(objeto));
  var b=(Object.values(objeto));
  var c=[];
  for ( i=0 ; i<a.length ; i++){
    c[i]=[ a[i] , b[i] ];
  }
  return c;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   abc = 'abcdefghijklmnopqrstuvwxyz';
  abc2 = abc.split('');
  for (ii=0;ii<abc2.length;ii++){
     abc2[ii]=0;
  }
  for ( ii=0 ; ii<string.length ; ii++ ){
     for ( jj=0 ; jj<abc.length ; jj++){
        if (string[ii]===abc[jj]){
           abc2[jj]++;
        }
     }
  }
  nuevo={};
  for (ii=0;ii<abc.length;ii++){
      if (abc2[ii]!==0){
         nuevo[abc[ii]]=abc2[ii];
  }
}
  return nuevo;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   abc='ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
   abcM=abc.split('');
   abc2='abcdefghijklmnñopqrstuvwxyz';
   abcm=abc2.split('');
   strM=[];
   strm=[];
   for ( i=0 ; i<string.length ; i++ ){
      for ( j=0 ; j<abcM.length ; j++ ){
         if ( string[i] === abcM[j] ){
            strM.push(string[i]);
         }else if ( string[i] === abcm[j] ){
            strm.push(string[i]);
         }
      }
   }
   return str= strM.join('')+strm.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   frase2=frase.split(' ');
   frase3 = [];
   fraseM = [];
   frase4 = [];
   for ( i=0 ; i<frase2.length ; i++ ){
      frase3[i]=frase2[i].split('');
   }
   for ( i=0 ; i<frase3.length ; i++ ){
      frase4[i]=frase3[i].reverse();
      fraseM[i]=frase4[i].join('');
      //console.log(frase4);
   }
   frase5=fraseM.join(' ');
   return frase5;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   numero2 = ((numero.toString()).split('')).reverse();
   console.log(numero2);
   numeroNvo=numero2.join('');
   numeroInv= parseInt(numeroNvo);
   //console.log(numeroInv);
   if (numero === numeroInv){
      return 'Es capicua';
   }else{
      return 'No es capicua';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   stringN=string.split('');
   stringS=[];
   for ( i=0 ; i<stringN.length ; i++ ){
      if ( stringN[i]==='a' || stringN[i]==='b' || stringN[i]==='c'){
      }else{
         stringS.push(stringN[i])
      }
   }
   stringS2=stringS.join('');
   return stringS2;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
