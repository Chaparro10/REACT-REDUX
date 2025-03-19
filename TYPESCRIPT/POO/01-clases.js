var Pelicula = /** @class */ (function () {
    function Pelicula(nombre, duracion, genero, director, actores) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.genero = genero;
        this.director = director;
        this.actores = actores;
    }
    Pelicula.prototype.proyectarEnCine = function () {
        console.log("".concat(this.nombre, " esta siendo proyectada"));
    };
    return Pelicula;
}());
var pelicula = new Pelicula("prueba1", 2, "Terror", "pepe", ["uno,dos"]);
pelicula.proyectarEnCine();
