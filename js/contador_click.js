const d = document;

export function conteo(pantalla, contar, reiniciar) {
  const $pantalla = d.querySelector(pantalla);
  let contador = 0;
  $pantalla.style.textAlign = "center";
  $pantalla.style.fontSize = "20rem";
  $pantalla.textContent = `${contador}`;

  const connteo = (cont) => {
    $pantalla.textContent = `${cont}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(contar)) {
      contador = contador + 1;
      connteo(contador);
    }
    if (e.target.matches(reiniciar)) {
      contador = 0;
      connteo(contador);
    }
  });
}
