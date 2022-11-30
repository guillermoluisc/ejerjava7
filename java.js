// function triplicador(entrada){
//   return entrada*3
// }
// function multiplicador(num1, num2){
//   return num1*num2
// }

// function divisor (primero, segundo){
//   return primero/segundo
// }
// function resto(primero, segundo){
//   return primero%segundo
// }

// console.log(resto( divisor( multiplicador(triplicador(5),12),15),3))

// function contarDeA_n (contar_de_a,contar_hasta){
//   let iterador=1
//   while(iterador<=contar_hasta){
//     console.log(iterador)
//     iterador+=contar_de_a
//   }
// }
// contarDeA_n(2,10)



// ¿Cuáles Eran las Instrucciones de Fizzbuzz?
// show hint
// En ese ejercicio escribiste un programa que imprimía en la consola los números del 1 al 100, 
//teniendo en cuenta estos criterios:

// Si el número era múltiplo de 3, imprimía "Fizz" en vez del número.
// Si era múltiplo de 5, imprimía "Buzz".
// Si era, a la vez, múltiplo de 3 y de 5, imprimía "FizzBuzz".

// En este caso debería preguntar si esta bien asi pero yo interpreto esto no mucho mas complejo de esto
//Preguntarle a los demas que entienden.
// function FizzBuzz2 (string1, string2,hasta,fnum,bnum){
//   let n=1
//   let separados =""
// while(n<=hasta){
//   if (n%fnum==0 && n%bnum==0){
//     console.log(string1+" "+string2+"")  
//   }
//   else if (n%fnum==0){
//     console.log(string1)
//   }
//    else if (n%bnum==0){
//     console.log(string2)
//   }
//   n++
//   separados+=""+n+","

// }
//   console.log(separados)
// }
// let hasta =prompt("ingrese hasta que número debo contar")
// let fizz_num=prompt("ingrese el primer número")
// let buzz_num=prompt("ingrese el primer número")
// let palabra1=prompt("ingrese la plabra que remplaza a Fizz")
// let palabra2=prompt("ingrese la plabra que remplaza a Buzz")
// FizzBuzz2(palabra1,palabra2,hasta,fizz_num,buzz_num)

// function factorial(numero){
//   let f =1
//   let t=1
//   if(numero==0){
//     f=1
//     return f
//   }else if(numero<0){
//     console.log("no se puede numeros negativos")
//   }else{
//       while(t<=numero){
//     f=f*t
//     t++
//       }return(f)
//   }
// }

// function longitudNombre(s=""){
//   return (s.length);

// }

// const saludarVisitanteWeb = (nombreUsuario) => {
//   nombreUsuario===undefined ? alert(`¡Hola, anónimo!`): alert( `¡Hola, ${nombreUsuario}!`)

// }
// console.log( saludarVisitanteWeb() )


// //ARREGLOOOOOOOOOOOOOS
// let arreglos =["hola","chau","kk",["holaaaa","chauuuu"],"hola"]
// //agregar nuevos elementos a un arreglo, 
// //una forma es con push, otra es en la ultima posicion, o con el length
// //arreglos[arreglos.length]="algo"
// //arreglos.push("carlos")
// //
// //
// console.log(arreglos[3][1])
// //esta es una forma que encontre de agreagr elementos en cualquier lugr del arreglo
// //el cero indica "no borres ningun elemento"
// arreglos.splice(2, 0, 'wednesday');
// console.log(arreglos)

// //metodos shift(ELIMINA) y unshift(AGREGA) agregan y elmininan elementos al inicio del arreglo
// arreglos.unshift("casa")
// console.log(arreglos)

// //esto devuelve  el indicie de un elemento
// console.log("la posicion del arreglo kk es "+ arreglos.indexOf("kk"))

// //slice se usa para clonar un arreglo y no tener que trabajar con el original se puede usar .slice(), 
// //.slice(posicion de arranque), .slice(inicio, fin) de donde se quiere clonar

// let todo=arreglos.slice()
// let desde=arreglos.slice(2)
// let desdeHasta=arreglos.slice(0,3)

// console.log(todo+"----"+desde+"----"+desdeHasta)

// //el splice borra y retorna un arreglo con los elementos borrados(recibe por ahora dos parametros el primero
// //es de donde empieza a borrar y el segundo cuantos borra)

// //join y split, el join convierte un arreglo en cadena de caracteres
// let jooin=arreglos.join(",")
// console.log(jooin)
// // el split convierte una cadena en arreglo
// let spliit=jooin.split(",")
// console.log(spliit)

// //filter filtra- y retorna un arreglo de acuerdo a una condicion
// let fiilter=arreglos.filter(nota => nota == "hola")
// console.log(fiilter)

// //el loop for se usa generalmente para recorrer los arreglos, for(inicio desde, hasta condicion, paso)

// //el for each recorrel el arreglo completo recibe una funciono que se va a aplicar sobre cada elemento

// arreglos.forEach(function(arreglo){
//   console.log("un elemento "+ arreglo)
// })
//perfecto clonado