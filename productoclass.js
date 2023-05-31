class Producto
{
    nombre;
    precio;

    constructor(nombre, precio)
    {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarProducto = function() {
        alert("Nombre: " + this.nombre + "\nPrecio: " + this.precio)
    }
}