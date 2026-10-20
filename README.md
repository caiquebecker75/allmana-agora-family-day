# Family Day Ágora · Casa Aberta · Allmana

Apresentação HTML (22 telas) da Allmana para a Ágora Investimentos: conceito criativo, jornada da família, programação, direcional de KV e textos finais das peças do primeiro Family Day da Ágora (11/12/2026, 9h às 13h, rooftop na Faria Lima).

**Link público:** https://projetos.75lab.com.br/allmana-agora-family-day/

## Template
Estrutura e sistema visual extraídos do deck da Allmana para a Convenção Nacional Chiesi 2027 ("To the Top", Canva):

- **Telas Allmana** (abertura e encerramento): amarelo `#FFB000`, preto e creme, A da Allmana no topo, títulos em caixa alta pesada no rodapé, pílula com seta, padrão gráfico de "A" em faixa.
- **Telas do cliente** (conceito, jornada, programação, peças): fundo branco com diagonais cinza, aba escura com o logo do cliente no canto superior esquerdo, assinatura Allmana no direito, cor do cliente como acento.
- Ordem narrativa: capa, informações gerais, overview, brief recap, contexto, ponte, insight, frase, conceito, plano de ação, divisores por capítulo, peças, itens para alinhar, "vamos juntos?", confidencialidade, obrigado e encerramento.

## Identidade Ágora
Cores do site oficial e do SVG do logo: verde petróleo `#01464D`, petróleo escuro `#002C2E`, menta `#00C88D`. Logo oficial (agorainvestimentos.com.br), sempre sobre área escura e chapada. Os mockups das peças respeitam a regra "nunca bold" do brandbook; a fonte final das peças é a Bradesco Sans (arquivo do cliente), aqui substituída por Inter Light/Regular. A foto do KV é uma cena ilustrativa da direção de foto, não uma foto real.

## Navegação
Setas, espaço, Page Up/Down, clique (terço esquerdo volta), roda do mouse, toque e `#n` na URL. Tecla **M** abre o índice e **F** alterna tela cheia. Interações: filtro por faixa de idade, troca de arte dos carrinhos, loop da TV, carimbos do passaporte, abas da página do QR e as duas opções de KV em tela cheia (clique na arte; setas alternam entre elas).

## Arquitetura
HTML, CSS e JavaScript puros, sem build. Palco fixo 1600×900 escalado para a tela.

- `index.html`: telas
- `css/deck.css`: sistema (tokens, palco, cabeçalhos, componentes do template, navegação)
- `css/slides.css`: composição de cada tela e mockups das peças
- `js/deck.js`: navegação, índice, ícones e interações
- `assets/`: logos Allmana e Ágora, padrão gráfico da Allmana, as duas opções de KV (`img/kv-opcao-1.webp`, `img/kv-opcao-2.webp`) e imagem de compartilhamento

## Fonte do conteúdo
Planejamento "Family Day Ágora · Casa Aberta" (Allmana, versão 1, 15/10/2026).
