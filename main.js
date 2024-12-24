// Importações
import { hospedagens } from "./src/data/hospedagens.js";
import { createHospedagens } from "./src/scripts/createHospedagens.js";
import { filterByType } from "./src/scripts/filterByType.js";

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
});

// Ao clicar no icone de lupa, de busca, de search
iconSearch.addEventListener('click', () => {
    const query = inputQuery.value;
    filterByType(hospedagens, query, divResultados);
});

// Ao clicar no botão Casa
btnCasa.addEventListener('click', () => filterByType(hospedagens, 'casa', divResultados));

// Ao clicar no botão Apartamento
btnApartamento.addEventListener('click', () => filterByType(hospedagens, 'apartamento', divResultados));

// Ao clicar no botão Quarto
btnQuarto.addEventListener('click', () => filterByType(hospedagens, 'quarto', divResultados));

// Ao clicar no botão da logo
btnTitulo.addEventListener('click', () => createHospedagens(hospedagens, divResultados));