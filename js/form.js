import { salvarPreferenciaParticipacao, recuperarPreferenciaParticipacao } from "./storage.js";

const mensagens = {
  nome: "Informe nome e sobrenome.",
  email: "Informe um e-mail válido.",
  nascimento: "Informe a data de nascimento.",
  cpf: "Use o formato 000.000.000-00.",
  telefone: "Use o formato (00) 00000-0000.",
  cep: "Use o formato 00000-000.",
  endereco: "Informe o endereço.",
  cidade: "Informe a cidade.",
  estado: "Selecione o estado.",
  participacao: "Escolha uma forma de participação."
};

function atualizarEstadoCampo(campo) {
  const mensagem = document.querySelector(`[data-error-for="${campo.name}"]`);

  if (campo.validity.valid) {
    campo.classList.remove("erro");
    campo.classList.add("sucesso");
    if (mensagem && campo.name !== "nome") mensagem.textContent = "";
  } else {
    campo.classList.remove("sucesso");
    campo.classList.add("erro");
    if (mensagem) mensagem.textContent = mensagens[campo.name] || "Revise este campo.";
  }
}

function restaurarPreferencia(form) {
  const dados = recuperarPreferenciaParticipacao();
  if (!dados?.participacao) return;

  const opcao = form.querySelector(`input[name="participacao"][value="${dados.participacao}"]`);
  if (opcao) opcao.checked = true;
}

function mostrarConfirmacao() {
  if (window.Swal) {
    window.Swal.fire({
      icon: "success",
      title: "Cadastro enviado!",
      text: "Seu interesse em participar do Instituto Pontes foi registrado.",
      confirmButtonColor: "#1f5c4a"
    });
    return;
  }

  const toast = document.querySelector("#toast");
  if (toast) {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3200);
  }
}

export function iniciarFormulario() {
  const form = document.querySelector("#participacao-form");
  if (!form) return;

  restaurarPreferencia(form);

  form.addEventListener("input", (event) => {
    const campo = event.target;
    if (campo.matches("input, select, textarea")) atualizarEstadoCampo(campo);
  });

  form.addEventListener("change", (event) => {
    const campo = event.target;
    if (campo.name === "participacao" && campo.checked) {
      salvarPreferenciaParticipacao(campo.value);
      const mensagem = document.querySelector('[data-error-for="participacao"]');
      if (mensagem) mensagem.textContent = "";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const campos = [...form.querySelectorAll("input, select, textarea")];
    campos.filter((campo) => campo.type !== "radio").forEach(atualizarEstadoCampo);

    const participacao = form.querySelector('input[name="participacao"]:checked');
    const mensagemParticipacao = document.querySelector('[data-error-for="participacao"]');
    if (!participacao && mensagemParticipacao) mensagemParticipacao.textContent = mensagens.participacao;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    salvarPreferenciaParticipacao(participacao.value);
    mostrarConfirmacao();

    form.reset();
    restaurarPreferencia(form);
    campos.forEach((campo) => campo.classList.remove("erro", "sucesso"));
  });
}