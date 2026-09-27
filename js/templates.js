export const projetos = [
  {
    id: "educacao",
    titulo: "Pontes para Aprender",
    categoria: "Educação",
    badge: "badge-education",
    descricao: "Apoio educacional, incentivo à leitura e acompanhamento de estudantes em atividades comunitárias.",
    participacao: "Voluntários podem colaborar com leitura, oficinas e acompanhamento de atividades."
  },
  {
    id: "saude",
    titulo: "Saúde na Comunidade",
    categoria: "Saúde",
    badge: "badge-health",
    descricao: "Ações de educação em saúde, prevenção e fortalecimento do cuidado próximo ao território.",
    participacao: "É possível apoiar campanhas educativas, organização de materiais e atividades comunitárias."
  },
  {
    id: "digital",
    titulo: "Conexão Digital",
    categoria: "Inclusão digital",
    badge: "badge-digital",
    descricao: "Atividades para ampliar o acesso às tecnologias e desenvolver habilidades digitais básicas.",
    participacao: "Voluntários podem apoiar oficinas, produção de materiais e acompanhamento dos participantes."
  }
];

export function criarCard(projeto) {
  return `
    <article class="card" data-categoria="${projeto.id}">
      <span class="badge ${projeto.badge}">${projeto.categoria}</span>
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a class="text-link" data-route href="#projetos/${projeto.id}">Conhecer iniciativa →</a>
    </article>
  `;
}

export function templateInicio() {
  const cards = projetos.map(criarCard).join("");

  return `
    <section class="hero">
      <div class="container grid-12 hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">educação · saúde · comunidade</p>
          <h1>Construímos pontes para ampliar oportunidades.</h1>
          <p class="lead">O Instituto Pontes é uma organização social dedicada a ações de educação, promoção da saúde e inclusão digital, aproximando pessoas, conhecimento e participação comunitária.</p>
          <div class="actions">
            <a class="button" data-route href="#projetos">Conheça os projetos</a>
            <a class="button button-secondary" data-route href="#participe">Quero participar</a>
          </div>
        </div>
        <div class="hero-art" role="img" aria-label="Ilustração abstrata de pessoas conectadas por uma ponte">
          <div class="bridge-card">
            <span class="circle circle-a"></span>
            <span class="circle circle-b"></span>
            <span class="circle circle-c"></span>
            <span class="bridge-line"></span>
            <p>conectar para transformar</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">nossas frentes</p>
          <h2>Três caminhos, um mesmo compromisso</h2>
          <p>As iniciativas foram pensadas para responder a necessidades diferentes sem perder de vista autonomia, acesso e participação social.</p>
        </div>
        <div class="cards-grid" id="lista-projetos">${cards}</div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container grid-12 split">
        <div class="split-main">
          <p class="eyebrow">participe</p>
          <h2>Há mais de uma forma de construir essa ponte.</h2>
          <p>Você pode colaborar como voluntário ou apoiador. O cadastro é simples e ajuda a organização a entender como você gostaria de participar.</p>
        </div>
        <div class="split-side">
          <div class="alert alert-success" role="status">
            <strong>Participação aberta</strong>
            <span>Estamos recebendo novos cadastros para voluntariado e apoio.</span>
          </div>
          <a class="button full" data-route href="#participe">Preencher cadastro</a>
        </div>
      </div>
    </section>

    <section class="section contact-section">
      <div class="container">
        <div class="section-heading compact">
          <p class="eyebrow">contato</p>
          <h2>Vamos conversar?</h2>
        </div>
        <address class="contact-list">
          <a href="mailto:contato@institutopontes.org">contato@institutopontes.org</a>
          <a href="tel:+5511999999999">(11) 99999-9999</a>
          <span>São Paulo - SP</span>
        </address>
      </div>
    </section>
  `;
}

export function templateProjetos(filtro = "") {
  const lista = filtro ? projetos.filter((projeto) => projeto.id === filtro) : projetos;
  const itens = lista.map((projeto) => `
    <article class="project-feature" id="${projeto.id}">
      <div>
        <span class="badge ${projeto.badge}">${projeto.categoria}</span>
        <h2>${projeto.titulo}</h2>
        <p>${projeto.descricao}</p>
      </div>
      <div class="project-note">
        <strong>Como participar</strong>
        <p>${projeto.participacao}</p>
      </div>
    </article>
  `).join("");

  return `
    <section class="page-intro">
      <div class="container">
        <p class="eyebrow">nossas iniciativas</p>
        <h1>Projetos que aproximam pessoas e oportunidades.</h1>
        <p class="lead narrow">Cada frente de atuação foi organizada para responder a necessidades concretas de aprendizagem, cuidado e acesso às tecnologias.</p>
      </div>
    </section>
    <section class="section">
      <div class="container project-list">${itens}</div>
    </section>
    <section class="section section-soft">
      <div class="container grid-12 split">
        <div class="split-main">
          <p class="eyebrow">voluntariado e apoio</p>
          <h2>Escolha como deseja contribuir.</h2>
          <p>O cadastro permite indicar se você quer atuar como voluntário ou apoiar as iniciativas por meio de doações.</p>
        </div>
        <div class="split-side"><a class="button full" data-route href="#participe">Ir para o cadastro</a></div>
      </div>
    </section>
  `;
}

export function templateParticipacao() {
  return `
    <section class="page-intro">
      <div class="container">
        <p class="eyebrow">participe</p>
        <h1>Faça parte do Instituto Pontes.</h1>
        <p class="lead narrow">Preencha o formulário para demonstrar interesse em voluntariado ou apoio às iniciativas.</p>
      </div>
    </section>
    <section class="section">
      <div class="container form-wrap">
        <form id="participacao-form" novalidate>
          <fieldset>
            <legend>Dados pessoais</legend>
            <div class="form-grid">
              <div class="field span-2"><label for="nome">Nome completo</label><input type="text" id="nome" name="nome" minlength="3" required><small class="field-message" data-error-for="nome">Informe nome e sobrenome.</small></div>
              <div class="field"><label for="email">E-mail</label><input type="email" id="email" name="email" required><small class="field-message" data-error-for="email"></small></div>
              <div class="field"><label for="nascimento">Data de nascimento</label><input type="date" id="nascimento" name="nascimento" required><small class="field-message" data-error-for="nascimento"></small></div>
              <div class="field"><label for="cpf">CPF</label><input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}" maxlength="14" required><small class="field-message" data-error-for="cpf"></small></div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Contato e endereço</legend>
            <div class="form-grid">
              <div class="field"><label for="telefone">Telefone</label><input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}" maxlength="15" required><small class="field-message" data-error-for="telefone"></small></div>
              <div class="field"><label for="cep">CEP</label><input type="text" id="cep" name="cep" placeholder="00000-000" pattern="[0-9]{5}-[0-9]{3}" maxlength="9" required><small class="field-message" data-error-for="cep"></small></div>
              <div class="field span-2"><label for="endereco">Endereço</label><input type="text" id="endereco" name="endereco" required><small class="field-message" data-error-for="endereco"></small></div>
              <div class="field"><label for="cidade">Cidade</label><input type="text" id="cidade" name="cidade" required><small class="field-message" data-error-for="cidade"></small></div>
              <div class="field"><label for="estado">Estado</label><select id="estado" name="estado" required><option value="">Selecione</option><option value="SP">São Paulo</option><option value="RS">Rio Grande do Sul</option><option value="RJ">Rio de Janeiro</option><option value="MG">Minas Gerais</option></select><small class="field-message" data-error-for="estado"></small></div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Forma de participação</legend>
            <p class="preference-note">Por privacidade, apenas esta preferência é salva no navegador. Dados pessoais não são armazenados no localStorage.</p>
            <div class="choice-row">
              <label class="choice"><input type="radio" name="participacao" value="voluntariado" required><span><strong>Voluntariado</strong><small>Quero colaborar com atividades e projetos.</small></span></label>
              <label class="choice"><input type="radio" name="participacao" value="doacao"><span><strong>Doação</strong><small>Quero apoiar financeiramente as iniciativas.</small></span></label>
            </div>
            <small class="field-message" data-error-for="participacao"></small>
          </fieldset>
          <div class="form-actions"><button class="button" type="submit">Enviar cadastro</button></div>
        </form>
      </div>
    </section>
  `;
}