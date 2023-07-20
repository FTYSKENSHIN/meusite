const botaoCalcular = document.getElementById("botao-calcular");
const velocidadeInput = document.getElementById("velocidade");
const tempoInput = document.getElementById("tempo");
const pesoInput = document.getElementById("peso");
const resultado = document.getElementById("resultado");

botaoCalcular.addEventListener("click", () => {
  const velocidade = parseFloat(velocidadeInput.value);
  const tempo = parseFloat(tempoInput.value);
  const peso = parseFloat(pesoInput.value);

  if (isNaN(velocidade) || isNaN(tempo) || isNaN(peso)) {
    resultado.textContent = "Por favor, insira valores válidos.";
  } else {
    const calorias = calcularCalorias(velocidade, tempo, peso);
    resultado.textContent = "Resultado: " + calorias + " Kcalorias!";
  }
});

function calcularCalorias(velocidade, tempo, peso) {
  var calorias = velocidade * peso * tempo * 0.0175;
  return calorias;
}
