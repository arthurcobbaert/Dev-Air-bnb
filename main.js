// Importações
import { hospedagens } from "./src/data/hospedagens.js";
import { createHospedagens } from "./src/scripts/createHospedagens.js";

// Seletores
const divResultados = document.getElementById('query-resultados') /** Essa variavel armazena todos os cards presentes no site, nao contendo nenhum filtro */
const btnCasa = document.getElementById('query-casa') /** "btnCasa" serve para representar o (botao casa), no entanto seu objetivo é filtrar apenas os cards que tem tipo_hos: casa */
const btnApartamento = document.getElementById('query-apartamento') /** "btnApartamento" serve para representar o (botao apartamento), no entanto seu objetivo é filtrar todos os cards que tem tipo_hos: casa */
const btnQuarto = document.getElementById('query-quarto') /** "btnQuarto" serve para representar o (botao quarto), no entanto seu objetivo é filtrar apenas os cards que tem tipo_hos: quarto*/
const btnTitulo = document.getElementById('query-titulo') /** "btnTitulo" se refere ao titulo "Devbnb", no entanto seu objetivo é fazer um "reset" que ao apertar no titulo todos os cards sejam representados na tela */
const iconSearch = document.getElementById('icon-search');
const inputQuery = document.getElementById('input-query');


// Quando a página é carregada:
window.addEventListener('DOMContentLoaded', () => {
    createHospedagens(hospedagens, divResultados)
})

// Ao clicar no icone de lupa, de busca, de search
iconSearch.addEventListener('click', () => {
    const query = inputQuery.value;
    
    /*
       - você deve construir um filtro verificando se a query é igual a cidade_hos.
        - Após construir o filtro, você deve invocar/chamar a função, createHospedagens
        e enviar o filtro e a div para ela.

    */
});


// Ao clicar no botão Casa
btnCasa.addEventListener('click', () => { /** Este é um evento que ao apertar no "btnCasa", havera alguma atualizacao */
    const hospedagens_casa = hospedagens.filter((element) => element.tipo_hos === "casa") /** A variavel "hospedagens_casa", filtra os elementos para obter apenas aqueles que sao do tipo "casa" */
    createHospedagens(hospedagens_casa, divResultados)
})

// Ao clicar no botão Apartamento
btnApartamento.addEventListener('click', () => { /** Este é um evento que ao apertar no "btnApartamento", havera alguma atualizacao */
    const hospedagens_apartamento = hospedagens.filter((element) => element.tipo_hos === "apartamento") /** A variavel "hospedagens_apartamento", filtra os elementos para obter apenas aqueles que sao do tipo "apartamento" */
    createHospedagens(hospedagens_apartamento, divResultados)
})

// Ao clicar no botão Quarto
btnQuarto.addEventListener('click', () => { /** Este é um evento que ao apertar no "btnQuarto", havera alguma atualizacao */
    const hospedagens_quarto = hospedagens.filter((element) => element.tipo_hos === "quarto") /** A variavel "hospedagens_apartamento", filtra os elementos para obter apenas aqueles que sao do tipo "quarto" */
    createHospedagens(hospedagens_quarto, divResultados)
})

// Ao clicar no botão da logo
btnTitulo.addEventListener('click', () => { /** Este é um evento que ao apertar no "btnQuarto", havera alguma atualizacao */
    createHospedagens(hospedagens, divResultados)
})