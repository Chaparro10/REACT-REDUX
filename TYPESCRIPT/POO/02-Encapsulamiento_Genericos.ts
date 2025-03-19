class sorteo<T> {
  private ticket?: T;

  constructor(private nombre: string) {}

  getTicket() {
    return this.ticket;
  }
  setTicket(ticket: T) {
    this.ticket = ticket;
  }
  public sortear(): string {
    return `Para ${this.nombre} el ticket es ${this.ticket}`;
  }
}

let sorteoS = new sorteo<string>("Juan");

sorteoS.setTicket("QWEEEE");
console.log(sorteoS.sortear());
