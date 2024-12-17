import { hospedagens } from "./src/data/hospedagens.js";

const hospedagem = document.getElementById("hospedagem")




const url = new URL(window.location.href);
console.log(url)
// Cria um objeto URLSearchParams para acessar os parâmetros
const params = new URLSearchParams(url.search);

// Obtém o valor do parâmetro 'nome'
const nome = params.get('nome');
const findHospedagem = hospedagens.find(e => e.name_hos === nome)
console.log(findHospedagem)

hospedagem.innerHTML += `
    <div class='card'>
    <img class="thumb" src="${findHospedagem.thumb_hos}" alt=""> 
    <h2>${findHospedagem.name_hos}</h2>
    <p>${findHospedagem.cidade_hos}, ${findHospedagem.uf_hos}</p>
    <p>Avaliação: ${findHospedagem.nota_hos}</p>
    <a href="hospedagem.html?nome=${findHospedagem.name_hos}">Clique aqui</a>
    </div>   `


