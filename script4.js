var textoVisible = false;

function toggleText() {
  var additionalText = document.querySelector(".additional");
  var toggleLink = document.querySelector("a");

  if (textoVisible) {
    additionalText.classList.remove("visible");
    additionalText.classList.add("hidden");
    toggleLink.textContent = "Seguir leyendo";
  } else {
    additionalText.classList.remove("hidden");
    additionalText.classList.add("visible");
    toggleLink.textContent = "Ocultar exceso de texto";
  }
  textoVisible = !textoVisible;
}
