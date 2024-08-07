document.getElementById('calculator-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página

  var inputData = document.getElementById('initialData').value; // Obtiene el valor del input
  var result = inputData * inputData; //formula

  document.getElementById('output').textContent = result; // Muestra el resultado en el span con id 'output'
});
