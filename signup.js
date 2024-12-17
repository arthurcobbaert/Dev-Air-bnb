const signup = document.getElementById("signup");
const email = document.getElementById("email")
const senha = document.getElementById("senha")


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
    const findEmail = lsUsuarios.find(element =>
        data.email === element.email);

        if (findEmail) {
            email.value = ""
            return alert("Este email ja foi utilizado")
        } 
        
        
        if (data.senha.length <= 5) {
            senha.value = ""
            return alert("A senha deve ter mais que 5 caracteres")
        } 
      

    
    lsUsuarios.push(data); // Colocando data dentro do localStorage

    localStorage.setItem('usuarios', JSON.stringify(lsUsuarios)) // Enviar de volta para o LocalStorage
        window.location.href = "index.html"
});