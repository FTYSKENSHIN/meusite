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


function enviado() {
 /* if (text == null) {
    alert('Formulário Incompleto!');
  }
  else {
    alert('Sua mensagem foi enviada com sucesso!');

  } */
  
   alert('Sua mensagem foi enviada com sucesso!');
}


  