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

const mostrarAlumno = (e) => {
    console.log(`DNI: ${e.dni.slice(0, 2)}.${e.dni.slice(2, 5)}.${e.dni.slice(5, 8)}`);
    console.log(`Nombre y apellido: ${e.nombre} ${e.apellido}`);
    console.log(`Curso: ${e.anio}°${e.curso}`);
    console.log(`Nota: ${e.nota}`);
}

//mostrarAlumno(alumno[0]);

//  --- Ejercicio 4 ---

const capitalizarAlumnos = alumno.map((e) => {
    let nuevo = e;
    
    nuevo.nombre = capitalizar(e.nombre);
    nuevo.apellido = capitalizar(e.apellido);

    return nuevo;
});

//console.log (capitalizarAlumnos);

//  --- Ejercicio 5 ---

const alumnosReordenados = alumno.map((e) => mostrarAlumno(e));

//  --- Ejercicio 6 ---

const AlumnosAprobados = alumno.filter((e) => e.nota >= 6).map(e => mostrarAlumno(e));

//  --- Ejercicio 7 ---

const AlumnosCuarto = alumno.filter((e) => e.anio === 4).map(e =>  mostrarAlumno(e));

//  --- Ejercicio 8 ---

const AlumnosB = alumno.filter((e) => e.curso === "B").map(e => mostrarAlumno(e));
