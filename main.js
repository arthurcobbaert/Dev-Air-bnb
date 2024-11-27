import { hospedagens } from "./src/data/hospedagens.js";

const divResultados = document.getElementById('query-resultados') /** Essa variavel armazena todos os cards presentes no site, nao contendo nenhum filtro */
const btnCasa = document.getElementById('query-casa') /** "btnCasa" serve para representar o (botao casa), no entanto seu objetivo é filtrar apenas os cards que tem tipo_hos: casa */
const btnApartamento = document.getElementById('query-apartamento') /** "btnApartamento" serve para representar o (botao apartamento), no entanto seu objetivo é filtrar todos os cards que tem tipo_hos: casa */
const btnQuarto = document.getElementById('query-quarto') /** "btnQuarto" serve para representar o (botao quarto), no entanto seu objetivo é filtrar apenas os cards que tem tipo_hos: quarto*/
const btnTitulo = document.getElementById('query-titulo') /** "btnTitulo" se refere ao titulo "Devbnb", no entanto seu objetivo é fazer um "reset" que ao apertar no titulo todos os cards sejam representados na tela */

hospedagens.forEach(element => { /** Estrtura de "for" para passar atraves de todos os elementos no banco de dados */ 
    divResultados.innerHTML +=  /** Tal metodo é usado para determinar a configuracao dentro do HTML, ou seja, como os cards irao ficar */`   
       <div class='card'>
        <img class="thumb" src="${element.thumb_hos}" alt=""> 
        <h2>${element.name_hos}</h2>
        <p>${element.cidade_hos}, ${element.uf_hos}</p>
        <p>Avaliação: ${element.nota_hos}</p>
       </div>
    `
});



btnCasa.addEventListener('click', () => { /** Este é um evento que ao apertar no "btnCasa", havera alguma atualizacao */
    const hospedagens_casa = hospedagens.filter((element) => element.tipo_hos === "casa") /** A variavel "hospedagens_casa", filtra os elementos para obter apenas aqueles que sao do tipo "casa" */
    console.log(hospedagens_casa) /** Irá realizar o "print" da variavel "hospedagens_casa" */
    divResultados.innerHTML = ""
    hospedagens_casa.forEach(element => { /** Tudo que estiver dentro do "for", sera representado na tela de acordo com o filtro "casa" */
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

btnApartamento.addEventListener('click', () => { /** Este é um evento que ao apertar no "btnApartamento", havera alguma atualizacao */
    const hospedagens_apartamento = hospedagens.filter((element) => element.tipo_hos === "apartamento") /** A variavel "hospedagens_apartamento", filtra os elementos para obter apenas aqueles que sao do tipo "apartamento" */
    console.log(hospedagens_apartamento) /** Irá realizar o "print" da variavel "hospedagens_apartamento" */
    divResultados.innerHTML = ""
    hospedagens_apartamento.forEach(element => { /** Tudo que estiver dentro do "for", sera representado na tela de acordo com o filtro "apartamento" */
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


btnQuarto.addEventListener('click', () => { /** Este é um evento que ao apertar no "btnQuarto", havera alguma atualizacao */
    const hospedagens_quarto = hospedagens.filter((element) => element.tipo_hos === "quarto") /** A variavel "hospedagens_apartamento", filtra os elementos para obter apenas aqueles que sao do tipo "quarto" */
    console.log(hospedagens_quarto) /** Irá realizar o print da variavel "hospedagens_quarto" */
    divResultados.innerHTML = ""
    hospedagens_quarto.forEach(element => { /** Tudo que estiver dentro do "for", sera representado na tela de acordo com o filtro "quarto" */
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

btnTitulo.addEventListener('click', () => { /** Este é um evento que ao apertar no "btnQuarto", havera alguma atualizacao */
    console.log(hospedagens) /** Ocorrerá o "print" de todas as hospedagens, ou seja, sem nenhum filtro */
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
