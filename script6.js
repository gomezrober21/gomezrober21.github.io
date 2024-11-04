const toggleLinks = document.querySelectorAll('.toggle-link');

toggleLinks.forEach(link => {
    link.addEventListener('click', function(event) {

        event.preventDefault();

        const contenido = link.previousElementSibling;

        if (contenido.style.display === 'none' || contenido.classList.contains('hidden')) {
            contenido.style.display = 'block';
            link.textContent = 'Ocultar contenidos';
            contenido.classList.remove('hidden');
        } else {
            contenido.style.display = 'none';
            link.textContent = 'Mostrar contenidos';
            contenido.classList.add('hidden');
        }
    });
});
