// let nombre 
// nombre = "facu"
// console.log(nombre)


// let nombreUsuario = "Facu";
// let apellidoUsuario = 'Atienza';
// const anio = 2023;

// let numero1 = 100
// let numero2 = 90


// let resultadoMultiplicacion = numero1 * numero2 //9000
// let resta = numero1 - numero2 //10
// let division = numero1 / numero2

// numero1 = 1000

// resultadoMultiplicacion = resultadoMultiplicaion * numero1


// let nombreUsuario = "Facu"
// let apellidoUsuario ='Atienza'

// let datosUSer = nombreUsuario + apellidoUsuario //FacuAtienza

// datosUSer = nombreUsuario + " " + apellidoUsuario // Facundo Atienza

// let resultadoMultiplicacion = numero1 * datosUSer


// const espacio = " "

// datosUser = nombreUsuario + espacio + apellidoUsuario //Facu Atienza

// console.log("Este es un mensaje en consola")
// console.log(23)
// console.log(datosUser)

// alert("Este es un mensaje en la consola")
// alert(23)
// alert(datosUser)

// let nombreUser = prompt("Decime tu nombre")
// let apellidoUser = prompt("Decime tu apellido")

// let datosUser = "Hola" + nombreUser + " " + apellidoUser
// let datosUser1 = 'hola' ${nombreUser} ${apellidoUser}


// console.log(daerjjj)
// alert(datosUser)
// alert(datosUser1)

// alert("Bienvenido a chivi autos")

// let nombre = prompt("nombre y apellido")

// alert("Bienvenido" + " " + nombre + " " + "a" + " " + "chiviautos")

// let marca = prompt("Elija que marca quiere consultar. chevrolet, fiat, volkswaguen") 

// alert("Usted a elejido" + " " + marca)







alert("Bienvenido ragini autos");
alert("Ingresa tu usuario");

let user1 = prompt("Ingresa nuevo nombre de usuario");

alert("Bienvenido, " + user1);

alert("Ahora vamos a asignarte una contraseña temporal: 3456");

const contraseña = 3456;

alert("Ahora, iniciá sesion, " + user1);

usuario = prompt("Usuario:");
pasword1 = prompt("Contraseña temporal:");

for (let i = 0; i < 3; i++) {
  if (user1 == usuario && contraseña == pasword1) {
    alert("Creaste tu usuario!");
    break;
  } else {
    alert ("Ingresaste mal algun dato, intenta nuevamente")
    usuario = prompt("Usuario:");
    pasword1 = prompt("Contraseña temporal:");

  }
}
