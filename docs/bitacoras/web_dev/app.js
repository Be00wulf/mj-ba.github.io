

// function carrito() {
// //     let t1=document.getElementById("text1").value
// //     let t2=document.getElementById("text2").value
// // document.getElementById("text3").value=parseInt(t1)+parseInt(t2)
//     let cod_sm = document.getElementById("sm_btn").value
//     document.getElementById("Se ha agregado producto codigo: " + cod_sm)

// }

// function updateSelection() {

//     const selectedValue = document.getElementById("tx3pro").value;
//     alert("Ha seleccionado el producto " + selectedValue);
    
// }

let carritoItems = ""; 
let totalPagar = 0;

function agregarProducto(nombre, precio, oferta, descuento) {
    carritoItems += "- " + nombre + " | Oferta: " + precio + " | Precio: Q" + oferta + " | Descuento: Q" + descuento + "\n "; 
    totalPagar += precio;


    document.getElementById("lista-carrito").innerText = "Producto: \n" + carritoItems;
    document.getElementById("total-carrito").innerText = "Total: Q" + totalPagar;
}

function vaciarCarrito() {
    carritoItems = "";
    totalPagar = 0;

    document.getElementById("lista-carrito").innerText = "Productos: \n" + carritoItems;
    document.getElementById("total-carrito").innerText = "Total: Q" + totalPagar;
}

function comprar(){
    alert("Que nadie sospeche que ya se fué a buró de crédito ");
}


