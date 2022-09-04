//  --- Ejercicio 1 ---

let alumno = [

    {
        nombre: "Juan",
        apellido: "Gomez",
        dni: "46345678",
        anio: 4,
        curso: "A",
        nota: 8,
    },

    {
        nombre: "Juan",
        apellido: "Perez",
        dni: "46349576",
        anio: 4,
        curso: "A",
        nota: 9,
    },

    {
        nombre: "Ambar",
        apellido: "Jaichenko",
        dni: "46486024",
        anio: 5,
        curso: "A",
        nota: 10,
    },

    {
        nombre: "Matias",
        apellido: "Fridman",
        dni: "47185035",
        anio: 5,
        curso: "A",
        nota: 4,
    },

    {
        nombre: "German",
        apellido: "Prokopiec",
        dni: "47194769",
        anio: 4,
        curso: "B",
        nota: 3,
    },

    {
        nombre: "Caro",
        apellido: "Orbuch",
        dni: "47936295",
        anio: 4,
        curso: "B",
        nota: 1,
    },

    {
        nombre: "Esteban",
        apellido: "Rodriguez",
        dni: "45194576",
        anio: 3,
        curso: "B",
        nota: 5,
    },

    {
        nombre: "Ulises",
        apellido: "Vazquez",
        dni: "45195275",
        anio: 3,
        curso: "B",
        nota: 7,
    },

];

//console.log (alumno);

//  --- Ejercicio 2 ---

const capitalizar = (s) => {
    
    return s[0].toUpperCase() + s.slice(1);
    
};

//console.log (capitalizar("hola"));

//  --- Ejercicio 3 ---



//  --- Ejercicio 4 ---

const capitalizarAlumnos = alumno.map((e) => {
    capNom = capitalizar(e.nombre);
    capAp = capitalizar(e.apellido);

    return [capNom, capAp];
});

//console.log (capitalizarAlumnos);

//  --- Ejercicio 5 ---



//  --- Ejercicio 6 ---

const AlumnosAprobados = alumno.filter((e) => e.nota >= 6).map(e => e);

//console.log (AlumnosAprobados);

//  --- Ejercicio 7 ---

const AlumnosCuarto = alumno.filter((e) => e.anio === 4).map(e => e);

//console.log (AlumnosCuarto);

//  --- Ejercicio 8 ---

const AlumnosB = alumno.filter((e) => e.curso === "B").map(e => e);

//console.log(AlumnosB);
