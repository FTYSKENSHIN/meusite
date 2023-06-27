// Código JavaScript para o cálculo de calorias

function calculaCalorias() {
    var p = parseFloat(peso.value);
    var v = parseFloat(velocidade.value);
    var t = parseFloat(tempo.value);

    var resultado = p * v * t * 0.0175;
   
    document.getElementById("resultado").innerHTML = "Seu gasto calorico foi de " + resultado + " calorias";
  }
  
