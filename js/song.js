// Diccionario con detalles de canciones (puedes agregar más elementos)
const canciones = {
    "Master of Puppets": "Letra y detalles de la canción 1",
    "Shepherd of Fire": "Descripción y contenido de la canción 2",
    "El príncipe de la dulce pena": "Información de la canción 3",
};

// Obtener los parámetros de la URL
const params = new URLSearchParams(window.location.search);

// Obtener el valor del argumento llamado 'nombre' en la URL y decodificarlo
const nombreCancion = decodeURIComponent(params.get('nombre'));

// Obtener el contenedor donde se mostrará el contenido
const songContentDiv = document.getElementById("song-content");

// Mostrar el contenido si existe en el diccionario
if (canciones[nombreCancion]) {
    songContentDiv.innerHTML = canciones[nombreCancion];
} else {
    songContentDiv.innerHTML = `<p>${"No se encontró información para esta canción."}</p>`;
}
