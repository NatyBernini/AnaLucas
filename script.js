// Array de objetos contendo os dados de cada presente
const presentes = [
    {
        nome: "Aparelho de Jantar e Chá Porcelana 20 peças Ryo Maresia Jogo de Pratos e Xícaras Oxford",
        imagem: "img/jogo-jantar.png", // Nome do arquivo na sua pasta img
        link: "https://s.shopee.com.br/7fWPNBHAHt"
    },
    {
        nome: "Jogo De 4 Travessas Oxford Ryo Maresia",
        imagem: "img/1.png",
        link: "https://s.shopee.com.br/1Vvm20VaF8"
    },
    {
        nome: "Travessa e Assadeira Refratárias com Alça 3un Porcelana Branca",
        imagem: "img/2.png",
        link: "hhttps://s.shopee.com.br/5L8Ub6PCEF"
    },
      {
        nome: "Faqueiro 20, 25, 30, 35, 48 ou 54 peças de aço inox prateado com Gift Box Viena Wolff",
        imagem: "img/3.png",
        link: "https://s.shopee.com.br/7pppZpl1gu"
    },
      {
        nome: "Jogo De Facas Inox Tramontina 4 7 10 Peças 5 Peças Com Cepo de Madeira Plenus Preto",
        imagem: "img/4.png",
        link: "https://s.shopee.com.br/16yFSoBuB"
    },
      {
        nome: "Conjunto Bowls de Inox com Tampa Electrolux",
        imagem: "img/5.png",
        link: "https://s.shopee.com.br/4qCE0MIBhl"
    },
       {
        nome: "Chaleira Elétrica Electrolux 1,8L Efficient com Desligamento Automático (EEK10)",
        imagem: "img/6.png",
        link: "https://s.shopee.com.br/gMf2iTFL7"
    },
           {
        nome: "Fritadeira Air Fryer Oven Electrolux EAF85 Experience Rita Lobo 12L 5 em 1",
        imagem: "img/7.png",
        link: "https://s.shopee.com.br/8ASfyVrUWI"
    },           
    {
        nome: "5 Pano Prato Cozinha Xadrez Branco c/ Dourado Grande Algodão Macio Laune Haus",
        imagem: "img/8.png",
        link: "https://s.shopee.com.br/2g7jQPypHr"
    },
        {
        nome: "Jogo De Taças De Vidro Diamond Cristal 325ml 6 Peças",
        imagem: "img/9.png",
        link: "https://s.shopee.com.br/8ASfyXQHjG"
    },
            {
        nome: "Jarra Diamond De Vidro Com Fio De Ouro Dourado 1,14L Lyor",
        imagem: "img/10.png",
        link: "https://s.shopee.com.br/8fOwZTSNRA"
    },
                {
        nome: "Boleira Porta Bolo Bambu Com Tampa Cúpula Em Acrílico 28cm",
        imagem: "img/11.png",
        link: "hhttps://s.shopee.com.br/6L11nCJKGF"
    },
                    {
        nome: "Porta Queijo Queijeira Madeira Bambu Com Tampa 19cm X 9cm Em Acrílico Mesa Posta",
        imagem: "img/12.png",
        link: "https://s.shopee.com.br/1LcLq1xxHm"
    },                    {
        nome: "Garrafa Térmica Termometro Digital 1L Café Chá Nórdica Com Cabo Madeira",
        imagem: "img/13.png",
        link: "https://s.shopee.com.br/3LNQDixV1a"
    },                   {
        nome: "Jogo de Taças de Cerveja Floripa com 6 peças 300ml",
        imagem: "img/14.png",
        link: "https://s.shopee.com.br/6L11nFrF7u"
    },
                    {
        nome: "Jogo 6 Taças de Vidro Premium Resistente para Vinho e Água 465ml - Design Moderno Drink Coquetel",
        imagem: "img/15.png",
        link: "hhttps://s.shopee.com.br/gMf2rtrJc"
    },
         {
        nome: "kit 02 Travesseiros Altenburg Antistress Tech 0,50x0,70m",
        imagem: "img/16.png",
        link: "https://s.shopee.com.br/20s2dLAvZO"
    },
             {
        nome: "Bandeja de Bambu e Madeira com Alças Douradas -Um Design Sofisticado Adequado para Todas as Ocasiões",
        imagem: "img/17.png",
        link: "https://s.shopee.com.br/1qYcR3kQOV"
    },
                 {
        nome: "Jogo de Utensílios Tramontina Softta em Silicone 7 Peças",
        imagem: "img/18.png",
        link: "https://s.shopee.com.br/8ASfyiTTKX"
    },
                     {
        nome: "Cj 6 Xícaras Café em Porcelana Com Pires Paddy Branco 90Ml - Wolff Original",
        imagem: "img/19.png",
        link: "https://s.shopee.com.br/1qYcR5vZvR"
    },
                         {
        nome: "Jogo 12 Potes Hermetico Vidro Mantimentos Tampa Bambu",
        imagem: "img/20.png",
        link: "https://s.shopee.com.br/8V5WNMOAG9"
    },
                             {
        nome: "Kit de 6 até 12 Potes de Vidro 640ml - 370 ml Hermético Marmita Fit com Tampa 4 Travas Premium",
        imagem: "img/21.png",
        link: "https://s.shopee.com.br/2qR9cxnBNm"
    },
                                 {
        nome: "Suporte de Panela Dobrável em Madeira Formato de Árvore | Suporte para Panelas e Pratos Quentes | Trivet de Bambu",
        imagem: "img/22.png",
        link: "https://s.shopee.com.br/5flL0Bkn9q"
    },
                                     {
        nome: "Porta Alho Feito de Cerâmica Premium Nome em Alto Relevo Tendencia Varias Cores",
        imagem: "img/23.png",
        link: "https://s.shopee.com.br/3g0GcY9ocb"
    },
                                         {
        nome: "Grill Sanduicheira Cadence SAN400 Elétrica Chapa Misteira Tostex Tostequeira Hambúrguer Click 127v",
        imagem: "img/24.png",
        link: "https://s.shopee.com.br/8V5WNRmXjA"
    },
                                             {
        nome: "Liquidificador Philco 1400W 3L 12 Velocidades Inox PLQ2100PI",
        imagem: "img/25.png",
        link: "https://s.shopee.com.br/1BIve04vCR"
    },
                                                {
        nome: "Panela de Pressão Elétrica Electrolux por Rita Lobo 6L Preta Experience Digital (PCC20)",
        imagem: "img/26.png",
        link: "https://s.shopee.com.br/20s2dYHhsA"
    },
                                                    {
        nome: "Kit Petisqueira Em Bambu + Facas E Garfos Tábua Ecoeden",
        imagem: "img/27.png",
        link: "https://s.shopee.com.br/5flL0JquT1"
    },
                                                        {
        nome: "Kit 2 Dispenser Hermético 3L com Dosador para Cozinha Ou Lavanderia",
        imagem: "img/28.png",
        link: "https://s.shopee.com.br/8fOwZqVjfc"
    },
                                                            {
        nome: "Manteigueira de Porcelana Branca com Tampa de Bambu e Espátula Elegante KL-PJ03629-S",
        imagem: "img/29.png",
        link: "https://s.shopee.com.br/4AwXDaqFAy"
    },
    {
        nome: "Kit 4 Super Panos De Chão Grandes Em Microfibra Panão 80x50",
        imagem: "img/30.png",
        link: "https://s.shopee.com.br/5flL0NgYyq"
    },
    {
        nome: "Balde Dobrável Retrátil em Silicone Flexível 26L e 10L",
        imagem: "img/31.png",
        link: "https://s.shopee.com.br/qg5GC7NC4"
    },
    {
        nome: "Kit 5 ou Kit 6 Saco Para Lavar Roupas Na Maquina",
        imagem: "img/32.png",
        link: "https://s.shopee.com.br/7pppb6tKZr"
    },
    {
        nome: "Jogo de Assadeiras Tramontina Brasil em Alumínio com Revestimento Antiaderente Starflon Max 3 Peças",
        imagem: "img/32.png",
        link: "https://s.shopee.com.br/1qYcSBq6nd"
    },
    {
        nome: "Kit 2 Formas Assadeira de Pizza Redonda Antiaderente",
        imagem: "img/34.png",
        link: "https://s.shopee.com.br/gMf49k5k6"
    },
    {
        nome: "Espátula para Bolo Tortas Dourado para Servi com Serrilha",
        imagem: "img/35.png",
        link: "https://s.shopee.com.br/4fsnpWhevD"
    },
    {
        nome: "Prato de Cristal Porta Bolo Boleira Queijeira",
        imagem: "img/36.png",
        link: "https://s.shopee.com.br/70GibuaozX"
    },
    {
        nome: "Cesta Redonda Wolff Papel com Alça e Forro 24cm Organização e Decor",
        imagem: "img/37.png",
        link: "https://s.shopee.com.br/4fsnpg7eXi"
    },
    {
        nome: "Meleira Portal Mel Wolff 200ml",
        imagem: "img/38.png",
        link: "https://s.shopee.com.br/6L11ooV6oe"
    },
    {
        nome: "Kit 10 Panos De Limpeza Microfibra",
        imagem: "img/39.png",
        link: "https://s.shopee.com.br/5q4lDwVni3"
    },
    {
        nome: "KIT C/6 Pratos Fundo de Cerâmica Roma 22cm Branco",
        imagem: "img/40.png",
        link: "https://s.shopee.com.br/8Km6CYiUrl"
    },
    {
        nome: "Conjunto 7 Peças Com 6 Taças Para Sobremesa Geneva",
        imagem: "img/41.png",
        link: "https://s.shopee.com.br/8V5WOucFbS"
    },
    {
        nome: "Kit com 6 Taças para Sobremesa Diamond Fio de Ouro 180ml",
        imagem: "img/42.png",
        link: "https://s.shopee.com.br/3qJgqZHvE1"
    },
    {
        nome: "Escorredor Pote Para Lavar Alimentos Praticidade Sua Cozinha",
        imagem: "img/43.png",
        link: "https://s.shopee.com.br/9Uy3b76w3B"
    },
    {
        nome: "Belifou Kit 6 Pote hermético 200ML Pote De Vidro",
        imagem: "img/44.png",
        link: "https://s.shopee.com.br/2qR9f4R408"
    },
    {
        nome: "Aspirador de Pó Vertical com Fio Electrolux 1100W",
        imagem: "img/45.png",
        link: "https://s.shopee.com.br/qg5HRBT0l"
    },
    {
        nome: "Aspirador de Pó Vertical com Fio Electrolux 1100W",
        imagem: "img/46.png",
        link: "https://s.shopee.com.br/30kZrSjn0Z"
    },
    {
        nome: "Jogo 6 Taças Vinho Tinto Em Cristal Bohemia 650 Ml",
        imagem: "img/47.png",
        link: "https://s.shopee.com.br/7pppcStyhv"
    },
    {
        nome: "Jogo 12 / 06 Taça Vidro Cristalino Buffet 186ML",
        imagem: "img/48.png",
        link: "https://s.shopee.com.br/7Aa8pCXXpE"
    },
    {
        nome: "Jogo de Toalhas Buddemeyer Vision Dual Air Gigante",
        imagem: "img/49.png",
        link: "https://s.shopee.com.br/4fsnqiIAPO"
    },
    {
        nome: "Jogo De Toalha Banhão Gigante Buddemeyer Fio",
        imagem: "img/50.png",
        link: "https://s.shopee.com.br/4AwXFqUtAt"
    },
    {
        nome: "Saladeira Bowl Ryo Maresia 1,6 Litros 26 cm Oxford Porcelana",
        imagem: "img/51.png",
        link: "https://s.shopee.com.br/9zuKCbps5c"
    },
    {
        nome: "Conjunto de Utensílios de Bambu de 06 Peças",
        imagem: "img/52.png",
        link: "https://s.shopee.com.br/30kZrn2j8z"
    },
    {
        nome: "Porta Pães Com Tampa Retrátil de Bambu Ecokitchen Mimo Style",
        imagem: "img/53.png",
        link: "https://s.shopee.com.br/5Ap4RnpoyV"
    },
    {
        nome: "Kit Jogo Americano Sousplat Bordado Suplat de Mesa Posta",
        imagem: "img/54.png",
        link: "https://s.shopee.com.br/5flL2mdZTf"
    },
    {
        nome: "Porta Frios Bambu Duplo Com Divisorias Tampa de Acrilico",
        imagem: "img/55.png",
        link: "https://s.shopee.com.br/9fHToB4INU"
    },
    {
        nome: "Multiprocessador Philco 1700W 9 em 1 Preto PMP1600P",
        imagem: "img/56.png",
        link: "https://s.shopee.com.br/7VCzEFkWuJ"
    },
    {
        nome: "Kit Via Aroma Sabonete Liquido com Difusor de VAretas e Bandeja Decorativa Espelhada",
        imagem: "img/57.png",
        link: "https://s.shopee.com.br/5L8UeJnANg"
    },
    {
        nome: "Descascador de legumes e frutas Wood inox e cabo Plástico Textura Madeira",
        imagem: "img/58.png",
        link: "https://s.shopee.com.br/50Vexwpksj"
    },
    {
        nome: "Lencol Micropercal 400 Fios Jogo De Cama Queen",
        imagem: "img/59.png",
        link: "https://s.shopee.com.br/16z0o87zp"
    },
    {
        nome: "Jogo de Lençol Completo Percal Premium 400 Fios Ponto Palito Queen ",
        imagem: "img/60.png",
        link: "https://s.shopee.com.br/6fdsx8tNUK"
    },
    {
        nome: "Tapete Porta de Entrada 40x75cm Capacho Lavável Interno/Externo",
        imagem: "img/61.png",
        link: "https://s.shopee.com.br/901njcgCJS"
    },
    {
        nome: "Micro-ondas Electrolux 36L cor Inox Efficient",
        imagem: "img/62.png",
        link: "https://www.mercadolivre.com.br/micro-ondas-electrolux-36l-cor-inox-efficient-com-descongelamento-assistido-me36s/p/MLB19750516?matt_event_ts=1778017574555&matt_d2id=59cf57ab-d18d-4367-a1e7-f533fac2ca83&matt_tracing_id=86e2feed-d63d-4242-a3ef-aa31cc82c157#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=05073f77-75c6-4281-a60d-c7a581f47dfe&tracking_id=6a3b7150-ec21-4f7f-8a45-651f453bba05&wid=MLB3640145261&sid=recos&c_id=/home/card-featured/element&c_uid=db3609c4-eeea-4236-b62d-a00c56de7800"
    },
    {
        imagem: "img/imagem_2026-05-12_143619144.png",
        nome: "Kit Enxoval Lisboa",
        link: "https://shopee.com.br/product/699706041/42864344384?d_id=5133c&uls_trackid=55kl4tn801qr&utm_content=2iaHH7idr9LUDuVarke6Aad8VyTm"
    
    }
];


const container = document.getElementById('lista-presentes');

function renderizarPresentes() {
    presentes.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card-presente';

        card.innerHTML = `
            <div class="img-container">
                <img src="${item.imagem}" alt="${item.nome}">
            </div>
            <div class="card-info">
                <h3>${item.nome}</h3>
                <a href="${item.link}" target="_blank" class="btn-presentear">Presentear</a>
            </div>
        `;

        container.appendChild(card);
    });
}

const musica = document.getElementById('musica-tema');
const btnAudio = document.getElementById('btn-audio');
const audioIcon = document.getElementById('audio-icon');
const volumeSlider = document.getElementById('volume-control');

// Função que você já tem, atualizada para iniciar o volume do slider
function fecharModal() {
    document.getElementById('modal-aviso').style.display = 'none';
    
    if (musica) {
        musica.volume = volumeSlider.value;
        musica.play().catch(e => console.log("Autoplay bloqueado pelo browser"));
    }
}

// Alternar entre Mudo e Som
function toggleMute() {
    if (musica.muted) {
        musica.muted = false;
        audioIcon.innerText = "🔊";
    } else {
        musica.muted = true;
        audioIcon.innerText = "🔇";
    }
}

// Controle de Volume em tempo real
volumeSlider.addEventListener('input', (e) => {
    const vol = e.target.value;
    musica.volume = vol;
    
    if (vol == 0) {
        audioIcon.innerText = "🔇";
    } else {
        audioIcon.innerText = "🔊";
    }
});

function copiarPix() {
    const chave = document.getElementById('pix-chave').innerText;
    navigator.clipboard.writeText(chave).then(() => {
        const msg = document.getElementById('msg-copiado');
        msg.style.display = 'block';
        setTimeout(() => { msg.style.display = 'none'; }, 2000);
    });
}
// Inicia a renderização ao carregar a página
document.addEventListener('DOMContentLoaded', renderizarPresentes);
