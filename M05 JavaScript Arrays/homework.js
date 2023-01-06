/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length-1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for( i=0 ; i<array.length ; i++ ){
      array[i]++;
    }
    return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frase ='';
   for ( i=0 ; i<palabras.length ; i++){
     if (i===0){
       frase = palabras[i]
     }else{
     frase = frase + ' ' + palabras[i];
     }
   }
   return frase;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   for ( i=0 ; i<array.length ; i++ ){
      if (array[i]===elemento){
        return true;
      }
    }return false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var total=0;
   for ( i=0 ; i<arrayOfNums.length ; i++){
     total=total+arrayOfNums[i];
   }return total;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var total=0;
   for ( i=0 ; i<resultadosTest.length ; i++){
   total= total + resultadosTest[i];
   }
   return total/(resultadosTest.length);
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var mayor=0;
   for ( i=0 ; i<arrayOfNums.length ; i++){
     if ( mayor<arrayOfNums[i] ){
       mayor = arrayOfNums[i];
     }
   }return mayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if ( arguments.length === 0 ){
      return 0;
    }else if (arguments.length === 1){
      return arguments[0];
    }else{
      var total=1;
      for ( i=0 ; i<arguments.length ; i++){
        total=total*arguments[i];
      }
      return total;
    }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador=0;
   for ( i=0 ; i<array.length ; i++){
     if ( array[i]>18 ){
       contador++;
     }
   }return contador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   var semana=[,'Es fin de semana','Es dia laboral','Es dia laboral','Es dia laboral','Es dia laboral','Es dia laboral','Es fin de semana'];
   return semana[numeroDeDia];
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   if ( (num === 9 || ((99>=num)&&(num>89))) || (((999>=num)&&(num>899)) || ((9999>=num)&&(num>8999))) ){
      return true;
    }else{
      return false;
    }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   for (i = 0 ; i < (array.length-1) ; i ++){
      if ( array[i]!==array[i+1]){
        return false;
      }
    }return true; 
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var array2=[];
  var Enero=false;
  var Marzo=false;
  var Noviembre=false;
  for ( i = 0 ; i < array.length ; i++ ){
    if ( array[i]==='Enero' || (array[i]==='Marzo' || array[i]==='Noviembre')){
      array2.push(array[i]);
    }//else{}
    }
     if(array2.length>0){
       for ( i = 0 ; i<array2.length ; i++ ){
        if (array2[i]==='Enero'){
          Enero=true;
        }else if (array2[i]==='Marzo'){
          Marzo=true;
        }else if (array2[i]==='Noviembre'){
          Noviembre=true;
        }
        }        
        if((Enero === true && Marzo === true) && Noviembre === true){
          return array2;
        }else{
          return 'No se encontraron los meses pedidos'
        } 
      }else{
        return 'No se encontraron los meses pedidos';
  }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   return [0,6,12,18,24,30,36,42,48,54,60];
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var array2=[];
   for ( i=0 ; i<array.length ; i++ ){
     if ( array[i]>100 ){
       array2.push(array[i]);
     }
   }return array2;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var i=0;
   var n=0;
   var m=0;
   var array=[];
       while (i<10){
           i++;
           if (i===num){
               m++;
               break;
           }
           num+=2;
           array[i-1]=num;
       }
       if(m!==0){
           return 'Se interrumpió la ejecución';
       }else{
           return array;
       }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   i=0;
   j=-1;
   n=num;
   array=[];
   while (i<10){
     i++;
     j++;
     if (i===5){
       j-=1;
       continue;
     }
     n+=2;
     array[j]=n;
   }
   return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
