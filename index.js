    // Definición de variables
    let slideIndex = 0; // Índice del slide actual
    const slides = document.querySelectorAll('.slide'); // Selección de todos los slides
    let intervalId; // ID del intervalo para el desplazamiento automático

    // Función para mostrar un slide específico
    function showSlide(index) {
      // Remover la clase 'active' y la animación de todos los slides
      slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.animation = '';
      });

      // Agregar la clase 'active' y la animación al slide especificado
      slides[index].classList.add('active');
      slides[index].style.animation = 'slideIn 0.6s ease';
    }

    // Función para ocultar un slide específico
    function hideSlide(index) {
      // Agregar la animación de ocultamiento al slide especificado
      slides[index].style.animation = 'slideOut 0.6s ease';
    }

    // Función para mostrar el siguiente slide
    function nextSlide() {
      const prevIndex = slideIndex; // Índice del slide actual
      slideIndex = (slideIndex + 1) % slides.length; // Calcular el índice del siguiente slide
      hideSlide(prevIndex); // Ocultar el slide actual
      setTimeout(() => showSlide(slideIndex), 0); // Mostrar el siguiente slide después de un pequeño retraso
    }

    // Función para mostrar el slide anterior
    function prevSlide() {
      const prevIndex = slideIndex; // Índice del slide actual
      slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Calcular el índice del slide anterior
      hideSlide(prevIndex); // Ocultar el slide actual
      setTimeout(() => showSlide(slideIndex), 500); // Mostrar el slide anterior después de un pequeño retraso
    }

    // Función para iniciar el desplazamiento automático
    function startAutoSlide() {
      intervalId = setInterval(nextSlide, 8000); // Ejecutar la función nextSlide cada 3 segundos
    }

    // Función para detener el desplazamiento automático
    function stopAutoSlide() {
      clearInterval(intervalId); // Limpiar el intervalo para detener el desplazamiento automático
    }

    // Mostrar el slide inicial y comenzar el desplazamiento automático
    showSlide(slideIndex);
    startAutoSlide();




// Funcion para el botton de navegar en responsive
// Obtener referencia al botón de navegación
var navbarButton = document.getElementById('navbarButton');

// Obtener referencias a los elementos de la lista de navegación
var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Agregar evento de clic a cada elemento de la lista de navegación
navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function() {
  // Ocultar la lista de navegación
  var navbar = document.querySelector('.navbar-collapse');
  navbar.classList.remove('show');
  });
});


  $(document).ready(function () {
    const navLinks = $('.navbar-nav .nav-link');

    // Realizar clic automático en el enlace "INICIO" al cargar la página
    const inicioLink = $('a[href="#inicio"]');
    inicioLink.addClass('active');

    // Manejar el evento clic de cada enlace (excepto el de INICIO)
    navLinks.not(inicioLink).on('click', function () {
      // Remover la clase 'active' de todos los enlaces
      navLinks.removeClass('active');

      // Agregar la clase 'active' solo al enlace clickeado
      $(this).addClass('active');
    });
  });


  $(document).ready(function() {
    const nivelSelect = $('#nivelSelect');
    const gradoSelect = $('#gradoSelect');

    const opcionesPorNivel = {
      'Nivel Inicial': ['Seleccione','3 añitos', '4 añitos', '5 añitos'],
      'Nivel Primaria': ['Seleccione','Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto'],
    };

    // Función para actualizar las opciones de grado
    function actualizarOpcionesGrado() {
      const nivelSeleccionado = nivelSelect.val();

      // Vaciamos las opciones actuales del select de grado
      gradoSelect.empty();

      if (nivelSeleccionado && opcionesPorNivel[nivelSeleccionado]) {
        const opciones = opcionesPorNivel[nivelSeleccionado];

        // Agregamos las opciones correspondientes al select de grado
        opciones.forEach(function(opcion) {
          gradoSelect.append('<option value="' + opcion + '">' + opcion + '</option>');
        });
      }
    }

    // Evento para actualizar las opciones de grado cuando se cambia el nivel
    nivelSelect.change(actualizarOpcionesGrado);

    // Actualizamos las opciones de grado al inicio, para reflejar el estado inicial del formulario
    actualizarOpcionesGrado();
  });