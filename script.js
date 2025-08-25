// MODO OSCURO/CLARO
const modoBtn = document.getElementById("modo-btn");
const body = document.body;

if (localStorage.getItem("modo") === "oscuro") {
  body.classList.add("dark-mode");
  modoBtn.textContent = "☀️ Modo Claro";
}

modoBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    modoBtn.textContent = "☀️ Modo Claro";
    localStorage.setItem("modo", "oscuro");
  } else {
    modoBtn.textContent = "🌙 Modo Oscuro";
    localStorage.setItem("modo", "claro");
  }
});

// CAMBIO DE IDIOMA
const langSelect = document.getElementById("lang-select");

langSelect.addEventListener("change", (e) => {
  const idioma = e.target.value;
  traducir(idioma);
  localStorage.setItem("idioma", idioma);
});

// Traduce todos los elementos que tienen data-es y data-en
function traducir(idioma) {
  const traducibles = document.querySelectorAll("[data-es]");
  traducibles.forEach(el => {
    el.textContent = el.getAttribute(`data-${idioma}`);
  });
}

// Cargar idioma guardado
const idiomaGuardado = localStorage.getItem("idioma") || "es";
langSelect.value = idiomaGuardado;
traducir(idiomaGuardado);
