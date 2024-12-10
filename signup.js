const signup = document.getElementById("signup")
let data = {
    nome: '',
    email: '',
    senha: '',
    telefone: ''
}

signup.addEventListener('input', ({target}) => {
    const name = target.name
    const value = target.value
    console.log(name,value)
    data = {
        ...data, 
        [name]: value
    }
})


signup.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(data)
    localStorage.setItem('usuario', JSON.stringify(data)) 
})