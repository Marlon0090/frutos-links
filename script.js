// ========================================
// FRUTOS DE GOIÁS SOROCABA
// CONFIGURAÇÃO DOS LINKS DA PÁGINA
// ========================================

const LINKS = {

  // Delivery próprio
  delivery: "https://cardapio.datacaixa.com.br/frutos",

  // Link da loja no iFood
  ifood: "https://www.ifood.com.br/delivery/sorocaba-sp/sorveteria-frutos-de-goias-centro/fcce376b-7587-41eb-a447-be9b7e7a12a6",

  // WhatsApp da loja
  whatsapp: "https://wa.me/5515991764745",

  // Localização da unidade Centro
  centro: "https://www.google.com/maps/search/?api=1&query=Rua+da+Penha%2C+652%2C+Centro%2C+Sorocaba%2C+SP",

  // Link do Grupo VIP
  vip: "COLE_AQUI_O_LINK_DO_GRUPO_VIP"

};


// ========================================
// FUNÇÃO PARA CONFIGURAR OS BOTÕES
// ========================================

function setLink(id, url) {

  const element = document.getElementById(id);

  if (!element) return;

  const validUrl =
    typeof url === "string" &&
    /^https?:\/\//i.test(url);

  if (validUrl) {

    element.href = url;

  } else {

    element.href = "#";

    element.addEventListener("click", (event) => {

      event.preventDefault();

      alert("Este link será disponibilizado em breve.");

    });

  }

}


// ========================================
// APLICAR LINKS NA PÁGINA
// ========================================

setLink("delivery-link", LINKS.delivery);

setLink("ifood-link", LINKS.ifood);

setLink("whatsapp-link", LINKS.whatsapp);

setLink("centro-link", LINKS.centro);

setLink("vip-link", LINKS.vip);