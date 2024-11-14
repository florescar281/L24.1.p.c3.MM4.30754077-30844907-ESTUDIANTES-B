let estudiantes = [ 
    {nombre: "Luis", semestre: 5, nota: 14} ,
    {nombre: "Ana", semestre: 2, nota: 17} , 
    {nombre: "emilson", semestre: 5, nota: 9} ,
    {nombre: "carlos", semestre: 5, nota: 20} ]

let salida1 = document.getElementById("salida")

let nombresDeAprobados = (estudiantes) => { 
    return estudiantes.filter((estudiante) => {
        estudiante.nota >= 10 && estudiante.nota <= 20})
   
}

let nombreEstudiantes = (estudiantes, salida) => { 
    let aprobados = nombresDeAprobados(estudiantes)
    salida.innerHTML = `los estudiantes aprobados son: `
    aprobados.forEach(aprobado => {
        salida.innerHTML += `<br> ${aprobado.nombre}`
    })
} 

nombreEstudiantes(estudiantes, salida1)