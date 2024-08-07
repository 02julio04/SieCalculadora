document.getElementById('solar-panel-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Previene la recarga de la página

  const monthlyConsumption = parseFloat(document.getElementById('monthlyConsumption').value);
  const panelPowerRadios = document.getElementsByName('panelPower');
  let powerPerPanel;
  
  // Recorre los botones de radio para encontrar el seleccionado
  for (let i = 0; i < panelPowerRadios.length; i++) {
      if (panelPowerRadios[i].checked) {
          powerPerPanel = parseFloat(panelPowerRadios[i].value); // Asigna el valor seleccionado
          break;
      }
  }

  const annualConsumption = monthlyConsumption * 12; // Convierte el consumo mensual en anual
  const dailyConsumption = annualConsumption / 365; // Consumo diario
  const requiredPower = dailyConsumption / 4.6; // Potencia necesaria por hora, asumiendo 4.6 horas de sol pico
  const requiredPowerW = requiredPower * 1000; // Convertir kW a W
  const panelsNeeded = Math.round(requiredPowerW / powerPerPanel);

  document.getElementById('panelsNeeded').textContent = panelsNeeded;
  console.log("Consumo anual: " + annualConsumption + " kWh");
  console.log("Consumo diario: " + dailyConsumption.toFixed(2) + " kWh");
  console.log("Potencia necesaria por hora: " + requiredPower.toFixed(2) + " kW");
  console.log("Potencia por panel: " + powerPerPanel + " W");
  console.log("Paneles necesarios: " + panelsNeeded);
});

