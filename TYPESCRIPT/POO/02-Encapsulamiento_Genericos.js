var sorteo = /** @class */ (function () {
    function sorteo(nombre) {
        this.nombre = nombre;
    }
    sorteo.prototype.getTicket = function () {
        return this.ticket;
    };
    sorteo.prototype.setTicket = function (ticket) {
        this.ticket = ticket;
    };
    sorteo.prototype.sortear = function () {
        return "Para ".concat(this.nombre, " el ticket es ").concat(this.ticket);
    };
    return sorteo;
}());
var sorteoS = new sorteo("Juan");
sorteoS.setTicket("QWEEEE");
console.log(sorteoS.sortear());
