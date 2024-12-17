export function createHospedagens(baseDados, div) {
    // Abaixo estamos limpando a div
    div.innerHTML = ""

    // Cria os elementos
    baseDados.forEach(element => {
        div.innerHTML += `   
           <div class='card'>
            <img class="thumb" src="${element.thumb_hos}" alt=""> 
            <h2>${element.name_hos}</h2>
            <p>${element.cidade_hos}, ${element.uf_hos}</p>
            <p>Avaliação: ${element.nota_hos}</p>
            <a href="hospedagem.html?nome=${element.name_hos}">Clique aqui</a>
           </div>
        `
    });
}