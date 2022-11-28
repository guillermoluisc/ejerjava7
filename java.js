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


//ARREGLOOOOOOOOOOOOOS
let arreglos =["hola","chau","kk",["holaaaa","chauuuu"]]
//agregar nuevos elementos a un arreglo, 
//una forma es con push, otra es en la ultima posicion, o con el length
//arreglos[arreglos.length]="algo"
//arreglos.push("carlos")
//
//
console.log(arreglos[3][1])