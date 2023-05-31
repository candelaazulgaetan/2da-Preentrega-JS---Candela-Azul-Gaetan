class Tarjeta
{
    titular;
    numero;
    fechaVencMes;
    fechaVencAnio;
    cvv;

    constructor(titular, numero, fechaVencMes, fechaVencAnio, cvv)
    {
        this.titular = titular;
        this.numero = numero;
        this.fechaVencMes = fechaVencMes;
        this.fechaVencAnio = fechaVencAnio;
        this.cvv = cvv;
    }

    mostrarTarjeta = function() {
        alert("Titular: " + this.titular + "\nNúmero: " + this.numero + "\nFecha vencimiento: " + this.fechaVencMes + "/" + this.fechaVencAnio + "\nCVV: " + this.cvv)
    }
}