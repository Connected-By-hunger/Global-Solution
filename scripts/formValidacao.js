document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obtenha os valores dos campos
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;
  var endereco = document.getElementById("endereco").value;
  var parceria = document.getElementById("parceria").value;

  // Verifique se algum campo está vazio
  if (nome === "" || email === "" || telefone === "" || endereco === "" || parceria === "Selecione o tipo de parceria") {
    // Exiba o modal de erro
    var errorModal = new bootstrap.Modal(document.getElementById("errorModal"));
    errorModal.show();
  } else {
    // Exiba o modal de sucesso
    var successModal = new bootstrap.Modal(document.getElementById("successModal"));
    successModal.show();
  }
});

