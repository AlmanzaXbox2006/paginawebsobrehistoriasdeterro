// Script para buscar historias
function buscarHistoria() {
    var input = document.getElementById('buscarInput').value.toLowerCase();
    var historias = document.querySelectorAll('#resultadoBusqueda .historia');
    
    historias.forEach(function(historia) {
      var titulo = historia.querySelector('h3').innerText.toLowerCase();
      if (titulo.includes(input)) {
        historia.style.display = 'block';
      } else {
        historia.style.display = 'none';
      }
    });
  }
  
  // Script para agregar nueva historia (simulado)
  document.getElementById('formAgregar').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var titulo = document.getElementById('titulo').value;
    var contenido = document.getElementById('contenido').value;
    
    // Simulación de agregar la historia (puedes implementar la lógica real aquí)
    var nuevaHistoria = document.createElement('div');
    nuevaHistoria.classList.add('historia');
    nuevaHistoria.innerHTML = '<h3>' + titulo + '</h3><p>' + contenido + '</p>';
    
    var resultadoBusqueda = document.getElementById('resultadoBusqueda');
    resultadoBusqueda.appendChild(nuevaHistoria);
    
    // Limpiar formulario después de agregar
    document.getElementById('titulo').value = '';
    document.getElementById('contenido').value = '';
  });
  