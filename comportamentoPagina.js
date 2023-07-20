// Código JavaScript para exibir e ocultar o formulário

const botaoExibirFormulario = document.getElementById("botao-exibir-formulario");
const formulario = document.getElementById("formulario");
const botaoCancelarFormulario = document.getElementById("botao-cancelar-formulario");

botaoExibirFormulario.addEventListener("click", () => {   // () => é o mesmo que function ()
  formulario.style.display = "block";
  botaoExibirFormulario.style.display = "none";
});

botaoCancelarFormulario.addEventListener("click", () => {  // () => é o mesmo que function ()
  formulario.style.display = "none";
  botaoExibirFormulario.style.display = "block";
});

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const botaoEnviar = document.getElementById("botao-enviar");
const mensagemErro = document.getElementById("mensagem-erro");

botaoEnviar.addEventListener("click", () => {
  if (nome.value.trim() === "" || idade.value.trim() === "" || peso.value.trim() === "" || altura.value.trim() === "") {
    mensagemErro.textContent = "Por favor, preencha os campos.";
    botaoEnviar.disabled = true; // Desabilita o botão de envio      
    setTimeout(() => {
      mensagemErro.textContent = "";
    }, 4000); // 4000 milissegundos = 4 segundos


   
    //começo da lógica para reabilitar o botão enviar
     // Resetar campos
    nome.value = " ";
    idade.value = " ";
    altura.value = " ";
    peso.value = " ";
    
    nome.addEventListener("input", habilitarBotaoEnviar);
    idade.addEventListener("input", habilitarBotaoEnviar);
    peso.addEventListener("input", habilitarBotaoEnviar);
    altura.addEventListener("input", habilitarBotaoEnviar);


    function exibirMensagemErro(mensagem) {
      const timestamp = new Date().toLocaleString();
      mensagemErro.textContent = timestamp + " - " + mensagem;

        setTimeout(() => {
          mensagemErro.textContent = "";
    }, 4000); // 4000 milissegundos = 4 segundos
  }
  
  function habilitarBotaoEnviar() {
    if (nome.value.trim() !== "" || idade.value.trim() !== "" || altura.value.trim() !== "" || peso.value.trim() !== "") {
      botaoEnviar.disabled = false; // Habilita o botão de envio      
    }
  } 

  } else {
    // Lógica para enviar a mensagem ou realizar a ação desejada
    alert("Mensagem enviada com sucesso!");    
    botaoEnviar.disabled = false; // Habilita o botão de envio      

  }
});
