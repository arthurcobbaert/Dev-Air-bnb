const signup = document.getElementById("signup");

let data = {
    nome: '',
    email: '',
    senha: '',
    telefone: ''
};

window.addEventListener('DOMContentLoaded', () => {
    // Verificar se existe alguma base de dados no localStorage
    if (!localStorage.getItem('usuarios')) { // Senão exister usuarios no localStorage
        localStorage.setItem('usuarios', JSON.stringify([]))
    }
});

signup.addEventListener('input', ({target}) => {
    const name = target.name;
    const value = target.value;
    
    data = {
        ...data, 
        [name]: value
    };
})


signup.addEventListener('submit', (event) => {
    event.preventDefault();

    const lsUsuarios = JSON.parse(localStorage.getItem('usuarios')); // Resgatando o array do LocalStorage
    // Verificar caso aquele EMAIL já foi criado no localStorage
    /*
        Use o FIND
    */

    /*
        A senha DEVE ter mais de que 5 caracteres

    */


    lsUsuarios.push(data); // Colocando data dentro do localStorage

    localStorage.setItem('usuarios', JSON.stringify(lsUsuarios)) // Enviar de volta para o LocalStorage
});