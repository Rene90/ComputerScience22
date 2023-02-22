console.log("HOLA DESDE JAVASCRIPT")
//CREAREMOS UN PROGRAMA QUE MULTIPLICA DOS NUMEROS ALEATORIOS ENTEROS, Y VA IMPRIMRIR EL RESULTADO EN CONSOLA SOLO SI ES MAYOR A DIEZ, EN CASO CONTRARIO IMPRIME LA LEYENDA "NUMERO MUY PEQUEÑO"

//ALGORITMO
/* PRODUCTO
inicio(numero1,numero2)
    0.Declaramos el numero 3 como tipo numero Entero
    1.leer el numero1 y el numero 2
    2.hacer la multiplicacion del numero 1 y el numero 2 y guardarlo en numero 3
    SI numero3 ES MAYOR A  10
        IMPRIME numero 3 EN CONSOLA
    EN CASO CONTRARIO
        IMPRIME "NUMERO MUY PEQUEÑO" 
final numero3
*/

var producto = function(numero1,numero2){
    let numero3;//PASO0
    let a=numero1 //PASO1
    let b=numero2
    numero3 = a*b//PASO2
    if(numero3>200){
        console.log(numero3)

    }else{
        console.log(`NUMERO MUY PEQUEÑO = ${numero3}`)
    }
    return numero3
}

var numero1 = Math.floor(Math.random()*100)//GENERA UN NUMERO ALEATORIO ENTRE 0 Y 100, yREDONDEA HACIA NUMERO ENTERO INMEDIATO ABAJO
var numero2 = Math.ceil(Math.random()*100)//GENERA UN NUMERO ALEATORIO ENTRE 0 Y 100, yREDONDEA HACIA NUMERO ENTERO INMEDIATO ARRIBA

producto(numero1,numero2)//OJO ESTO ES HARDCODE


//Recorre una lista de numeros enteros e imprime lo siguiente segun sea el caso
/* Imprime si el numero es divisible entre 2 o entre 3
    En caso de que no sea divisible por ninguno de estos dos anteriores, imprime solamente el numero */
