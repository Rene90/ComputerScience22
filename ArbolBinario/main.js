console.log("Esta es la clase de arboles binarios")

//Al igual que las listas enlazadas, vamos a crear una clase para instanciar objetos NODO

class Nodo{
    constructor(data,izquierda,derecha){//mi nodo ahora va a hacer referencia a un hijo izquierdo y a un hijo derecho
        this.data = data
        this.izquierda= izquierda
        this.derecha = derecha
    }
}


class ArbolBinario{
    constructor(){
        this.raiz =null
    }
    //Metodo agregar
    agregar(data){
        //verificamos que el arbol este vaio
        if(this.raiz === null){
            //creamos un nodo y lo ponemos como raiz (como primer nodo)
            this.raiz = new Nodo(data,null,null)
            return
        }
        //si no esta vacia , vamos a recorrer el arbol hasta llegar a un nodo hoja, empezando desde la raiz

        let nodoPresente = this.raiz
        while(true){
            if(data < nodoPresente.data){
                //revisar el nodo de la izquierda esta vacio
                if(nodoPresente.izquierda !== null){
                    nodoPresente = nodoPresente.izquierda// le asigno la posicion de la izuierda
                }else{

                    nodoPresente.izquierda = new Nodo(data,null,null)
                    return nodoPresente.izquierda
                }
            }else{
                //revisar el nodo de la derecha
                if(nodoPresente.derecha !== null){
                    nodoPresente= nodoPresente.derecha
                }else{
                    //cambiar el ndo actual por el hijo a la derecha
                    nodoPresente.derecha = new Nodo(data,null,null)
                    return nodoPresente.derecha
                }
            }
        }
    }
    contiene(data){
        //recorremos el arbol desde la raiz para buscar el dato del parametro
        let nodoPresente = this.raiz
        while(nodoPresente !==null){
            if(data=== nodoPresente.data){
                return true
            }else{
                if(data <nodoPresente.data){
                    nodoPresente = nodoPresente.izquierda
                }else{
                    nodoPresente = nodoPresente.derecha
                }
            }
        }
        return false
    }


}

const arbolito = new ArbolBinario()

arbolito.agregar(12)
arbolito.agregar(52)
arbolito.agregar(20)
arbolito.agregar(14)
arbolito.agregar(16)
arbolito.agregar(18)
arbolito.agregar(30)

console.log(arbolito.contiene(16))
console.log(arbolito)
// de tarea, hacer graficamente el arbol de la linea 71





