import { iniciarRouter } from "./router.js";
import { iniciarFormulario } from "./form.js";

function iniciarMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-menu");
  const textoToggle = toggle?.querySelector(".sr-only");

  if (!toggle || !menu) return;

  function fecharMenu() {
    menu.classList.remove("ativo");
    toggle.setAttribute("aria-expanded", "false");
    if (textoToggle) textoToggle.textContent = "Abrir menu";
  }

  toggle.addEventListener("click", () => {
    const ativo = menu.classList.toggle("ativo");
    toggle.setAttribute("aria-expanded", String(ativo));
    if (textoToggle) textoToggle.textContent = ativo ? "Fechar menu" : "Abrir menu";
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-menu a")) return;
    fecharMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !menu.classList.contains("ativo")) return;
    fecharMenu();
    toggle.focus();
  });
}

function atualizarNavegacao() {
  const rotaAtual = window.location.hash.replace("#", "").split("/")[0] || "inicio";
  document.querySelectorAll(".nav-menu a[data-route]").forEach((link) => {
    const rotaLink = link.getAttribute("href").replace("#", "").split("/")[0];
    if (rotaLink === rotaAtual) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");
  if (!app) return;

  iniciarMenu();
  iniciarRouter(app);
  atualizarNavegacao();
});

document.addEventListener("rota:renderizada", () => {
  iniciarFormulario();
  atualizarNavegacao();
});