class Pelicula {
  nombre?: string;
  duracion?: number;
  genero?: string;
  director?: string;
  actores?: string[];

  constructor(
    nombre: string,
    duracion: number,
    genero: string,
    director: string,
    actores: string[]
  ) {
    this.nombre = nombre;
    this.duracion = duracion;
    this.genero = genero;
    this.director = director;
    this.actores = actores;
  }

  proyectarEnCine() {
    console.log(`${this.nombre} esta siendo proyectada`);
  }
}

const pelicula = new Pelicula("prueba1", 2, "Terror", "pepe", ["uno,dos"]);

pelicula.proyectarEnCine();
