# Family Day Ágora · Casa Aberta · Allmana

Apresentação HTML (21 telas) da Allmana para a Ágora Investimentos: conceito criativo, jornada da família, programação, direcional de KV e textos finais das peças do primeiro Family Day da Ágora (11/12/2026, 9h às 13h, rooftop na Faria Lima).

**Link público:** https://projetos.75lab.com.br/allmana-agora-family-day/

## Template
Estrutura e sistema visual extraídos do deck da Allmana para a Convenção Nacional Chiesi 2027 ("To the Top", Canva):

- **Telas Allmana** (abertura e encerramento): amarelo `#FFB000`, preto e creme, A da Allmana no topo, títulos em caixa alta pesada no rodapé, pílula com seta, padrão gráfico de "A" em faixa.
- **Telas do cliente** (conceito, jornada, programação, peças): fundo branco com diagonais cinza, aba escura com o logo do cliente no canto superior esquerdo, assinatura Allmana no direito, cor do cliente como acento.
- Ordem narrativa: capa, informações gerais, overview, brief recap, contexto, ponte, insight, frase, conceito, plano de ação, divisores por capítulo, peças, itens para alinhar, "vamos juntos?", confidencialidade, obrigado e encerramento.

## Identidade Ágora e as duas opções de KV
O template (telas Allmana e moldura das telas do cliente) segue o deck da Allmana. As artes das peças seguem as duas opções de KV (`assets/img/kv-opcao-1.webp` e `kv-opcao-2.webp`): título "Family Day | Casa Aberta", frase de apoio, logo com a assinatura Bradesco e data são recortes das próprias artes (sprites em CSS), sobre o petróleo da arte (`#003e44`), com a família recortada de cada KV (`familia-rooftop.jpg` e `familia-rooftop-2.jpg`) e o grafismo de cada opção: delta (1) ou faixa diagonal com filetes menta (2). Um seletor "Opção 1 | Opção 2" nas telas de peças (ou as teclas 1 e 2) troca todas as peças de uma vez.

## Navegação
Setas, espaço, Page Up/Down, clique (terço esquerdo volta), roda do mouse, toque e `#n` na URL. Tecla **M** abre o índice e **F** alterna tela cheia. Interações: filtro por faixa de idade, troca de arte dos carrinhos, loop da TV, carimbos do passaporte, abas da página do QR e as duas opções de KV, lado a lado numa mesma tela, com ampliação em tela cheia (clique na arte; setas alternam entre elas).

## Arquitetura
HTML, CSS e JavaScript puros, sem build. Palco fixo 1600×900 escalado para a tela.

- `index.html`: telas
- `css/deck.css`: sistema (tokens, palco, cabeçalhos, componentes do template, navegação)
- `css/slides.css`: composição de cada tela e mockups das peças
- `js/deck.js`: navegação, índice, ícones e interações
- `assets/`: logos Allmana e Ágora, padrão gráfico da Allmana, as duas opções de KV (`img/kv-opcao-1.webp`, `img/kv-opcao-2.webp`) e imagem de compartilhamento

## Fonte do conteúdo
Planejamento "Family Day Ágora · Casa Aberta" (Allmana, versão 1, 15/10/2026).
