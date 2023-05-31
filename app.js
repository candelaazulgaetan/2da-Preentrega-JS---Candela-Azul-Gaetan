menu()

function menu()
{
    let opcion
    let carrito = []

    do {
        opcion = prompt("1- Ingresar productos\n2- Ver carrito\n3- Buscar producto\n4- Ingresar tarjeta\n5- Finalizar compra")
        opcion = parseInt(opcion)

        switch (opcion) {
            case 1:
                cargarUnProducto(carrito)
                break
            case 2:
                if(carrito.length === 0)
                {
                    alert("No hay productos")
                }
                else
                {
                    for (let i = 0; i < carrito.length; i++)
                    {
                        mostrar(carrito[i])
                    }
                }
                break
            case 3:
                buscar(carrito)
                break
            case 4:
                ingresarTarjeta()
                break
            case 5:
                alert("Finalizando compra...")
                if(carrito.length === 0)
                {
                    alert("No hay productos")
                }
                else
                {
                    alert("Total a pagar: " + total(carrito))
                }
                menu()
                break
            default:
                alert("Opcion invalida!")
        }
    } while (opcion != 5)
}

function cargarUnProducto(carrito)
{
    let producto = new Producto();
    producto.nombre = prompt("Ingrese un nombre para el articulo: ")
    producto.precio = parseFloat(prompt("Ingrese un precio: "))
    carrito.push(producto)
}

function mostrar(producto)
{
    producto.mostrarProducto()
}

function buscar(carrito)
{
    buscado = prompt("Ingrese nombre del producto que desea buscar: ")
    if((carrito.some((item) => item.nombre === buscado)) == true)
    {
        const carritoFiltrado = carrito.filter((item) => item.nombre === buscado)
        for (let i = 0; i < carritoFiltrado.length; i++)
        {
            mostrar(carritoFiltrado[i])
        }
    }
    else
    {
        alert("El producto no se encuentra en el carrito")
    }
}

function ingresarTarjeta()
{
    let tarjeta = new Tarjeta()
    const fecha = new Date()

    tarjeta.titular = prompt("Ingrese titular de la tarjeta: ")

    do
    {
        tarjeta.numero = prompt("Ingrese número de tarjeta (sin espacio, guiones ni puntos): ")
        if(tarjeta.numero.length != 16)
        {
            alert("Número incorrecto! Debe contener 16 dígitos")
        }
    }while(tarjeta.numero.length != 16)

    do
    {
        tarjeta.fechaVencAnio = prompt("Ingrese SÓLO año de vencimiento (AAAA): ")
        if(tarjeta.fechaVencAnio > 9999 || tarjeta.fechaVencAnio < 1000)
        {
            alert("FECHA INCORRECTA!")
        }
        else
        {
            if(tarjeta.fechaVencAnio >= fecha.getFullYear())
            {
                do
                {
                    tarjeta.fechaVencMes = prompt("Ingrese SÓLO mes de vencimiento (MM): ")
                    if(tarjeta.fechaVencMes > 12 || tarjeta.fechaVencMes < 1)
                    {
                        alert("FECHA INCORRECTA!")
                    }
                    else
                    {
                        if(tarjeta.fechaVencAnio == fecha.getFullYear() && tarjeta.fechaVencMes < fecha.getMonth() + 1)
                        {
                            alert("TARJETA VENCIDA!")
                        }
                        else
                        {
                            do
                            {
                                tarjeta.cvv = prompt("Ingrese código de seguridad: ")
                                if(tarjeta.cvv.length != 3)
                                {
                                    alert("Código incorrecto")
                                }
                            }while(tarjeta.cvv.length!= 3)
                        }
                    }
                }while(tarjeta.fechaVencMes > 12 || tarjeta.fechaVencMes < 1)
                
                tarjeta.mostrarTarjeta()
            }
            else
            {
                alert("TARJETA VENCIDA!")
            }
        }
    }while(tarjeta.fechaVencAnio > 9999 || tarjeta.fechaVencAnio < 1000)
}

function total(carrito)
{
    let total = 0 
    carrito.forEach((elemento) => 
    {
        total = total + elemento.precio
    })
    return total
}