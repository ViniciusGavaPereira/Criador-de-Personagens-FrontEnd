const formulario = document.querySelector("form");

console.log(formulario);

const Inome = document.querySelector(".nome");
const Icpf = document.querySelector(".CPF");
const Iemail= document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Isenha2 = document.querySelector(".senha2");

formulario.addEventListener('submit', function (event){
    event.preventDefault();

    console.log(Inome.value);


    cadastrar();

});


function cadastrar () {

    fetch("http://localhost:8081/account/"), {
        method: "POST",

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: Inome.value,
            cpf: Icpf.value,
            email: Iemail.value,
            senha: Isenha.value
        })
        .then(function (res) {console.log(res)})
        .catch(function (res) {console.log(res)})
    }
}