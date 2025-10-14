# Projeto: ODS 8 — Trabalho decente e crescimento econômico
Participantes: Felippe Rodrigues Nascimento Costa - RA 2648814, Guilherme Farrel Garcia Calixto Tobias De Souza - RA 2504065

Este projeto é um site estático, acessível e responsivo em HTML, CSS e JavaScript, criado para informar e engajar pessoas e organizações sobre a ODS 8 (Trabalho decente e crescimento econômico).

O site inclui:
- Explicação sobre a importância da ODS 8;
- Metas selecionadas com dicas práticas para implementação;
- Checklist de autoavaliação de boas práticas (indicadores simples de aderência);
- Quiz rápido para aprendizagem;
- Galeria de imagens com descrições (acessível);
- Navegação responsiva com menu hambúrguer e links de autenticação;
- Recursos externos confiáveis (ONU, OIT, Governo Federal).

## Como executar
Basta abrir o arquivo `index.html` no navegador. Não há dependências externas.

Opcionalmente, você pode navegar pelas páginas de autenticação:
- `cadastro.html` → simula a criação de conta e redireciona para `login.html`.
- `login.html` → simula o login e redireciona para `index.html`.

## Como este projeto atende ao ODS 8
- Promoção de conhecimento: apresenta conceitos fundamentais e metas da ODS 8 de forma clara e objetiva;
- Ação prática: checklist ajuda organizações a medirem e priorizarem melhorias (igualdade salarial, inclusão, SST, auditoria de fornecedores, formação contínua);
- Inclusão e acessibilidade: interface com alto contraste, controle de tamanho da fonte, semântica HTML e navegação por teclado;
- Crescimento sustentável: estimula políticas que aumentam produtividade e formalização sem sacrificar direitos trabalhistas.

## Acessibilidade
- Botões para alto contraste e ajuste de fonte;
- Estrutura semântica (header, main, section, footer, legend, details/summary);
- Elementos interativos com `aria-*` e `output` com `aria-live` para feedback;
- Link de "pular para o conteúdo";
- Imagens com `alt` descritivo e foco visível;
- Menu acessível por teclado.

## Estrutura
- `index.html`: conteúdo e estrutura do site principal (metas, indicadores, quiz, galeria e recursos);
- `cadastro.html`: formulário de cadastro (simulado) com redirecionamento para login;
- `login.html`: formulário de login (simulado) com redirecionamento para a página principal;
- `styles.css`: estilos responsivos e acessíveis;
- `script.js`: interatividade (contraste, fonte, checklist e quiz); [TODO]
- `README.md`: este arquivo.

## Licença
Uso livre para fins educacionais.

## Páginas de autenticação
- cadastro.html: formulário com 6 campos (nome completo, e-mail, data de nascimento, telefone, senha, confirmar senha). Ao enviar, direciona para a página de login.
- login.html: formulário com e-mail e senha. Ao enviar, direciona para a página principal (index.html).

Fluxo sugerido:
1) Acesse cadastro.html e crie sua conta (simulado, sem backend);
2) Após enviar, você será levado a login.html;
3) Faça o login (qualquer valor) e será redirecionado para index.html.
