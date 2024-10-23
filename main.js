import { hospedagens } from "./src/data/hospedagens.js";

const divResultados = document.getElementById('query-resultados')
const btnCasa = document.getElementById('query-casa')
const btnApartamento = document.getElementById('query-apartamento')
const btnQuarto = document.getElementById('query-quarto')
const btnTitulo = document.getElementById('query-titulo')

hospedagens.forEach(element => {
    divResultados.innerHTML += `
       <div class='card'>
        <img class="thumb" src="${element.thumb_hos}" alt="">
        <h2>${element.name_hos}</h2>
        <p>${element.cidade_hos}, ${element.uf_hos}</p>
        <p>Avaliação: ${element.nota_hos}</p>
       </div>
    `
});



btnCasa.addEventListener('click', () => {
    const hospedagens_casa = hospedagens.filter((element) => element.tipo_hos === "casa")
    console.log(hospedagens_casa)
    divResultados.innerHTML = ""
    hospedagens_casa.forEach(element => {
        divResultados.innerHTML += `
       <div class='card'>
        <img class="thumb" src="${element.thumb_hos}" alt="">
        <h2>${element.name_hos}</h2>
        <p>${element.cidade_hos}, ${element.uf_hos}</p>
        <p>Avaliação: ${element.nota_hos}</p>
       </div>
    `
});

})

btnApartamento.addEventListener('click', () => {
    const hospedagens_apartamento = hospedagens.filter((element) => element.tipo_hos === "apartamento")
    console.log(hospedagens_apartamento)
    divResultados.innerHTML = ""
    hospedagens_apartamento.forEach(element => {
        divResultados.innerHTML += `
       <div class='card'>
        <img class="thumb" src="${element.thumb_hos}" alt="">
        <h2>${element.name_hos}</h2>
        <p>${element.cidade_hos}, ${element.uf_hos}</p>
        <p>Avaliação: ${element.nota_hos}</p>
       </div>
    `
});

})


btnQuarto.addEventListener('click', () => {
    const hospedagens_quarto = hospedagens.filter((element) => element.tipo_hos === "quarto")
    console.log(hospedagens_quarto)
    divResultados.innerHTML = ""
    hospedagens_quarto.forEach(element => {
        divResultados.innerHTML += `
       <div class='card'>
        <img class="thumb" src="${element.thumb_hos}" alt="">
        <h2>${element.name_hos}</h2>
        <p>${element.cidade_hos}, ${element.uf_hos}</p>
        <p>Avaliação: ${element.nota_hos}</p>
       </div>
    `
});
})

btnTitulo.addEventListener('click', () => {
    console.log(hospedagens)
    divResultados.innerHTML = ""
    hospedagens.forEach(element => {
        divResultados.innerHTML += `
        <div class='card'>
        <img class="thumb" src="${element.thumb_hos}" alt="">
        <h2>${element.name_hos}</h2>
        <p>${element.cidade_hos}, ${element.uf_hos}</p>
        <p>Avaliação: ${element.nota_hos}</p>
       </div>

    `
})
})
