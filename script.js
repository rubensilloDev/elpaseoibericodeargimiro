// 1. INICIALIZAR LENIS (MOTOR DE SCROLL SUAVE)
// Esto hace que el movimiento del ratón sea fluido
const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// 2. ANIMACIONES AL HACER SCROLL (REVELAR ELEMENTOS)
// Esta función mira qué elementos tienen la clase 'animacion-subida'
// y les añade la clase 'visible' cuando aparecen en pantalla.

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // Se activa cuando se ve el 10% del elemento
});

// Seleccionamos todos los tipos de elementos que queremos animar
const selectores = '.animacion-subida, .animacion-izquierda, .animacion-derecha, .animacion-aparicion';
const elementosAAnimar = document.querySelectorAll(selectores);

// Le decimos al observador que vigile cada uno de ellos
elementosAAnimar.forEach(el => observador.observe(el));


// 3. LÍNEA DEL TIEMPO DINÁMICA
// Esta función rellena la línea roja del paseo según haces scroll
const animarLineaPaseo = () => {
    const linea = document.querySelector('.paseo-linea');
    if (!linea) return;

    const rect = linea.getBoundingClientRect();
    const scrollPropio = window.innerHeight - rect.top;
    const alturaTotal = rect.height;

    // Calculamos el porcentaje de la línea que hemos recorrido
    let progreso = (scrollPropio / alturaTotal) * 100;
    
    // Limitamos entre 0 y 100
    progreso = Math.max(0, Math.min(100, progreso));

    // Aplicamos el relleno a la variable CSS (que crearemos en el CSS)
    linea.style.setProperty('--progreso-paseo', `${progreso}%`);
};

// Escuchamos el scroll de Lenis para mover la línea
lenis.on('scroll', animarLineaPaseo);


// 4. ASEGURAR QUE EL HERO SE VEA AL CARGAR
// Fuerza la visibilidad de los elementos que ya están en pantalla al entrar
window.addEventListener('load', () => {
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.animacion-subida');
        heroElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }, 100);
});
