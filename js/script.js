import { conteo } from "./contador_click.js";

document.addEventListener("DOMContentLoaded", (e) => {
  conteo(".pantalla", ".btn-contar", ".btn-reiniciar");
});
