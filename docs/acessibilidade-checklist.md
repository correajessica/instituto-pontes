# Checklist de acessibilidade

## Verificações realizadas no código

- [x] Landmarks semânticos: `header`, `nav`, `main` e `footer`.
- [x] Skip link para salto direto ao conteúdo principal.
- [x] `aria-label` na navegação principal e na marca da página inicial.
- [x] `aria-expanded` e `aria-controls` no botão do menu móvel.
- [x] Atualização do texto acessível entre “Abrir menu” e “Fechar menu”.
- [x] Fechamento do menu com a tecla Escape.
- [x] Retorno do foco ao botão após fechamento com Escape.
- [x] `aria-current="page"` para identificar a rota ativa.
- [x] Regiões `aria-live` e `role="status"` para feedback dinâmico.
- [x] Estados de foco visível em botões e campos.
- [x] Submenu acessível também por `:focus-within`.
- [x] Modo escuro com `prefers-color-scheme: dark`.
- [x] Alto contraste com `prefers-contrast: more`.
- [x] Suporte a `forced-colors: active`.

## Teste manual por teclado

Percurso recomendado:

1. Usar apenas Tab e Shift+Tab para percorrer a página.
2. Confirmar que links, botões e campos recebem foco visível.
3. Em viewport móvel, abrir o menu pelo teclado.
4. Pressionar Escape e confirmar o fechamento e o retorno do foco ao botão.
5. Navegar entre Início, Projetos e Participe e confirmar a indicação da rota atual.
6. Percorrer todos os campos do formulário em ordem lógica e acionar o envio pelo teclado.

## Teste manual com leitor de ecrã

A validação final deve ser feita em NVDA (Windows) ou VoiceOver (macOS/iOS), confirmando:

- leitura dos landmarks em ordem lógica;
- nome acessível do botão do menu e anúncio de seu estado;
- anúncio da rota atual;
- leitura de labels, legendas e mensagens de validação do formulário;
- anúncio das mensagens de confirmação;
- ausência de conteúdo visual essencial sem alternativa textual.

> Nota: esta etapa depende de execução manual em um leitor de ecrã real. O documento registra o roteiro para que a validação seja reproduzível e não substitui o teste humano final.
