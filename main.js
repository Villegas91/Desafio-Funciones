// VARIABLES CON LOS PRECIOS DE LOS PRODUCTOS
let mesa = 100;
let silla = 50;
let televisor = 200;
//BIENVENIDA AL CARRITO DE COMPRAS
alert("Bienvenido al carrito de compra");

//FUNCION PARA QUE INGRESE UN PRODUCTO

function pedir() {
  let producto = prompt(
    "seleccione un producto de la lista\n 1-mesa \n 2-silla \n 3-televisor"
  );
  return producto;
}
let prod1 = pedir();

//FUNCION QUE NOS DA EL PRECIO DEL PROD1

function precio1() {
  if (prod1 == "mesa") {
    prod1 = mesa;
    alert("El costo de su producto es " + mesa);
    console.log("El costo de su producto es " + mesa);
  } else if (prod1 == "silla") {
    prod1 = silla;
    alert("El costo de su producto es " + silla);
    console.log("El costo de su producto es " + silla);
  } else if (prod1 == "televisor") {
    prod1 = televisor;
    alert("El costo de su producto es " + televisor);
    console.log("El costo de su producto es " + televisor);
  }
  return prod1;
}
precio1();

let prod2 = pedir();

//FUNCION QUE NOS DA EL PRECIO DEL PROD2

function precio2() {
  if (prod2 == "mesa") {
    prod2 = mesa;
    alert("El costo de su producto es " + mesa);
    console.log("El costo de su producto es " + mesa);
  } else if (prod2 == "silla") {
    prod2 = silla;
    alert("El costo de su producto es " + silla);
    console.log("El costo de su producto es " + silla);
  } else if (prod2 == "televisor") {
    prod2 = televisor;
    alert("El costo de su producto es " + televisor);
    console.log("El costo de su producto es " + televisor);
  }
  return prod2;
}

precio2();

let prod3 = pedir();

//FUNCION QUE NOS DA EL PRECIO DEL PROD3

function precio3() {
  if (prod3 == "mesa") {
    prod3 = mesa;
    alert("El costo de su producto es " + mesa);
    console.log("El costo de su producto es " + mesa);
  } else if (prod3 == "silla") {
    prod3 = silla;
    alert("El costo de su producto es " + silla);
    console.log("El costo de su producto es " + silla);
  } else if (prod3 == "televisor") {
    prod3 = televisor;
    alert("El costo de su producto es " + televisor);
    console.log("El costo de su producto es " + televisor);
  }
  return prod3;
}

precio3();

//SUMA DE LOS PRECIOS DE CADA PRODUCTO

let suma = precio1(prod1) + precio2(prod2) + precio3(prod3);
alert("El total de su compra es " + suma);
