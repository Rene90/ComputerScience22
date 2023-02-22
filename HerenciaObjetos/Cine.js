class Largometraje{
    constructor(titulo,duracion){
        this.titulo = titulo
        this.duracion = duracion
    }
    //metdos del largometraje
    getTitle(){
        return this.titulo
    }
    getDuration(){
        return this.duracion
    }
}

//creo clase Pelicula que seria un largometraje , entonces heredare de la clase Largometraje
class Pelicula extends Largometraje{
    constructor(titulo,duracion,genero){
        super(titulo,duracion)
        this.genero = genero
    }
    //metodo propio de Pelicula ademas de los heredados de clase Largometraje
    getGenero(){
        return this.genero
    }
}
//creo clase Partido  que seria un largometraje, entonces hereda de la clase Largometraje

class Partido extends Largometraje {
    constructor(titulo,duracion,equipo){
        super(titulo,duracion)
        this.equipo = equipo
    }
    //metodo propio de Partido ademas de los del Largometraje
    getTeam(){
        return this.equipo
    }
}




class Sala {
    constructor(numSala, cantGente, largometraje){
        this.numSala=numSala
        this.cantGente=cantGente
        this.largometraje = largometraje
    }
    //METODOS  de mi sala
    setMovie(){
        return "Se esta reproduciendo"+ this.largometraje.getTitle()+
        "\n Duracion: "+ this.largometraje.getDuration()
    }
    getPeople(){
        return this.cantGente
    }
    getSalaNumber(){
        return this.numSala
    }


}


class Cine {
    constructor(sala){
        this.sala = sala
    }
    //metodo de mi cine
    Reproducir(){
        return this.sala.setMovie()+
        "\n" + this.sala.getPeople()+
        "\n" + this.sala.getSalaNumber()
    }

}
//INSTANCIA OBJETO PELICULA PARA PROYECTAR
const peliculaUno = new Pelicula("Titanic","200 minutos", "Romantica")
//Crear sala para cine
const salauno = new Sala("Sala 1", "200 personas", peliculaUno) 
//Crear cine de la clase Cine

const cinepolis = new Cine(salauno)

console.log(cinepolis.Reproducir())