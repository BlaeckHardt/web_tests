// Lista de elementos para generar tarjetas
const elementos = [
    { titulo: "Master of Puppets", descripcion: "Canción de Metallica del álbum 'Master of Puppets'", esHoy: true },
    { titulo: "Shepherd of Fire", descripcion: "Canción de Avenged Sevenfold del álbum 'Hail to the King'", esHoy: false },
    { titulo: "El príncipe de la dulce pena", descripcion: "Canción de Mago de Oz del álbum 'Atlantia'", esHoy: true },
    { titulo: "The emptyness machine", descripcion: "Canción de Linkin Park debut de su regreso'", esHoy: false },
    { titulo: "Hail to the king", descripcion: "Canción de Avenged Sevenfold del álbum 'Hail to the King'", esHoy: false },
    { titulo: "Atlantia", descripcion: "Canción de Mago de Oz del álbum 'Atlantia'", esHoy: true }
];


// Diccionario de páginas con las URLs correspondientes
const paginas = {
    "Master of Puppets": "song.html?nombre=Master of Puppets",
    "Shepherd of Fire": "song.html?nombre=Shepherd of Fire",
    "El príncipe de la dulce pena": "song.html?nombre=El príncipe de la dulce pena",
    "The emptyness machine": "song.html?nombre=The emptyness machine",
    "Hail to the king": "song.html?nombre=Hail to the king",
    "Atlantia": "song.html?nombre=Atlantia"
};

// Obtener contenedor y checkbox
const cardContainer = document.getElementById("card-container");
const filterCheckbox = document.getElementById("filter");

// Función para generar tarjetas
function generarTarjetas(filtrarHoy = false) {
    // Limpiar contenedor
    cardContainer.innerHTML = "";

    // Filtrar los elementos según la opción seleccionada
    const elementosFiltrados = filtrarHoy
        ? elementos.filter(elemento => elemento.esHoy)
        : elementos;

    // Crear y agregar cada tarjeta al contenedor
    elementosFiltrados.forEach((elemento) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "card";
        tarjeta.innerHTML = `
            <h2>${elemento.titulo}</h2>
            <p>${elemento.descripcion}</p>
        `;
        
        // Redirección al hacer clic
        tarjeta.addEventListener("click", () => {
            const paginaAleatoria = paginas[elemento.titulo];
            if (paginaAleatoria) {
                window.location.href = paginaAleatoria;
            }
        });

        // Agregar la tarjeta al contenedor
        cardContainer.appendChild(tarjeta);
    });
}

// Evento para cambiar el filtro de canciones
filterCheckbox.addEventListener("change", () => {
    generarTarjetas(filterCheckbox.checked);
});

// Generar tarjetas al cargar la página (mostrar todas las canciones por defecto)
generarTarjetas();
