const CHAVE_PREFERENCIA = "preferenciaParticipacao";

export function salvarPreferenciaParticipacao(participacao) {
  const dados = { participacao };
  localStorage.setItem(CHAVE_PREFERENCIA, JSON.stringify(dados));
}

export function recuperarPreferenciaParticipacao() {
  const salvo = localStorage.getItem(CHAVE_PREFERENCIA);
  if (!salvo) return null;

  try {
    return JSON.parse(salvo);
  } catch (erro) {
    console.warn("Não foi possível recuperar a preferência salva.", erro);
    return null;
  }
}

export function limparPreferenciaParticipacao() {
  localStorage.removeItem(CHAVE_PREFERENCIA);
}