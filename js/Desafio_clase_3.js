
// Buenas gente! Como les prometi, aqui esta el primer

// 🚩🚩 DESAFIO SEMANAL 🚩🚩 (recuerden las reglas para la entrega y resolucion que hay en el notion 👀)

// Estas con un amigo frente al obelisco el cual tiene 30 escalones (aprox 🤔), y tienes 
//un dado. Con tu amigo apuestas que vas a llegar hasta arriba en unas 40 tiradas de dado,
// donde al tirar el dado debe hacerse lo siguiente según el resultado que salga:

// Sale entre 1 y 2: bajas un escalón
// Sale entre 3 y 5: subes un escalón
// Si sale 6, se tira otra vez el dado y el numero que salga es la cantidad de escalones que se suben (inicialmente sale 6, vuelvo a tirar y si sale 3 por ejemplo, subo 3 escalones de golpe) 
//Pero si sale el 6 otra vez entonces se vuelve al inicio ☠ (el 6 salio dos veces seguidas)


// Tengan en cuenta que 🚧

// No se puede descender por debajo del escalón 0 +++ implementado!!
// En cada tirada existe un 10% de probabilidades de tropezar y caer 5 escalones  ++ Implementado!!
// Si nuestro amigo se llama Pepe entonces empezamos desde el 5o escalón    ++ IMPLEMENTADO
// Al final del juego se tiene que mostrar (tanto si llegamos como si no al escalon 30) +++ implementado
// Cantidad de tiradas que nos llevo al escalón 30 (o el escalon en el que nos quedamos) ++ implementado
// Mejor racha de subida (cantidad de escalones subidos sin bajar ni uno)  +++implementado
// Peor racha (cantidad de escalones bajados sin subir uno) ++implementado  
// Si ganamos la apuesta o no  ++ implementado


//comienzo del programa
// definimos constantes y variables

const ESCALONES = 30
const INTENTOS = 40
let escalon_actual = 0
let i = 1                   // variable iteradora
let dado = 0              // variable aleatoria

let mejor_racha_subida = 0
let mejor_racha_bajada = 0
let racha_subida = 0
let racha_bajada = 0


// comienza el ciclo
//

let amigo =  prompt ("Como se llama tu amigpo?").toLowerCase

if (amigo = "pepe"){        // ami go es pepe, entonces arranca del escalon 5
    escalon_actual = 5
    
}

while ( i< INTENTOS && escalon_actual <= 30) {              //sale si llega arriba o termina intentos

    dado = Math.ceil(Math.random() * 6)                 // tira el dado 
    
    if (Math.random() < 0.1){                                    // probabiliad de 10% de caer
        
        if(escalon_actual=escalon_actual-5 < 0){
            racha_bajada= racha_bajada + escalon_actual     //acumula desde el actual hasta el 0!
            escalon_actual=0                            // no se puede bajar mas del 0!    
         
         } else{
            escalon_actual=escalon_actual-5              // baja 5 escalones
            racha_bajada= racha_bajada + dado            //acumula racha bajada
         
         }
        
        
        racha_subida = 0                             // resetea racha subida

    }   


    if (dado == 6) {
        
        dado = Math.ceil(Math.random() * 6) // vuelve a tirar
        if (dado == 6) {                       // vuelve a salir 6!!
            escalon_actual = 0
           
        } else {
            //console.log("salio " + dado + " luego del 6")
            escalon_actual = escalon_actual + dado    // suma el segunfo tiro 
            racha_subida = racha_subida + dado          // acumula racha de subida  
            racha_bajada = 0                            // resetea racha bajada      
           
        }
          } else if (dado == 1 || dado == 2) {
        
        if (escalon_actual - 1 < 0 ){
            // ya esta abajo de todo, no cambia nada
            
        
            }else{
                escalon_actual=escalon_actual-1  // baja un escalon
                racha_bajada= racha_bajada + dado   //acumula racha bajada
                racha_subida = 0                    // resetea racha subida
                
            }
   
        
        
    } else if (dado >= 3 || dado <= 5) {
        escalon_actual = escalon_actual + 1 // sube 1 escalon
        racha_subida = racha_subida + dado          // acumula racha de subida   
        racha_bajada = 0                            // resetea racha bajada  
      
    }

    if (racha_subida>mejor_racha_subida){
        mejor_racha_subida = racha_subida
    }
    if (racha_bajada>mejor_racha_bajada){
        mejor_racha_bajada = racha_bajada
    }

 
i++
}               // cierre del while


if (escalon_actual >= 30) {                    // salio del bucle
    alert("Llegaste arriba!!! escalon " + escalon_actual + " en " + i + " intentos")

} else {
    alert("No llegaste a la meta")
}

alert ("Mejor racha subida: " + mejor_racha_subida)
alert ("Peor racha bajada: " + mejor_racha_bajada)

