const botao = document.querySelector("#botao");

botao.addEventListener("click", exibirAlerta);

function exibirAlerta() {
  swal("Hello World!", "Cubos Academy - First Exercise", "success", {
    buttons: false,
    timer: 2800,
  });
}
