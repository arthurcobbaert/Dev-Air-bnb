import { hospedagens } from "./src/data/hospedagens.js";
import { images } from "./src/data/images.js";

const divHospedagem = document.getElementById("hospedagem")
const divImage = document.getElementById("image")
const divImages = document.getElementById("images")

// Coleta a URL
const url = new URL(window.location.href);
// Cria um objeto URLSearchParams para acessar os parâmetros
const params = new URLSearchParams(url.search);
// Obtém o valor do parâmetro 'nome'
const nome = params.get('nome');
// Econtra a hospedagem pelo parametro da URL
const findHospedagem = hospedagens.find(e => e.name_hos === nome)

divImage.innerHTML += `
    <div>
        <img class="img1" src="${findHospedagem.thumb_hos}" alt=""> 
    </div>`

images.forEach(element => {
    divImages.innerHTML += `
        <img class="img2" src="${element}" alt=""> 
    `
});

divHospedagem.innerHTML += `
    <div>
        <h2>${findHospedagem.name_hos}</h2>


    </div>
`

