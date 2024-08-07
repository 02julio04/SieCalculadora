document.getElementById('solar-panel-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Previene la recarga de la página

  const monthlyConsumption = parseFloat(document.getElementById('monthlyConsumption').value); // Asegura que se convierta a número
  const annualConsumption = monthlyConsumption * 12; // Convierte el consumo mensual en anual
  const dailyConsumption = annualConsumption / 365; // Consumo diario
  const requiredPower = annualConsumption / 1700; // Potencia necesaria por hora, asumiendo 4.6 horas de sol pico
  const requiredPowerW = requiredPower * 1000; // Convertir kW a W
  const powerPerPanel = 500; // 500W es la potencia de un panel típico

  const panelsNeeded = requiredPowerW / powerPerPanel;

  // Muestra los resultados en la consola para depuración
  console.log("Consumo Mensual: " + monthlyConsumption + " kWh");
  console.log("Consumo Anual: " + annualConsumption + " kWh");
  console.log("Consumo Diario: " + dailyConsumption.toFixed(2) + " kWh");
  console.log("Potencia Necesaria por Hora: " + requiredPower.toFixed(2) + " kW");
  console.log("Potencia Necesaria a Utilizar: " + requiredPowerW.toFixed(2) + " W");
  console.log("Potencia por Panel: " + powerPerPanel + " W");
  console.log("Paneles Necesarios: " + panelsNeeded.toFixed(2));

  // Muestra el resultado en la página
  document.getElementById('panelsNeeded').textContent = panelsNeeded.toFixed(2);
});

