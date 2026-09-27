# Instituto Pontes

Aplicação web acadêmica desenvolvida para apresentar o Instituto Pontes, seus projetos nas áreas de educação, saúde e inclusão digital e um fluxo de participação por formulário.

## Aplicação publicada

- Produção: https://instituto-pontes.netlify.app/
- Repositório: https://github.com/correajessica/instituto-pontes

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 com design responsivo e Custom Properties
- JavaScript ES6 Modules
- localStorage
- SweetAlert2
- Git e GitHub
- Vite para desenvolvimento, build e minificação
- Netlify para publicação

## Estrutura do projeto

```text
instituto-pontes/
├── index.html
├── cadastro.html
├── projetos.html
├── package.json
├── vite.config.js
├── css/
│   ├── style.css
│   ├── experiencia3.css
│   └── acessibilidade.css
└── js/
    ├── app.js
    ├── form.js
    ├── router.js
    ├── script.js
    ├── storage.js
    └── templates.js
```

## Instalação e execução local

Pré-requisitos: Node.js e npm instalados. Git é recomendado para clonar e versionar o projeto.

```bash
git clone https://github.com/correajessica/instituto-pontes.git
cd instituto-pontes
npm install
npm run dev
```

O Vite iniciará um servidor local e mostrará no terminal o endereço para acesso no navegador.

Para gerar a versão de produção:

```bash
npm run build
```

A build otimizada será criada no diretório `dist`.

Para visualizar localmente a build de produção:

```bash
npm run preview
```

## Funcionalidades

- Navegação em formato SPA por hash.
- Templates dinâmicos para início, projetos e participação.
- Formulário com validação de campos e mensagens de erro/sucesso.
- Persistência apenas da preferência de participação no localStorage.
- Menu responsivo para dispositivos móveis.
- Feedback de envio com SweetAlert2 e fallback por toast.

## Acessibilidade

A aplicação utiliza landmarks semânticos como `header`, `nav`, `main` e `footer`, além de atributos ARIA em elementos interativos. Foram implementados skip link, indicação de página atual com `aria-current`, feedback dinâmico com `aria-live`, controlo do estado do menu com `aria-expanded` e retorno de foco ao fechar o menu com Escape.

A folha `css/acessibilidade.css` acrescenta suporte a `prefers-color-scheme: dark`, `prefers-contrast: more` e `forced-colors: active`.

Os estilos de foco e os contrastes foram revistos para atender aos princípios da WCAG 2.1. A validação final com leitor de ecrã deve ser realizada manualmente em NVDA ou VoiceOver antes da release definitiva.

## Testes manuais recomendados

1. Percorrer toda a interface apenas com Tab e Shift+Tab.
2. Confirmar que o foco permanece visível em links, botões e campos.
3. Abrir o menu móvel, fechá-lo com Escape e confirmar o retorno do foco ao botão.
4. Navegar entre as rotas e verificar `aria-current`.
5. Submeter o formulário com dados inválidos e válidos.
6. Testar modo escuro, alto contraste e forced colors quando disponíveis no sistema.
7. Executar leitura da página com NVDA ou VoiceOver e verificar a ordem e os nomes acessíveis.

## Build e minificação

O Vite está configurado em `vite.config.js` para gerar a build em `dist`, limpar a pasta de saída e minificar JavaScript por esbuild e CSS automaticamente.

```bash
npm run build
```

## Versionamento

O fluxo adotado é uma versão simplificada do GitFlow:

- `main`: versão estável e de produção.
- `develop`: integração das alterações em desenvolvimento.
- `feature/*`: funcionalidades e melhorias específicas.
- `hotfix/*`: reservado para correções urgentes em produção.

As alterações recentes utilizam Conventional Commits, por exemplo `feat:`, `fix:` e `docs:`. Issues e pull requests são utilizados para documentar tarefas e revisão de código.

A versão definida no `package.json` é `1.0.0`, seguindo Semantic Versioning (`MAJOR.MINOR.PATCH`).

## Deploy

A aplicação é hospedada no Netlify. O ambiente público utiliza a branch `main` como referência de produção. O Netlify disponibiliza HTTPS e URL pública permanente.

Antes de uma publicação final, as alterações da branch de feature devem ser revistas, integradas à `develop` e posteriormente à `main` para manter repositório e produção sincronizados.

## Manutenção

Para novas alterações:

1. Criar uma branch de feature a partir da base de desenvolvimento.
2. Implementar e testar a alteração.
3. Registar commits semânticos.
4. Abrir pull request para revisão.
5. Integrar na branch de desenvolvimento.
6. Após validação, promover a versão estável para `main` e publicar.

## Licença e contexto

Projeto acadêmico de desenvolvimento front-end elaborado para fins educacionais.