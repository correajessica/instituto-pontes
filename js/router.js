import { templateInicio, templateProjetos, templateParticipacao } from "./templates.js";

function interpretarHash() {
  const hash = window.location.hash.replace("#", "") || "inicio";
  const [rota, detalhe] = hash.split("/");
  return { rota, detalhe };
}

export function renderizarRota(container) {
  const { rota, detalhe } = interpretarHash();

  container.innerHTML = "";

  if (rota === "projetos") {
    container.innerHTML = templateProjetos(detalhe || "");
  } else if (rota === "participe") {
    container.innerHTML = templateParticipacao();
  } else {
    container.innerHTML = templateInicio();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  document.dispatchEvent(new CustomEvent("rota:renderizada", { detail: { rota, detalhe } }));
}

export function iniciarRouter(container) {
  window.addEventListener("hashchange", () => renderizarRota(container));

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-route]");
    if (!link) return;

    const destino = link.getAttribute("href");
    if (!destino?.startsWith("#")) return;

    event.preventDefault();
    if (window.location.hash === destino) {
      renderizarRota(container);
    } else {
      window.location.hash = destino;
    }
  });

  renderizarRota(container);
}