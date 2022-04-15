//pega o id do botão
myButton = document.getElementById("go-to-top-button");

// quando o user descer 200px, aparece o botão, caso contrário ele desaparece
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// quando o user clicar no botão, vai pro topo
function topFunction() {
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE e Opera
}