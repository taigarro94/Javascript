//Equipos en Arrays
const equipos = [{
    nombre: "LOCOS POR EL TINTO",
    partidosJugados: 3,
    puntos: 9,
    ciudad: "SALSIPUEDES",
},
{
    nombre: "CERRO AZUL FC",
    partidosJugados: 3,
    puntos: 4,
    ciudad: "VILLA CERRO AZUL",
},
{
    nombre: "BIRRARREAL",
    partidosJugados: 3,
    puntos: 1,
    ciudad: "CORDOBA",
},
{
    nombre: "CEBALLOS",
    partidosJugados: 3,
    puntos: 3,
    ciudad: "RIO CEBALLOS",
}
];

/* //clase constructora de nuevo objetos
class nuevoEquipo {
    constructor(nombre, partidosJugados, puntos, ciudad) {
        this.nombre = nombre
        this.partidosJugados = partidosJugados
        this.puntos = puntos
        this.ciudad = ciudad
    }
}

//Funciones a utilizar
function agregarEquipo() {
    let nombreEquipo = prompt("Ingrese el nombre del equipo");
    let partidosJugadosEquipo = prompt("Ingrese los partidos jugados por el equipo");
    let puntosEquipo = prompt("Ingrese los puntos obtenidos por el equipo");
    let ciudadEquipo = prompt("Ingrese la ciudad que corresponde al equipo")
} */


// Funcion para agregar Equipo
const ingresarEquipo = (nuevoNombre, nuevoPartidosJ, nuevoPuntos, nuevaCiudad) => [
    equipos.push({
        nombre: nuevoNombre,
        partidosJugados: nuevoPartidosJ,
        puntos: nuevoPuntos,
        ciudad: nuevaCiudad
    })
];

//Le pregunto al usuario que quiere hacer

let sistema = parseInt(prompt("Que desea realizar? \n 1 Buscar Equipo \n 2 Agregar Equipo \n 3 Eliminar Equipo \n "));

switch (sistema) {
    case 1:
        let nombreEquipo = prompt("Ingresar nombre de equipo").toUpperCase();
        let equipoEncontrado;
        for (const equipo of equipos){
            if (equipo.nombre == nombreEquipo) {
                alert("Equipo Encontrado");
                let aString = "Nombre Equipo: " +equipo.nombre + "\nPartidos Jugados: " + equipo.partidosJugados + "\nPuntos: " + equipo.puntos + "\nCiudad: " + equipo.ciudad; 
                alert(aString);
                equipoEncontrado = equipo;
            }
        }
        console.log(`EL Equipo se encuentra en el indice: ${equipos.indexOf(equipoEncontrado)}`);
        break;
    case 2:
        let newNombre = prompt("Ingresar Nombre de Equipo").toUpperCase();
        let newPartidos = parseInt(prompt("Ingresar cantidad de partidos jugados"));
        let newPuntos = parseInt(prompt("Ingrese la cantidad de puntos"));
        let newCiudad = prompt("Ingrese la ciudad").toUpperCase();
        ingresarEquipo(newNombre, newPartidos, newPuntos, newCiudad);
        console.table(equipos);
        break;
    case 3:
        let suprEquipo = prompt("Ingresar nombre de Equipo a eliminar").toUpperCase();
        let existe;
        for (const equipo of equipos) {
            if (equipo.nombre == suprEquipo) {
                alert("Datos del Equipo:");
                let aString = "Nombre del Equipo: " + equipo.nombre + "\npartidos: " + equipo.partidosJugados + "\nPuntos: " + equipo.puntos + "\nCiudad: " + equipo.ciudad;
                alert(aString);
                existe = equipo;
                equipos.splice(equipos.indexOf(existe), 1);
                alert(`Equipo Eliminado con Éxito!`);
            } 
        }
        console.table(equipos);
        break;
    }