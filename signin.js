const signin = document.getElementById("signin")
const botao = document.getElementById("botao_signin")
const email = document.getElementById('email')
const password = document.getElementById('password')

let data = {
    email: "",
    password: ""
};

window.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('usuarios')) { // Senão exister usuarios no localStorage
        localStorage.setItem('usuarios', JSON.stringify([]))
    };
})


signin.addEventListener("input", ({ target }) => {
    const name = target.name
    const value = target.value
    console.log(name, value)
    data = {
        ...data,
        [name]: value
    }
})

signin.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    // Verificação pelo FIND
    const findUser = usuarios.find(element =>
        data.email === element.email && data.password === element.senha);

    if (findUser) {
        window.location.href = "index.html"
    } else {
        alert('usuario nao encontrado')
        email.value = ""
        password.value = ""
    }
})
