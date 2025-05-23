window.addEventListener('load', function(){
    const secaoCards = document.querySelector("#line-card");
    cardsData.forEach(carditem => secaoCards.append(card(carditem.cidade, carditem.pais, carditem.imagem, carditem.preco, carditem.texto)));
})

//La do data-cards, puxas todos os respectivos dados

function card(cidade, pais, imagem, preco, texto){ 
    const card = document.createElement("div");
    card.classList.add("card");
    
    const imgs_cards= document.createElement("img");
    imgs_cards.src = imagem;
    imgs_cards.alt = cidade;
   
    const div_body_card = document.createElement("div");
    div_body_card.classList.add("body-card");

    const div_line_top_card = document.createElement("div");
    div_line_top_card.classList.add("line-top-card");

    const div_tlt_left_card = document.createElement("div");
    div_tlt_left_card.classList.add("tlt-left-card");

    const nome_cidade = document.createElement("h4");
    nome_cidade.innerHTML = cidade;

    const nome_pais = document.createElement("h3");
    nome_pais.innerHTML = pais;

    const div_price = document.createElement("div");
    div_price.classList.add("price");
    div_price.innerHTML = preco;

    const paragrafo = document.createElement("p");
    paragrafo.innerHTML = texto;

    const btn = document.createElement("button");
    btn.innerHTML = 'Comprar';
    
    card.appendChild(imgs_cards);
    card.appendChild(div_body_card);
    div_body_card.appendChild(div_line_top_card);
    div_line_top_card.appendChild(div_tlt_left_card);
    div_tlt_left_card.appendChild(nome_cidade);
    div_tlt_left_card.appendChild(nome_pais);
    div_line_top_card.appendChild(div_price);
    div_body_card.appendChild(paragrafo);
    div_body_card.appendChild(btn);

    return card;
}