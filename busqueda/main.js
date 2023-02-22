console.log("Esta es la clase de algoritmos de ordenamiento");
//Busqueda lieal
/*Este algoritmo recibe como elementos
Entrada:
1)Lista con elementos
2)Elemento a buscar
Salida:
Si encuentra el valor, retorna la posicion o infice, si no encuetra el valor retorna -1
PEUCODIGO DE ESTE ALGORITMO ES EL SIGUIENTE:
funcion Busquedalineal(lista,elemento)
    tamanoLista = se halla el tamano de la lista recibida
    contador = indice desde donde vamos a iterar
    Mientras contador < tamanoLista:
        si lista[contador] ==elemento
            regresa el indice donde se encontro
        si no
            regresa -1

    FIN FUNCION

*/

const busquedaLineal = (lista, elementoAbuscar)=>{
    const size = lista.length
    let index = 0
    let posicionAparicion = []
    var contadorAparicion = 0
    let vecesIterar = 0
    while(index < size){
        vecesIterar++
        let elementoPresente = lista[index]
        if(elementoPresente ===elementoAbuscar){
            posicionAparicion.push(index)
            contadorAparicion++
            index++
        }

        else{
           index++
        }





    }
    if (contadorAparicion>0){
        return {
            num_apariciones: contadorAparicion,
            posiciones_enco: posicionAparicion,
            vecesI: vecesIterar
        }
    }else{
        return {
        num_apariciones:0,
        posiciones_enco:[]}

}}

const miLista = [10,15,34,41446864,25,678,3,19,51,46,78,18,46,56,44,223]// esta es mi lista con 15 elementos, procedo a aplicar la busqueda lineal
var arregloNumeros2 = [4,2,76,3,6,5,454,44,11]
const resultadoBusqueda = busquedaLineal(arregloNumeros2,6)

console.log(resultadoBusqueda.num_apariciones)
console.log(resultadoBusqueda.posiciones_enco)
console.log(resultadoBusqueda.vecesI)

/*BUSQUEDA BINARIA Nota: Se requiere que la lista este ordenada previamente para hacer la busqueda
ENTRADA:
1.- Una lista ordenada
2.- Un elmento a encontrar en la lista

SALIDA:
Si el elemento existe:
Retorno el indice o indices donde se encontro el elemnto a encontrar
de otra manera: regresamos -1

PSEUDOCODGIGO
funcion BusquedaBinaria(listaOrdenada, elementoAbuscar ):
       min= el inicio de la llista (se empieza desde la posicion 0) INDICE DEL PRIMER ELEMENTO
       max = largo de la lista -1   INDICE DEL ULTIMO ELEMENTO
       mientras (min<=max):
        mitad= redondearHaciaAbajo (min+max)/2
        guess = listaOrdenanada[mitad]
        si (elementoAbuscar === guess){
            retorna mitad
        }
        si (elementoAbuscar> guess){
            min = mitad+1
        }
        si (elementoAbuscar<guess){
            mas = mitad -1
        }
    retorna -1
    FIN DE LA FUNCION*/



//con sort podemos ordenar rapidamente un arreglo de js, para despues aplicar algoritmo de busqueda

arregloNumeros2.sort((a,b)=>a-b)
const busquedaBinaria= (listaOrdnada,elemento)=>{
    let min=0
    let max= listaOrdnada.length-1
    let mitad=null
    let guess = null
    let veces = 0
    while(min<max){
        veces++


        mitad = Math.floor((min+max)/2)
        guess = listaOrdnada[mitad]
        if(elemento == guess){
            console.log("el numero de veces que itero fueron: ", veces)
            return mitad
        }
        if (elemento >guess){
            min = mitad+1
        }
        if(elemento< guess){
            max = mitad-1
        }
    }

    return -1

}

console.log("BUSUEDA BINARIA")
const resultadoBinario = busquedaBinaria(arregloNumeros2,6)
if (resultadoBinario>=0)console.log("Si existe tu numero y esta en la posicion"+ resultadoBinario)
if(resultadoBinario==-1)console.log("Tu numero no existe dentro de la lista")

//EJEMPLO1 Crear una funcion que encuentre las letras en un arreglo de numeros y regrese un nuevo arreglo de letras

//Input -> [8,'e',7,2,'a','d','f',2,3,1,4,3]
//Salida ->['e','a','d','f']


//Sera una busqueda lineal, pero tenemos que contar con un arreglo de las letras que queremos extraer

const letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const busquedaLetras=(lista,alfabeto)=>{
    const size = lista.length
    let index =0
    let posicionAparicion = []
    let letraAparicion =[]
    let cantidadAparacion = 0
    while(index<size){
        let elementoPresente = lista[index]
        for (let i=0; i<alfabeto.length;i++){
            if(alfabeto[i]===elementoPresente){
                cantidadAparacion++
                posicionAparicion.push(index)
                letraAparicion.push(alfabeto[i])
            }
         
        }
        index++
    }
    if (cantidadAparacion>0){
        return {
            can:cantidadAparacion,
            pa:posicionAparicion,
            la:letraAparicion

        }
    }else{
        return "Ninguna letra se ha encontrado"
    }
}
const ejemplo1 = [8,"e",7,2,"a","d","f",1,3,1,5,4]

const resultadoejemplo1 = busquedaLetras(ejemplo1,letras)

if(resultadoejemplo1.can>0){
    console.log(`Se encontraron las siguientes letras ${resultadoejemplo1.la} y estan en las posiciones ${resultadoejemplo1.pa}  `)
}else{
    console.log(resultadoejemplo1)
}

//EJEMPLO2
//Crear una agenda que registre cualquier contacto, y ademas que tenga un buscador

//Haremos una clase llamada contacto con los siguientes datos
//Nombre, appelido telefono

//Haremos la clase de agenda que permitira agregar contactos, eliminar contactos, y buscar, (editar contacto)

class Contacto{
    constructor(nombre,apellido,celular){
        
        //this.id = Math.floor(Math.random()*1000)
        this.nombre= nombre,
        this.apellido = apellido,
        this.celular = celular
    }
}
class Agenda{
    constructor(){
        this.lista=[]//esta sera la lista de contactos, se inicia vacia
    }
    agregar(contacto){
        this.lista.push(contacto)
    }
    //metodo para buscar un contacto dentro de la agenda por medio del nombre
    buscar(nombre){
        var listaaux= this.lista
        var listaResultados = []
        for(let i=0; i<listaaux.length; i++){
            if(nombre === listaaux[i].nombre){
                listaResultados.push(listaaux[i])
            }
        }
        return listaResultados
    }
    borrar(nombre,apellido){
        var listaaux= this.lista
       
        for(let i=0;i<listaaux.length; i++){
            if(nombre === listaaux[i].nombre && apellido ===listaaux[i].apellido){
                listaaux= listaaux.splice(i,1,"BORRADO")
                
            }
        }
        this.lista = listaaux
        
      
    }
    



}
//Creamos los contactos para meterlos a la agenda
var reneContacto = new Contacto("Rene","Manzano",55456498498)
var cristobalContacto = new Contacto("Cristobal","Morales",542364335)
var maiteContacto = new Contacto("Maite","Ferrada",1898486948694)
var maite2Contacto = new Contacto("Maite","Perroni",6291486484)
var juanContacto = new Contacto("Juan","Valenzuela",615418694)

var agendaGrupo22 = new Agenda()
//agregar los contactos
agendaGrupo22.agregar(reneContacto)
agendaGrupo22.agregar(cristobalContacto)
agendaGrupo22.agregar(maiteContacto)
agendaGrupo22.agregar(maite2Contacto)
agendaGrupo22.agregar(juanContacto)

//Hacemos la busqueda por nombre
console.log(agendaGrupo22.buscar("Maite"))
agendaGrupo22.borrar("Maite","Perroni")
console.log(agendaGrupo22.buscar("Maite"))
var AgendaNueva= new Agenda()

const crearContacto=(n,a,c)=>{
    return new Contacto(n,a,c)
}

const traerDatos = ()=>{

    var ape =document.getElementById("apellidos")
    var nom =document.getElementById("nombre")
    var cel2 =document.getElementById("celular")

    var apev = ape.value
    var nomv = nom.value
    var celv = cel2.value
    cel2.value = ""
    ape.value  = ""
    nom.value = ""
    console.log(celv)
    var con = crearContacto(nomv,apev,celv)
    AgendaNueva.agregar(con)
    console.log(AgendaNueva)

}



















































