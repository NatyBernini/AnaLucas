// Array de objetos contendo os dados de cada presente
const presentes = [
    {
        nome: "Aparelho de Jantar e Chá Porcelana 20 peças Ryo Maresia Jogo de Pratos e Xícaras Oxford",
        imagem: "img/jogo-jantar.png", // Nome do arquivo na sua pasta img
        link: "https://shopee.com.br/product/1215229492/18399404192?d_id=acce1&rModelId=199598707643&uls_trackid=55il7e2r01l4&utm_content=27xTz6wkng2r58MiAyhW2m11HvCF&vItemId=58253313503&vModelId=199616895335&vShopId=1665239494"
    },
    {
        nome: "Jogo De 4 Travessas Oxford Ryo Maresia",
        imagem: "img/1.png",
        link: "https://shopee.com.br/product/1075271269/22598930042?d_id=acce1&uls_trackid=55il7ocb00oi&utm_content=27xTz6wkng71afPwyxVSxZEfDmJP"
    },
    {
        nome: "Travessa e Assadeira Refratárias com Alça 3un Porcelana Branca",
        imagem: "img/2.png",
        link: "https://shopee.com.br/product/778205840/22397178400?d_id=acce1&uls_trackid=55il7se401k6&utm_content=27xTz6wkngAqocT4HMnSVnsbmArb"
    },
      {
        nome: "Faqueiro 20, 25, 30, 35, 48 ou 54 peças de aço inox prateado com Gift Box Viena Wolff",
        imagem: "img/3.png",
        link: "https://shopee.com.br/product/1270189717/22997580236?d_id=acce1&uls_trackid=55il87f304l4&utm_content=27xTz6wkngG1MsCDNqSjZzFbmw2o"
    },
      {
        nome: "Jogo De Facas Inox Tramontina 4 7 10 Peças 5 Peças Com Cepo de Madeira Plenus Preto",
        imagem: "img/4.png",
        link: "https://shopee.com.br/product/1511286010/23594054027?d_id=acce1&uls_trackid=55il8cuk010t&utm_content=27xTz6wkngJfuu8C7XZFThMgRpHM"
    },
      {
        nome: "Conjunto Bowls de Inox com Tampa Electrolux",
        imagem: "img/5.png",
        link: "https://shopee.com.br/product/342086228/21497873768?d_id=acce1&uls_trackid=55il8hak02kl&utm_content=27xTz6wkngLkixNNSkGGWnuokkTy"
    },
       {
        nome: "Chaleira Elétrica Electrolux 1,8L Efficient com Desligamento Automático (EEK10)",
        imagem: "img/6.png",
        link: "https://shopee.com.br/product/1526836548/23098514650?d_id=acce1&uls_trackid=55il8l4t00ki&utm_content=27xTz6wkngTapiVHwa3RjDj25zzb"
    },
           {
        nome: "Fritadeira Air Fryer Oven Electrolux EAF85 Experience Rita Lobo 12L 5 em 1",
        imagem: "img/7.png",
        link: "https://shopee.com.br/product/1083800536/23099369009?d_id=acce1&uls_trackid=55il8vp501ki&utm_content=27xTz6wkngcq6W8wBVmxBcbxg3hZ"
    },           
    {
        nome: "5 Pano Prato Cozinha Xadrez Branco c/ Dourado Grande Algodão Macio Laune Haus",
        imagem: "img/8.png",
        link: "https://shopee.com.br/product/300375300/52652822227?d_id=acce1&uls_trackid=55il93so00kn&utm_content=27xTz6wknggQngBxghR1UxTFJjYB"
    },
        {
        nome: "Jogo De Taças De Vidro Diamond Cristal 325ml 6 Peças",
        imagem: "img/9.png",
        link: "https://shopee.com.br/product/408653169/48852424107?d_id=acce1&uls_trackid=55il996201jo&utm_content=27xTz6wkngm5MmEN65WptZH6qVMy"
    },
            {
        nome: "Jarra Diamond De Vidro Com Fio De Ouro Dourado 1,14L Lyor",
        imagem: "img/10.png",
        link: "https://shopee.com.br/product/1270189717/51804217420?d_id=acce1&uls_trackid=55il9c8c01jo&utm_content=27xTz6wkngoTSAjdRzAde2nWPkX9"
    },
                {
        nome: "Boleira Porta Bolo Bambu Com Tampa Cúpula Em Acrílico 28cm",
        imagem: "img/11.png",
        link: "https://shopee.com.br/Boleira-Porta-Bolo-Bambu-Com-Tampa-C%C3%BApula-Em-Acr%C3%ADlico-28cm-i.390381339.48208659669?extraParams=%7B%22display_model_id%22%3A445767231684%2C%22model_selection_logic%22%3A3%7D&sp_atk=f5f580a6-98f5-4824-a354-520c79e8b2d1&xptdk=f5f580a6-98f5-4824-a354-520c79e8b2d1"
    },
                    {
        nome: "Porta Queijo Queijeira Madeira Bambu Com Tampa 19cm X 9cm Em Acrílico Mesa Posta",
        imagem: "img/12.png",
        link: "https://shopee.com.br/Porta-Queijo-Queijeira-Madeira-Bambu-Com-Tampa-19cm-X-9cm-Em-Acr%C3%ADlico-Mesa-Posta-i.419526318.23394872288?extraParams=%7B%22display_model_id%22%3A169725507047%2C%22model_selection_logic%22%3A3%7D&sp_atk=189c93ac-c248-49a1-b3b4-e394768322f0&xptdk=189c93ac-c248-49a1-b3b4-e394768322f0"
    },                    {
        nome: "Garrafa Térmica Termometro Digital 1L Café Chá Nórdica Com Cabo Madeira",
        imagem: "img/13.png",
        link: "https://shopee.com.br/Garrafa-T%C3%A9rmica-Termometro-Digital-1L-Caf%C3%A9-Ch%C3%A1-N%C3%B3rdica-Com-Cabo-Madeira-i.1499872377.23598674517?extraParams=%7B%22display_model_id%22%3A209608947779%2C%22model_selection_logic%22%3A3%7D&rModelId=209608947779&sp_atk=24be8646-3341-401a-bd17-e9a0ea74878a&vItemId=58253714434&vModelId=189184724887&vShopId=1665239494&xptdk=24be8646-3341-401a-bd17-e9a0ea74878a"
    },                   {
        nome: "Jogo de Taças de Cerveja Floripa com 6 peças 300ml",
        imagem: "img/14.png",
        link: "https://shopee.com.br/Jogo-de-Ta%C3%A7as-de-Cerveja-Floripa-com-6-pe%C3%A7as-300ml-i.413047139.58254023833?extraParams=%7B%22display_model_id%22%3A119872214166%2C%22model_selection_logic%22%3A3%7D&sp_atk=e33bfefb-2c9b-484e-8ca6-004db2cedaf5&xptdk=e33bfefb-2c9b-484e-8ca6-004db2cedaf5"
    },
                    {
        nome: "Jogo 6 Taças de Vidro Premium Resistente para Vinho e Água 465ml - Design Moderno Drink Coquetel",
        imagem: "img/15.png",
        link: "https://shopee.com.br/Jogo-6-Ta%C3%A7as-de-Vidro-Premium-Resistente-para-Vinho-e-%C3%81gua-465ml-Design-Moderno-Drink-Coquetel-i.849672475.22397066490?extraParams=%7B%22display_model_id%22%3A199157846931%2C%22model_selection_logic%22%3A3%7D&sp_atk=e8113b92-c2cb-4b92-93ff-a573bbb0c04d&xptdk=e8113b92-c2cb-4b92-93ff-a573bbb0c04d"
    },
         {
        nome: "kit 02 Travesseiros Altenburg Antistress Tech 0,50x0,70m",
        imagem: "img/16.png",
        link: "https://shopee.com.br/product/781152841/20897430554?d_id=acce1&uls_trackid=55ila8gf00og&utm_content=27xTz6wkngvVFkJDcDZUqqnENsts"
    },
             {
        nome: "Bandeja de Bambu e Madeira com Alças Douradas -Um Design Sofisticado Adequado para Todas as Ocasiões",
        imagem: "img/17.png",
        link: "https://shopee.com.br/product/392003162/58256654693?d_id=acce1&uls_trackid=55ilacs301jo&utm_content=27xTz6wkngyZxkeVRKe4TF7iDznT"
    },
                 {
        nome: "Jogo de Utensílios Tramontina Softta em Silicone 7 Peças",
        imagem: "img/18.png",
        link: "https://shopee.com.br/product/513742166/22494447662?d_id=acce1&uls_trackid=55ilagso01k0&utm_content=27xTz6wknh29kybRSduZCndY59A7"
    },
                     {
        nome: "Cj 6 Xícaras Café em Porcelana Com Pires Paddy Branco 90Ml - Wolff Original",
        imagem: "img/19.png",
        link: "https://shopee.com.br/product/838877334/58205988061?d_id=acce1&uls_trackid=55ilckd000k0&utm_content=27xTz6wknh79cecxMbWKzgFza8ZD"
    },
                         {
        nome: "Jogo 12 Potes Hermetico Vidro Mantimentos Tampa Bambu",
        imagem: "img/20.png",
        link: "https://shopee.com.br/product/1383448342/22194327737?d_id=acce1&uls_trackid=55ilcq1c00l4&utm_content=27xTz6wknh9KBWrBQC4NCAwcVQjq"
    },
                             {
        nome: "Kit de 6 até 12 Potes de Vidro 640ml - 370 ml Hermético Marmita Fit com Tampa 4 Travas Premium",
        imagem: "img/21.png",
        link: "https://shopee.com.br/product/332059670/42122939888?d_id=acce1&uls_trackid=55ilcto900k0&utm_content=27xTz6wknhBp7MMwrfrkb7C85kj1"
    },
                                 {
        nome: "Suporte de Panela Dobrável em Madeira Formato de Árvore | Suporte para Panelas e Pratos Quentes | Trivet de Bambu",
        imagem: "img/22.png",
        link: "https://shopee.com.br/product/1001240198/22099229942?d_id=acce1&uls_trackid=55ild1hh03jo&utm_content=27xTz6wknhE4aoB3RFkbYm48hTZ9"
    },
                                     {
        nome: "Porta Alho Feito de Cerâmica Premium Nome em Alto Relevo Tendencia Varias Cores",
        imagem: "img/23.png",
        link: "https://shopee.com.br/product/1362957434/58204156362?d_id=acce1&uls_trackid=55ild7va00jo&utm_content=27xTz6wknhHJxC6ETj214CMFr4i3"
    },
                                         {
        nome: "Grill Sanduicheira Cadence SAN400 Elétrica Chapa Misteira Tostex Tostequeira Hambúrguer Click 127v",
        imagem: "img/24.png",
        link: "https://shopee.com.br/Grill-Sanduicheira-Cadence-SAN400-El%C3%A9trica-Chapa-Misteira-Tostex-Tostequeira-Hamb%C3%BArguer-Click-127v-i.1512106181.54505363986?extraParams=%7B%22display_model_id%22%3A340489678131%2C%22model_selection_logic%22%3A3%7D&sp_atk=5b26b35a-edcc-470d-bb69-e37ee1ea556f&xptdk=5b26b35a-edcc-470d-bb69-e37ee1ea556f"
    },
                                             {
        nome: "Liquidificador Philco 1400W 3L 12 Velocidades Inox PLQ2100PI",
        imagem: "img/25.png",
        link: "https://shopee.com.br/Liquidificador-Philco-1400W-3L-12-Velocidades-Inox-PLQ2100PI-i.811034337.23996064177?extraParams=%7B%22display_model_id%22%3A228737738369%2C%22model_selection_logic%22%3A3%7D&sp_atk=82dd265f-b5bd-4560-bbe7-786d4167a004&xptdk=82dd265f-b5bd-4560-bbe7-786d4167a004"
    },
                                                {
        nome: "Panela de Pressão Elétrica Electrolux por Rita Lobo 6L Preta Experience Digital (PCC20)",
        imagem: "img/26.png",
        link: "https://shopee.com.br/Panela-de-Press%C3%A3o-El%C3%A9trica-Electrolux-por-Rita-Lobo-6L-Preta-Experience-Digital-(PCC20)-i.1526836548.22693991409?extraParams=%7B%22display_model_id%22%3A189175059878%2C%22model_selection_logic%22%3A3%7D"
    },
                                                    {
        nome: "Kit Petisqueira Em Bambu + Facas E Garfos Tábua Ecoeden",
        imagem: "img/27.png",
        link: "https://shopee.com.br/product/1602415544/58251742817?d_id=acce1&uls_trackid=55ilfudp01jo&utm_content=27xTz6wknhSmhKsD3oybfCQP117d"
    },
                                                        {
        nome: "Kit 2 Dispenser Hermético 3L com Dosador para Cozinha Ou Lavanderia",
        imagem: "img/28.png",
        link: "https://shopee.com.br/product/1502286361/20399842507?d_id=acce1&uls_trackid=55ilg35600kl&utm_content=27xTz6wknhWSFtMQ7r5mJhuaE4x7"
    },
                                                            {
        nome: "Manteigueira de Porcelana Branca com Tampa de Bambu e Espátula Elegante KL-PJ03629-S",
        imagem: "img/29.png",
        link: "https://shopee.com.br/product/328538026/58258599520?d_id=acce1&uls_trackid=55ilg8pa01kn&utm_content=27xTz6wknhZU9w9FpA86fzzSrAWK"
    },
    // Adicione mais itens seguindo o padrão acima
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

// Função para fechar o modal inicial
function fecharModal() {
    document.getElementById('modal-aviso').style.display = 'none';
}

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