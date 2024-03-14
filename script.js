const materias = [
    { nombre: "lenguaCastellana", cantidadItems: 6, cantidadBimestres: 4, categorias: 2 },
    { nombre: "practicasLenguaje", cantidadItems: 6, cantidadBimestres: 4, categorias: 1 },
    { nombre: "matematica", cantidadItems: 5, cantidadBimestres: 4, categorias: 1 },
    { nombre: "conocimientoDelMundo", cantidadItems: 5, cantidadBimestres: 4, categorias: 1 },
    { nombre: "tecnologia", cantidadItems: 5, cantidadBimestres: 4, categorias: 1 },
    { nombre: "plastica", cantidadItems: 5, cantidadBimestres: 4, categorias: 1 },
    { nombre: "musica", cantidadItems: 5, cantidadBimestres: 4, categorias: 1 },
    { nombre: "edfisica", cantidadItems: 5, cantidadBimestres: 4, categorias: 1 },
    { nombre: "lenguaInglesa", cantidadItems: 6, cantidadBimestres: 4, categorias: 2 },
    { nombre: "lenguaExtranjera", cantidadItems: 6, cantidadBimestres: 4, categorias: 1 },
    { nombre: "science", cantidadItems: 3, cantidadBimestres: 4, categorias: 1 },
    { nombre: "maths", cantidadItems: 3, cantidadBimestres: 4, categorias: 1 }
];

function imprimirTabla(materias) {
    const tablaContainer = document.getElementById('tabla-container');
    tablaContainer.innerHTML = ''; // Limpiar contenedor antes de agregar una nueva tabla

    materias.forEach(materia => {
        const tabla = document.createElement('table');
        tabla.className = 'tabla-materias';

        const headerRow = document.createElement('tr');

        // Crear encabezados de columnas
        for (let j = 1; j <= materia.cantidadBimestres; j++) {
            const th = document.createElement('th');
            th.textContent = `Bimestre ${j}`;
            headerRow.appendChild(th);
        }
        tabla.appendChild(headerRow);

        // Crear filas y celdas de la tabla
        for (let i = 1; i <= materia.cantidadItems; i++) {
            const row = document.createElement('tr');

            for (let j = 1; j <= materia.cantidadBimestres; j++) {
                const cell = document.createElement('td');
                cell.textContent = `{{${materia.nombre}Cat${materia.categorias}Item${i}Bim${j}}}`;
                row.appendChild(cell);
            }

            tabla.appendChild(row);
        }

        tablaContainer.appendChild(tabla);
        tablaContainer.appendChild(document.createElement('br')); // Agregar un salto de línea entre categorías
    });
}

imprimirTabla(materias);

