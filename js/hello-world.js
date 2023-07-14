const botao = document.querySelector("#botao");

botao.addEventListener("click", exibirAlerta);

function exibirAlerta() {
  swal("Hello World!", "Cubes Academy - First Exercise", "success", {
    buttons: false,
    timer: 2800,
  });
}
