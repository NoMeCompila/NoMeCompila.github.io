/**
 * Variable global para almacenar el tema seleccionado.
 * Prioriza la elección guardada en localStorage, si no hay nada, usa "dark" por defecto.
 */
let currentTheme = localStorage.getItem("theme") || "dark";

/**
 * Función encargada de aplicar el tema a toda la página y guardar la preferencia.
 * @param {string} theme - "dark" o "light"
 */
function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem("theme", theme);

    const htmlElement = document.documentElement;

    // Actualizamos la clase madre de la etiqueta <html> que controla el Tailwind darkMode="class"
    if (theme === "dark") {
        htmlElement.classList.add("dark");
    } else {
        htmlElement.classList.remove("dark");
    }

    // Actualizar visualmente qué botón está seleccionado
    updateThemeUI(theme);
}

/**
 * Función encargada de las clases CSS de Tailwind para resaltar el botón activo
 * @param {string} theme - "dark" o "light"
 */
function updateThemeUI(theme) {
    const lightBtn = document.getElementById("btn-theme-light");
    const darkBtn = document.getElementById("btn-theme-dark");

    if (!lightBtn || !darkBtn) return;

    if (theme === "light") {
        // Estilos para botón Claro Activo
        lightBtn.classList.add("bg-primary", "text-black", "shadow-sm");
        lightBtn.classList.remove("text-text-muted", "hover:text-primary");

        // Estilos para botón Oscuro Inactivo
        darkBtn.classList.remove("bg-primary", "text-black", "shadow-sm");
        darkBtn.classList.add("text-text-muted", "hover:text-primary");
    } else {
        // Estilos para botón Oscuro Activo
        darkBtn.classList.add("bg-primary", "text-black", "shadow-sm");
        darkBtn.classList.remove("text-text-muted", "hover:text-primary");

        // Estilos para botón Claro Inactivo
        lightBtn.classList.remove("bg-primary", "text-black", "shadow-sm");
        lightBtn.classList.add("text-text-muted", "hover:text-primary");
    }
}

// Inicializamos todo apenas termina de cargar la página (Igual que en lang.js)
document.addEventListener("DOMContentLoaded", () => {
    // Aplicamos el tema por defecto asegurándonos de que <html> lo tenga o no lo tenga
    setTheme(currentTheme);

    // Asignamos los "escuchas" de eventos (event listeners) a nuestros botones
    const lightBtn = document.getElementById("btn-theme-light");
    const darkBtn = document.getElementById("btn-theme-dark");

    if (lightBtn) lightBtn.addEventListener("click", () => setTheme("light"));
    if (darkBtn) darkBtn.addEventListener("click", () => setTheme("dark"));
});
