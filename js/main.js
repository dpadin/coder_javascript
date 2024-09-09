


// ///////////////////////////////////////////////////
// De la clase anterior

// let alumno = prompt('Por favor ingrese el nombre del alumno').toLowerCase()

// let nota1 = Number(prompt('Ingrese la primer nota'))
// let nota2 = Number(prompt('Ingrese la segunda nota'))
// let nota3 = Number(prompt('Ingrese la tercer nota'))


// let promedio = (nota1 + nota2 + nota3) / 3

// console.log('El promedio de ' + alumno + ' es ' + promedio)

// Ahora se pide la cantidad de notas al usuario
// Mostrar si el usuario aprueba o no aprueba
// Si el usuario se llama Pepe directamente le ponemos un 10 (uso de toUpper/toLowerCase)

// cantidad_notas = Number(prompt("Ingrese la cantidad de notas"))
// let suma_notas =0;
// let nota_ingresada;

// for (let nota = 1; nota<= cantidad_notas;nota++){
//     nota_ingresada = Number(prompt("Ingrese nota: " + nota));
//     suma_notas=suma_notas  + nota_ingresada;
// }
// alert ("El promedio es : " + suma_notas / cantidad_notas)


// adivina el numero 

// let adivina = 5;

// for (let i = 1; i <= 5; i++) {

//     if (Number(prompt("Intento #" + i + " Ingrese numero ")) == adivina) {
//         alert("adivinaste!")
//         break;

//         console.log("") // Visual studio lo grisa x q sabe que no se va a ejecutar
//     } else {
//         ("Sigue intentando")
//     }
// }

// console.log("fin del programa")


// WHILE

// let condicion = true
// while(condicion){
//     if(confirm("desea salir?")){
//         break;
//     }

// }
// console.log("Fin del programa")

// let num=0
// while (num<20){
//     console.log ("Numero =  " + num)
//     num++
// }
// console.log("Fin del programa")
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// pedir dato numerico hasta que el dato sea valido

// let num = Number(prompt ("Ingrese un numero"))

// while (isNaN (num)){
//      num = Number(prompt ("Ingrese un numero en numero por favor!"));
// } 
// alert("numero ingresado es: " + num)


//++++++++++++++++++++++++++
// switch case
// let menu = Number(prompt("Ingrese opcion"))

// switch (menu){
//     case 1 : alert (" presiono 1")
//     break

//     case 2 : alert (" presiono 2")
//     break

//     case 3 : alert (" presiono 3")
//     break
//     }

//*+++++++++++++++++++++++++++++++++++++++++++++++
// Practica
// Ejercicio 1
// - Juego de adivinar el numero secreto
//     Se define un numero secreto de forma aleatoria

//     Se pide al usuario adivinar el numero en cierta cantidad de intentos
    
//     Se puede generar un marcador e indicar cuantas veces se han adivinado numeros aleatorios y una racha de cuantos numeros se han adivinado de forma consecutiva





// let num_apuesta = 0         // numero apostado 
// const INTENTOS = 10         // 
// const MIN = 1               // minimo numero en el ragno
// const MAX = 4              // maximo numero en el rango
// let contador_intentos = 0
// let contador_aciertos = 0

// let num_secreto = Math.floor(Math.random() * (MAX - MIN + 1) + MIN) // genera un numero random entre rangos


// //verifica que las entradas sean numeros

// while (contador_intentos < INTENTOS) {
//     num_apuesta = Number(prompt("Ingrese numero a adivinar dentro del rango: " + MIN + " y " + MAX + " , tiene : " + (INTENTOS - contador_intentos) + " Intentos"))

//     if (num_apuesta >= MIN && num_apuesta <= MAX && !isNaN(num_apuesta)) {                            // chackea q sea numeor
//         contador_intentos++ // incremantea contador de intentos

//         if (num_apuesta == num_secreto) {
//             // ACERTO el numero!
//             alert("ACERTO EL NUMERO en " + contador_intentos + " Intentos")

//             contador_aciertos++
//         } else {
//             alert("siga participando, le quedan:  " + (INTENTOS - contador_intentos) + " Chances")


//         }
//         num_secreto = Math.floor(Math.random() * (MAX - MIN + 1) + MIN)  // generar un nuevo numero secreto


//     } else {
//         alert("Ingrese un numero dentro del rango")
//     }


// }

// alert("El numero secreto se ha acertado: " + contador_aciertos + " Veces")

// console.log("Fin del programa")


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Ejercicios #2
// - Calculadora de factoriales
    
//     Se ingresa un numero y se calcula el factorial de ese numero


// let numero = Number(prompt("Ingrese un numero  a calcular su factorial"))
// let factorial = numero                   // inicializa el facotrial 

// if (!isNaN(numero) && numero>0 ){               // valida que sea numero y mayor que 0
//     for (let i = 1 ; i<numero ; i++){           // bucle para calcular 
//             factorial = factorial * i           // hace la operacion del factorial  
          
//     }
//     alert ("El factorial de: " + numero + " es : " + factorial)

// } else{
//     alert("Ingrese solo numeros!")
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Ejercicio #3
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// - Sistema para calcular promedios
    
//     Sistema perpetuo donde el usuario calcula el promedio de sus alumnos
    
//     Se ingresa la cantidad de notas a promediar 👀



let nota = 0

do {
    let cantidad_notas = Number(prompt("Ingrese numero de notas a promediar"))
    if (cantidad_notas > 1 && !isNaN(cantidad_notas)) {
        let promedio = 0
        let i = 1
        while (i <= cantidad_notas) {
            nota = Number(prompt("Ingrese nota: " + i))
            if (!isNaN(nota) && nota >= 0) {
                promedio = promedio + nota
                i++
            } else {
                alert("Ingrese numeros solamente")
                                             // decrementa el count
            }
           
        }
        alert("El promedio es: " + (promedio / cantidad_notas))

    } else {
        alert("Ingrese numeros!")
    }

} while (!confirm("desea salir?"))

console.log("Fin del programa")




