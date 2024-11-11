

// Detectar el scroll y mover la navbar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    // Verificar la posición del scroll
    if (window.scrollY > 100) { // Ajusta el valor a tu gusto
      navbar.classList.add('navbar-left'); // Añadir la clase para moverla a la izquierda
    } else {
      navbar.classList.remove('navbar-left'); // Si no se hace scroll, regresa a la posición original
    }
  });
  

//funcion transicion hero
window.addEventListener('load', function() {
    const header = document.querySelector('.hero');
    header.style.opacity = 1;
    header.style.transform = 'translateY(1)';
});
