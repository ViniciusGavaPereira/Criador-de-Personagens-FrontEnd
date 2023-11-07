const formulario = document.querySelector("form");


const Inome = document.querySelector(".nome");
const Icpf = document.querySelector(".CPF");
const Iemail= document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Isenha2 = document.querySelector(".senha2");

formulario.addEventListener('submit', function (event){
    event.preventDefault();

    const characterName = document.querySelector(".CharacterName").value;
    const characterSex =  document.querySelector('input[name="sex"]:checked').value;


    console.log(characterName);
    console.log(characterSex);


    createCharacter(characterName, characterSex)

});




function createCharacter(name, sex) {

    console.log("Teste nome: " + name);
    console.log("Teste Sexo: " + sex)

    fetch("http://localhost:8081/character/createCharacter/v1/1/", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            sex: sex,
        })
    })
    .then(function (res) {
        console.log(res);
    })
    .catch(function (error) {
        console.log(error);
    });
}
