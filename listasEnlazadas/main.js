//Los arreglos o Arrays son la estructura de datos que usa genralmente JS!!
//Los arreglos son objetos que heredan de la clase Array
//Tienen metodos y atributos que podemos usar a nuestro favor!!
//POR EJEMPLO 

var arregloEjemplo = new Array();
//Un metodo de ejemplo bastante comun en los arreglos es push

arregloEjemplo.push("Marcos")
arregloEjemplo.push("Carlos")
arregloEjemplo.push("Jeremias")

//Un atributo muy usado en los arrelgos es length, para saber la longitud de mi arreglo
console.log(arregloEjemplo.length)
//Metodos funcionales de los arreglos, son aquellos que reciben una funcion callback
//El ejemplo mas sencillo es forEach
var funcionCallback = (elemento,indice,arreglo)=>{
    console.log(elemento)
}
arregloEjemplo.forEach(funcionCallback)
// Otros ejemplos de metodos funcionales son map, filter y reduce

//------------------------LISTA ENLAZADA------------------------
//OJO!! ESTA ES SOLO UNA EJEMPLIFICACION DE UNA LISTA ENLAZADA
//Contamos con variables independientes que estan almacenadas, y contienen un puntero indicando la siguiente variable almacenada
//En listas enlazadas cuando hablamos de un elemento , se le conoce como NODO
var nombre1 = "Marcos"// --->Carlos   1er nodo SE LLAMA HEAD O CABEZA , si la lista enlazada esta vacia, entonces mi HEAD O CABEZA es NULL
var nombre2= "Carlos"// --->Jeremias
var nombre3="Jeremias"// ---> Null
//Lo que haria falta en estas variables para que fueran una lista enlazada seria que tuvieran cada una un puntero indicando cual es la siguiente variable, por ejemplo Marcos tiene un puntero senalando a carlos como la siguiente variable. A su vez Carlos indica que Jeremias es el siguiente. Jeremias como es el ultimo elemento senala a un espacio nulo o valor nulo NUll.

// Primero crearemos una clase para los NODOS
//El nodo es un elemento de la lista enlazada
//Va a tener un puntero o enlace al siguiente elemento de nuestra lista enlazada

class Nodo{
    constructor(datos){
        this.data=datos //almacena los datos de cualquier tipo en nuesto nodo
        this.puntero = null //el puntero por default es null pero recordemos que apunta al siguiente nodo de la lista
    }
}

//Crearemos nuestra clase llama ListaEnlazada
//Una lista enlazada se compone de nodos (elementos), el nodo inicial, es la cabecera o HEAD
//La lista enlazada tiene como atributo su longitud o numero de nodos

//Los metodos que tiene nuestra lista enlazada son 
/*Agregar un elemento o nodo
Borrar un elemento o nodo
Buscar un elemento o nodo
Leer los elementos/nodos de la lista
*/

class ListaEnlazada{
    constructor(){
        this.cabecera = null //esto significa que al momento de crear la lista, se genera vacia, con cabecera nula
        this.longitud = 0 //esto tambien significa que mi lista se inicia vacia.
    }
    //METODOS DE MI LISTA ENLAZADA
    estaVacia(){
        return this.cabecera===null // si la lista esta vacia , quiere decir que la cabecera es null y este metodo regresa un true, en caso contrario regresa false
    }

    adicionarPrincipio(dato){
        const nodo = new Nodo(dato)// creamos nuestro nodo con su data
        if(!this.cabecera){//Si la cabecera no existe o es nula, quiere decir que la listaba estaba vacia
            //Asignamos el elemento creado como la cabecera, porque el primer elemento que se adiciona a la lista
            this.cabecera = nodo

        }else{
            nodo.puntero = this.cabecera//el puntero del nodo que acabo de crear lo tengo que apuntar al nodo que era cabecera (al nodo que ocupaba la primera posicion)
            this.cabecera= nodo //establezco la cabecera como el nodo que acabo de crear

        }
        this.longitud = this.longitud+1

    }
    adicionarFinal(dato){
        const nodo = new Nodo(dato)//creamos nuestro nodo con su data
        if(this.cabecera=== null){
            this.cabecera = nodo //asignamos el nodo a nuestra cabecera 
        }else{
            let nodoPresente = this.cabecera
            while(nodoPresente.puntero){//recorro todos mis nodos mientras el puntero no sea nulo
                nodoPresente = nodoPresente.puntero//el nodo presente cambia al siguiente nodo mientras el puntero no sea nulo
            }
            //cuando sea nulo, salimos del ciclo while y se sigue ejecutando la funcion
            nodoPresente.puntero = nodo// ahora el ultimo nodo no apuntara al espacio nulo, sino que apuntara al nodo que acabamos de crear
        }
        this.longitud++//adicionamos uno a la longitud de la lista porque acabamos de meter un elemento al final
    }
    borrar(dato){

        let nodoPresente = this.cabecera
        let nodoAnterior = null
        if(nodoPresente.data === dato){
            //si el nodopresente es igual al nodo que quiero borrar, entonces es la cabecera la que quiero borrar!!
            this.cabecera = nodoPresente.puntero //asigno como cabecera al segundo elemento, esto es el puntero me indica al segudno elemento

               }else{// tengo que recorrer la lista para encontrar el dato que quiero borrar
                while(nodoPresente.data !== dato && nodoPresente.puntero !== null){
                    nodoAnterior = nodoPresente // el nodo anterior se vuelve el nodo presente
                    nodoPresente = nodoPresente.puntero //nodo presente pasa al siguiente nodo
                }
                nodoAnterior.puntero = nodoPresente.puntero//hago la reconexion del puntero anterior hacia el nodo sucesor del nodo que quiero eliminar
               }
               this.longitud--
               return "el dato: " + dato + " ha sido eliminado"
    
    }
    obtenerNodo(indice){
        if(this.cabecera== null || indice >= this.longitud){
            return null
        }else{
            let counter = 0
            let nodoPresente = this.cabecera
            while (counter !== indice){
                counter++
                nodoPresente= nodoPresente.puntero
            }
            return nodoPresente
        }

    }
    imprimirNodo(){//imprime nodo presente (hasta el ultimo nodo)
        // nodo actual
        let nodoPresente = this.cabecera
        while(nodoPresente){
            console.log(nodoPresente)
            nodoPresente = nodoPresente.puntero
        }

    }

}

//Creamos un objeto de nuestra clase Lista enlazada
const listaNumeros = new ListaEnlazada()
console.log(listaNumeros.estaVacia())//Esto me tiene que dar true porque la lista esta vacia en un principio

//agregar nodos

listaNumeros.adicionarPrincipio(100)
listaNumeros.adicionarPrincipio(50)
listaNumeros.adicionarPrincipio(20)
listaNumeros.adicionarFinal(500)//20 50 100 500
listaNumeros.imprimirNodo()//esto me imprime todos los nodos de mi lista
listaNumeros.borrar(50) //esto me borra el nodo que contiene el numero 50    20 100 500
listaNumeros.imprimirNodo()

//Buscar un nodo por su indice

console.log("Traer el nodo cuyo indice sea el 2", listaNumeros.obtenerNodo(2))






































