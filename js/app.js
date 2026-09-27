import { iniciarRouter } from "./router.js";
import { iniciarFormulario } from "./form.js";

function iniciarMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const ativo = menu.classList.toggle("ativo");
    toggle.setAttribute("aria-expanded", String(ativo));
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-menu a")) return;
    menu.classList.remove("ativo");
    toggle.setAttribute("aria-expanded", "false");
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