function invertirOrden(array) {
  // Invertir el orden de los elementos del array que recibe por parametro
  // Que los ultimos elementos, pasen a ser los primeros
  //
  // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
  // No vale usar el metodo "reverse"
  var ordenInvertido = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] > 9) {
      continue;
    } else {
      ordenInvertido.push(array[i]);
    }
  }
  return ordenInvertido;
}

function numeroEnComun(array1, array2) {
  // Entre los dos array's que recibe la funcion por parametro
  // Buscar y retornar el valor en comun entre ellos
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return array1[i];
      }
    }
  }
  if (Math.min(...array1) < Math.min(...array2)) {
    return Math.min(...array1);
  } else {
    return Math.min(...array2);
  }
}

function sumaDeArrays(array) {
  // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
  // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
  // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
  // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
  var sumaR = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      sumaR.push(
        array[i].reduce(function(a, b) {
          return a + b;
        },0)
      );
    } else {
      sumaR.push(array[i]);
    }
  }
  return sumaR;
}

function mismoValorMismosElementos(numero, divisor) {
  // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
  // Todos los elementos deben tener el mismo valor
  // OJO: Si el resultado de la division no es un entero, deben devolver false
  var arr = []
  if (numero % divisor !== 0){
    return false
  }else{
    var cont = 0
    while(cont !== divisor){
        arr.push(numero / divisor)
        cont++
        }
    }
    console.log(arr)
    return arr
  }

function elementoMenorYMayor(array) {
  // El Array recibido por props es un array que contienen numeros
  // Tenes que retornar un array
  // Solamente con el elemento menor y mayor del array recibido
  var arrMenMay = []
  arrMenMay.push(Math.min(...array))
  arrMenMay.push(Math.max(...array))
  return arrMenMay
}

module.exports = {
  numeroEnComun,
  invertirOrden,
  elementoMenorYMayor,
  sumaDeArrays,
  mismoValorMismosElementos,
};
