const signin = document.getElementById("signin")
const botao = document.getElementById("botao_signin")
const email = document.getElementById('email')
const password = document.getElementById('password')



let data = {
    email: "",
    password: ""
}

signin.addEventListener("input", ({target}) => {
    const name = target.name
    const value = target.value
    console.log(name,value)
    data = {
        ...data,
        [name]: value
    }
})

signin.addEventListener('submit', (event) => {
    event.preventDefault()
    const usuario = JSON.parse(localStorage.getItem('usuario'))
    console.log(usuario.email, usuario.senha)
    console.log(data.email, data.password)
    if (data.email === usuario.email && data.password === usuario.senha) {
        window.location.href = "index.html"
    } else {
        alert('usuario nao encontrado')
        email.value = ""
        password.value = ""
    }     
})
