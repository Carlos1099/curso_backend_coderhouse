class Usuario {
    constructor (nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    //METODOS 
    //getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
    getFullName(){
        console.log(`Nombre completo: ${this.nombre} ${this.apellido}`)
    }

    //addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
    addMascotas(pet){
        this.mascotas.push(pet)
    }

    //countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
    countMascotas(){
        console.log(this.mascotas.length)
    }

    //addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
    addBook(book){
        this.libros.push(book)
    }

    //getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.
    getBookNames(){
        this.libros.forEach(element => {
            console.log(`${element.nombre}`)
        });
    }

    
    
}

//Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.
const usuario = new Usuario("Carlos","Iturria",
                            [{nombre : "Viaje al fin de la noche",
                              autor : "Louis-Ferdinand Céline"
                            },
                            {nombre : "Don Quijote de la Mancha",
                             autor : "Miguel de Cervantes"
                            }],
                            ["Loro", "Perro", "Conejo"]
                            )
//INVOCACIÓN DE LOS 4 METODOS.
usuario.getFullName()

usuario.addMascotas("Hamster")

usuario.countMascotas()

usuario.addBook({nombre : "Relatos cortos", autor : "Antón Chéjov"})

usuario.getBookNames()