/* ===========================================================================
   LEAN APP · Onboarding — FAQ oficial (extraído do material da Leanwork)
   Sobrescreve LA.FAQ com o conteúdo completo e categorizado.
   =========================================================================== */
(function () {
  const FAQ_CATS = ['Dashboard', 'Vitrines', 'Hotsites', 'Categorias', 'Produtos', 'Configurações', 'Versões & Loja', 'Páginas & Redes'];

  const FAQ = [
    /* ---------- Dashboard ---------- */
    { cat: 'Dashboard', q: 'O que é a Dashboard?', a: 'É o centro de controle da sua loja na Plataforma Lean App, com uma visão abrangente e detalhada das principais informações de desempenho e das operações do seu negócio.' },
    { cat: 'Dashboard', q: 'Consigo pesquisar os dados da minha loja por data?', a: 'Sim. Use os “Filtros de data”: clique em PERÍODO e escolha entre hoje, ontem, mês atual, mês passado, últimos 7 dias e últimos 30 dias para comparar o desempenho ao longo do tempo.' },

    /* ---------- Vitrines ---------- */
    { cat: 'Vitrines', q: 'Para que serve o módulo Vitrine?', a: 'É a face visível do seu app de e-commerce: permite criar layouts atrativos para exibir produtos e conteúdo de forma eficaz.' },
    { cat: 'Vitrines', q: 'O que são Componentes?', a: 'São os elementos usados para compor e decorar as vitrines, essenciais para atrair a atenção e destacar produtos ou mensagens da marca.' },
    { cat: 'Vitrines', q: 'Quais os tipos de componentes de imagem?', a: 'Imagem Simples, Carrossel, Grade e Lista Horizontal — cada um com uma forma diferente de apresentar o conteúdo visual.' },
    { cat: 'Vitrines', q: 'Quais os tipos de componentes de produto?', a: 'Grade, Lista Horizontal e Lista Vertical — formas distintas de exibir e comparar a seleção de produtos.' },
    { cat: 'Vitrines', q: 'Existe outro tipo de componente além de imagens e produtos?', a: 'Sim, o Espaçamento: cria espaços entre os componentes, ajudando a destacar cada elemento e organizar o layout.' },
    { cat: 'Vitrines', q: 'Como configurar uma Vitrine?', a: 'Acesse Vitrines › +Adicionar, dê um Título (apenas referência interna, não aparece ao cliente), defina a vigência (opcional) e clique em Salvar. A plataforma exibe apenas uma vitrine ativa por vez, mas você pode criar várias e programar a vigência.' },
    { cat: 'Vitrines', q: 'Como inserir imagens numa vitrine já criada?', a: 'Em Ações, clique em Editar; no campo Componentes use +Adicionar, escolha o tipo de imagem, clique em Próximo e preencha Ativo, Exibir título, Título, Subtítulo e a ação ao tocar na imagem.' },
    { cat: 'Vitrines', q: 'Quais ações posso definir ao tocar na imagem?', a: 'Abrir um produto específico; abrir o catálogo com um termo de busca, com uma categoria ou com uma coleção; abrir uma página externa; ou abrir um hotsite específico.' },
    { cat: 'Vitrines', q: 'O que é a “Ordenação”?', a: 'Define como os produtos aparecem: Lançamento, Maior preço, Mais vendidos, Melhor desconto, Menor preço, Nome A-Z, Nome Z-A e Relevância. Vale sempre que a opção Ordenação aparecer no painel.' },
    { cat: 'Vitrines', q: 'Quais as medidas recomendadas para os banners?', a: 'Trabalhe sempre a partir da área útil de 1080px de largura; a altura é livre. Imagem simples/carrossel ocupa os 1080px; a Grade usa duas colunas de 540px (540 + 540 = 1080). Na Lista horizontal a estilização é livre — a largura de cada item é o que define quantos aparecem sem scroll (itens mais estreitos mostram mais de uma vez) e o título deve estar embutido na própria imagem. Margins/paddings devem estar dentro da imagem, e imagens nessa resolução são cadastradas selecionando 3x no painel. Detalhes no Guia de banners.' },

    /* ---------- Hotsites ---------- */
    { cat: 'Hotsites', q: 'O que é um Hotsite?', a: 'É uma página especial e totalmente personalizável para destacar produtos, promoções ou conteúdos de forma única dentro do app.' },
    { cat: 'Hotsites', q: 'Qual a diferença entre Hotsite e Vitrine?', a: 'A Vitrine é única ativa por vez, usada para a loja de modo completo e não é direcionável. O Hotsite permite vários ativos, foca em um produto/promoção e pode ser direcionado via imagem, categoria ou outro hotsite.' },
    { cat: 'Hotsites', q: 'Como criar um Hotsite?', a: 'Acesse o módulo Hotsite › +Adicionar, defina um Título (referência interna, não visível ao cliente) e clique em Salvar.' },
    { cat: 'Hotsites', q: 'Quais informações posso colocar no Hotsite?', a: 'Os mesmos componentes da Vitrine — Imagem, Produtos e Espaçador. Basta repetir o processo de componentes, agora no módulo Hotsite.' },
    { cat: 'Hotsites', q: 'Como exibo meu hotsite no App?', a: 'Por um componente de imagem (ação “Abrir um hotsite específico”), por uma categoria de produto (tipo de ação “Abrir um hotsite específico”) ou aninhando um hotsite dentro de outro.' },

    /* ---------- Categorias ---------- */
    { cat: 'Categorias', q: 'O que é o módulo Categorias?', a: 'Sincroniza e identifica automaticamente todas as categorias cadastradas no seu painel VTEX, integrando a loja online ao app de forma consistente.' },
    { cat: 'Categorias', q: 'Como funciona a sincronização VTEX × Lean App?', a: 'O módulo puxa automaticamente as categorias já configuradas na VTEX, deixando-as disponíveis para seleção no Lean App.' },
    { cat: 'Categorias', q: 'É possível ressincronizar as categorias entre site e App?', a: 'Sim. Em Categorias, clique em “EXCLUIR TUDO” e depois em “Sincronização”. Após sincronizar, todas as categorias da VTEX são ativadas — revise quais devem ficar ativas ou inativas. Evite alterações grandes na grade de categorias.' },

    /* ---------- Produtos ---------- */
    { cat: 'Produtos', q: 'O que é o módulo Produtos?', a: 'Reúne as configurações de produto: Grade, Especificações, Recomendações, Restrições de venda, Etiquetas e Selos.' },
    { cat: 'Produtos', q: 'Como funcionam as Grades?', a: 'Seguem as mesmas configurações da sua plataforma (ex.: Cor, Tamanho, Voltagem). A configuração inicial é feita pelo time técnico; depois você pode adicionar novas grades e apresentá-las em coleções.' },
    { cat: 'Produtos', q: 'Como funcionam as Especificações de produto?', a: 'Seguem as configurações da plataforma (ex.: Modo de uso, Detalhes especiais), com a configuração inicial feita pelo time técnico. Novas especificações podem ser adicionadas e exibidas em coleções.' },
    { cat: 'Produtos', q: 'Para que servem as Recomendações de produtos?', a: 'Exibem produtos similares ou que combinam com o que o cliente está vendo, incentivando compras combinadas. O app reaproveita a configuração já feita na sua plataforma, espelhando o site.' },
    { cat: 'Produtos', q: 'Para que serve a Restrição de venda?', a: 'Permite restringir a compra de produtos de uma coleção — útil quando o item exige orçamento, customização ou prazo maior de envio, e a loja precisa passar detalhes antes da compra.' },
    { cat: 'Produtos', q: 'Como configurar uma Restrição de venda?', a: 'Produtos › Restrições de venda › Adicionar. Configure Título, Vigência (ou use Ativo/Inativo) e Ação — atualmente “Abrir WhatsApp”. Depois selecione as coleções que devem respeitar a restrição.' },
    { cat: 'Produtos', q: 'O que são Etiquetas?', a: 'São marcadores que aparecem FORA da imagem do produto, ajudando o comprador a identificar opções e características sem interferir na imagem.' },
    { cat: 'Produtos', q: 'Como configurar Etiquetas?', a: 'Produtos › Etiquetas › Adicionar. Defina Ativo, Expandido, Tipo (Texto ou Imagem) e Título. No tipo Texto há cor de fundo, cor do título e ícone; no tipo Imagem, resolução e upload. Por fim, selecione a coleção.' },
    { cat: 'Produtos', q: 'O que são Selos?', a: 'São destaques que aparecem DENTRO da imagem do produto, indicando visualmente uma característica diretamente sobre a imagem — ideais para chamar a atenção de forma direta.' },
    { cat: 'Produtos', q: 'Como configurar Selos?', a: 'Produtos › Selos › Adicionar. Defina Ativo, Tipo (Texto ou Imagem), Posição e Título. Configure cores/ícone (Texto) ou resolução/imagem (Imagem) e selecione a coleção.' },
    { cat: 'Produtos', q: 'Qual a diferença entre Etiqueta e Selo?', a: 'A Etiqueta aparece fora da imagem do produto; o Selo aparece dentro da imagem. Ambos destacam informações, mas em posições diferentes.' },

    /* ---------- Configurações ---------- */
    { cat: 'Configurações', q: 'O que é o módulo Configurações?', a: 'É o coração do projeto. Reúne Configurações Gerais, Controle de Versões, Loja, Páginas Institucionais, Páginas de Serviço e Redes Sociais.' },
    { cat: 'Configurações', q: 'O que posso configurar em Catálogo?', a: 'Três blocos: Busca e Ordenação, Layout e Preços.' },
    { cat: 'Configurações', q: 'O que há em Busca e Ordenação?', a: 'API de busca e API de produto (Padrão ou Intelligent Search — válido para clientes VTEX) e a Ordenação padrão dos produtos no catálogo.' },
    { cat: 'Configurações', q: 'O que há em Layout?', a: 'Alinhamento do conteúdo (Centralizado ou À esquerda), Exibir produtos com tamanho fixo (cards uniformes) e Exibir botão de compra no card.' },
    { cat: 'Configurações', q: 'O que há em Preços?', a: 'Exibir preço somente quando o cliente estiver autenticado e o Estilo de exibição do cashback (em valor ou em porcentagem no card do produto).' },
    { cat: 'Configurações', q: 'O que posso configurar em Checkout?', a: 'Entrega e reCAPTCHA.' },
    { cat: 'Configurações', q: 'O que há em Entrega?', a: 'Exibir produtos do pacote (quando houver um único pacote) e Agrupar opções de envio em “Mais econômico” e “Mais rápido”.' },
    { cat: 'Configurações', q: 'Como funciona o reCAPTCHA?', a: 'Para configurar no app, o reCAPTCHA já deve estar ativo no seu site. Com ele ativo, o time da Leanwork cria as chaves necessárias (IDs e secrets de Android e iOS).' },
    { cat: 'Configurações', q: 'O que posso configurar em Produto?', a: 'Quantidade mínima, Mensagem de última unidade, Mensagem de últimas unidades e Marketplace.' },
    { cat: 'Configurações', q: 'Para que serve a Quantidade mínima?', a: 'Informa ao cliente quantas unidades ainda há em estoque. Defina uma quantidade segura a partir da qual as mensagens de estoque começam a aparecer.' },
    { cat: 'Configurações', q: 'O que é o Marketplace?', a: 'Se você já vende via marketplace no site, ao habilitar a opção o app exibe que aquele produto será vendido e entregue pelo vendedor correto.' },
    { cat: 'Configurações', q: 'O que é Regionalização?', a: 'Permite ao cliente VTEX exibir preços e produtos de acordo com a região configurada no painel VTEX.' },
    { cat: 'Configurações', q: 'Como configurar a Regionalização?', a: 'Configurações Gerais › Regionalização. Defina Ativo, Obrigatório e os textos das seções de Boas-vindas e de Atualização (título e mensagem). Clique em Salvar.' },
    { cat: 'Configurações', q: 'Para que servem os Favoritos?', a: 'Ativam o “coração” no produto (wishlist), permitindo ao cliente salvar favoritos e acompanhar preços e estoque com acesso rápido.' },

    /* ---------- Versões & Loja ---------- */
    { cat: 'Versões & Loja', q: 'Para que serve o Controle de Versões?', a: 'Avisa o seu cliente de que há uma nova versão do app disponível nas lojas de aplicativo, garantindo que ele receba as novidades do Lean App.' },
    { cat: 'Versões & Loja', q: 'Como configurar o Controle de Versões?', a: 'Configurações › Controle de versões. Preencha Ativo, Obrigatório, Android/iOS e Major/Minor/Patch e clique em Salvar. Não é possível ter duas versões ativas: desative a anterior antes de criar a nova.' },
    { cat: 'Versões & Loja', q: 'Quais são as configurações de Loja?', a: 'Nome e CNPJ da loja. São informações internas e não aparecem no aplicativo.' },
    { cat: 'Versões & Loja', q: 'Quais são as configurações de Endereço?', a: 'CEP, Cidade, Estado, Rua, Número, Bairro e Complemento da sua loja física ou escritório. Também não aparecem no aplicativo.' },
    { cat: 'Versões & Loja', q: 'Quais são as configurações de Suporte?', a: 'E-mail, Horário de funcionamento, Telefone e WhatsApp. Essas informações ficam disponíveis no painel do cliente dentro do app.' },

    /* ---------- Páginas & Redes ---------- */
    { cat: 'Páginas & Redes', q: 'O que são as Páginas Institucionais?', a: 'São as páginas institucionais da sua loja online. Basta copiar a URL de cada página do site e o app replica o conteúdo na página do cliente.' },
    { cat: 'Páginas & Redes', q: 'O que são as Páginas de Serviço?', a: 'São páginas especiais do seu site exibidas na ala de serviços da página do cliente — os serviços que a loja oferece.' },
    { cat: 'Páginas & Redes', q: 'Como configurar as Redes Sociais?', a: 'Inclua a URL de cada rede conforme os modelos do painel. Estão disponíveis Facebook, Instagram, Pinterest, TikTok, X e YouTube.' },

    /* ---------- Acesso (operacional) ---------- */
    { cat: 'Dashboard', q: 'Como dou acesso a um novo colaborador ao painel?', a: 'Em Controle de Acesso › Usuários, crie o usuário com nome e e-mail e atribua o perfil de permissão mínimo necessário (marque Administrador apenas quando preciso).' },
  ];

  if (window.LA) { window.LA.FAQ = FAQ; window.LA.FAQ_CATS = FAQ_CATS; }
})();
