//OBJETO JSON , OBJETO LITERAL 

var ejemploObjeto = {
    nombre:"Rene",
    edad:32,
    ocupacion:"Maestro",
    soltero:true
}
//notacion punto para llamar cualquier variable de mi objeto literal

console.log(ejemploObjeto.nombre)
console.log(ejemploObjeto.edad)
console.log(ejemploObjeto.ocupacion)

//objeto no literal, cualquier objeto que proviene de una clase
//un array es un objeto no literal porque viene de la clase ARRAY
var arreglo = ["Pilar","Rene", "Maite","Cristobal"]

console.log(arreglo)
console.log(arreglo.length)
//OJO, LA PROGRAMACION ORIENTADA OBJETOS SE CARACTERIZA POR LLAMAR ATRIBUTOS Y METODOS CON LA NOTACION PUNTO
//FORMA 2 para crear un arreglo (objeto) proveniente de la clase ARRAY EXPLICITA

var arreglo2 = new Array("Pilar","Adrian")
console.log(arreglo2) 
var arreglo3 = new Array()

//IMPRIMIR TODOS LAS VARIABLES DE MI OBJETO EN AUTOMATICO
var listaLlaves = Object.keys(ejemploObjeto)
listaLlaves.forEach((elemento,indice,array)=>{
    console.log(ejemploObjeto[elemento])

})

//CONTINUANDO CON MI OBJETO LITERAL ....
var ejemploObjeto2 = {
    nombre:"Rene",
    edad:32,
    ocupacion:"Maestro",
    soltero:true,
    metodoejemplo: ()=>"saludos desde el metodo ejemplo dentro de el objeto literal"
}

console.log(ejemploObjeto2.metodoejemplo())
console.log(typeof(ejemploObjeto2.metodoejemplo))

var listaLlaves = Object.keys(ejemploObjeto2)
//imprime todos los atributos de un objeto literal, y en caso que tenga metodos o funciones, los va a ejecutar
listaLlaves.forEach((elemento,indice,array)=>{
    //console.log(ejemploObjeto2[elemento])
    if (typeof(ejemploObjeto2[elemento])==="function"){
        console.log(ejemploObjeto2.metodoejemplo())

    }else{
        console.log(ejemploObjeto2[elemento])
    }

})

//sintaxis para declarar una clase

class MiClase {
    //METODO constructor, es el que permite indicar las propiedades de esta clase. Se ejecuta automaticamente cuando se crea el objeto
    constructor(propiedad1,propiedad2){//los atributos se llaman propiedad1 y propiedad2
        this.propiedad1 = propiedad1
        this.propiedad2 = propiedad2
    }
    //ESTOS SON LOS METODOS DENTRO DE MI FUNCION
    miMetodo1(){
        return "Saludos desde miMetodo1()"
    }
    miMetodo2(){
        return "Saludos desde miMetodo2()"
    }
    miMetodo3(){
        return `Esta es la propiedad1 ${this.propiedad1} desde el metodo3 !!`
    }
}

var objeto1 = new MiClase("Propiedad1 del objeto1", "Propiedad2 del objeto1")
var objeto2 = new MiClase("Propiedad1 del objeto2", "Propiedad2 del objeto2")

console.log(objeto1.propiedad1)
console.log(objeto1.propiedad2)
console.log(objeto1.miMetodo1())
console.log(objeto1.miMetodo2())
console.log(objeto1.miMetodo3())


class Carro{
    #privado = "carro" // ESTO ES UNA VARIABLE PRIVADA Y SOLO SE PUEDE ACCEDER A ELLA A TRAVES DE UN SET O UN GET
    constructor(nombre,color, marca,modelo,ruedas,motor){

        this.nombre = nombre
        this.color = color
        this.marca = marca
        this.modelo = modelo
        this.ruedas = ruedas
        this.motor = motor
    }
    arranca(){
        return `Soy un ${this.nombre} modelo ${this.modelo}, y estoy arrancando`
    }
    frena(){
        return `Soy un ${this.nombre} marca ${this.marca}, y estoy frenando`
    }
    dobla(){
        return `Soy un ${this.nombre} modelo ${this.modelo}, tengo ${this.ruedas} numero de ruedas y estoy doblando`
    }
    //GETTERS
    get priv(){
        return this.#privado
    }
    getNombre(){
        return this.nombre
    }
    getMarca(){
        return this.marca
    }

    //SETTERS
    set privs(nuevoauto){
        this.#privado = nuevoauto
    }


    setNombre(nuevoNombre){
        this.nombre = nuevoNombre
        return this.nombre
    }
    setColor(nuevoColor){
        this.color = nuevoColor
        return this.color
    }


}

var ferrari = new Carro("Enzo","amarillo","Ferrari",2023,4,"v8")
console.log(ferrari)
console.log(ferrari.arranca())
console.log(ferrari.frena())
console.log(ferrari.getNombre())//Esta manera me imprime el nombre al igual que la linea de abajo
console.log(ferrari.nombre)//Esto hace lo mismo que la linea de arriba
console.log(ferrari.setNombre("Lamborghini"))
console.log(ferrari.nombre)
ferrari.nombre = "Volkswagen"
console.log(ferrari.nombre)
console.log(ferrari.priv)// aunque es una funcion getter, se comporta como atributo y NO es necesario abrir y cerrar ()
ferrari.privs = "moto"// setter de variable privada, sigue sin ser una funcion comun, basta con igual a la nueva variable
console.log(ferrari.priv)







