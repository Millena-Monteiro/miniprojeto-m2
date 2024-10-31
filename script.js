// CAPTURA DOS ELEMENTOS PELA DOM
const nome_dono = document.getElementById("nameUser");
const info_pet = {
    nome: document.getElementById("namePet"),
    raca: document.getElementById("raca"),
    idade: document.getElementById("idadepet"),
};
const button = document.querySelector("button");
const spans = document.querySelectorAll(".span");

//CRIAÇÃO DOS MODELOS
class Dono {
    constructor(nomeDono) {
        this.nomeDono = nomeDono;
    }

    mostraDono() {
        console.log(this.nomeDono);
    }
}

class Animal extends Dono {
    constructor(nomeDono, nomeAnimal, raca, idadePet) {
        super(nomeDono);
        this.nomeAnimal = nomeAnimal;
        this.raca = raca;
        this.idadePet = idadePet;
    }

    mostrarAnimalConsole() {
        console.log(`O dono é o ${this.nomeDono}, o seu animal é {
        ${this.nomeAnimal}, da raça ${this.raca} e tem ${this.idadePet} anos}`);
    }

    exibirAnimal() {
        spans[0].innerText = this.nomeDono;
        spans[1].innerText = this.nomeAnimal;
        spans[2].innerText = this.raca;
        spans[3].innerText = this.idadePet;
    }
}

// CRIEI UM EVENTO DE CLIQUE DO BOTÃO PARA ENVIAR AS INFORMAÇÕES AO CHAMAR A CLASSA ANIMAL
button.addEventListener("click", () => {
    //INSTANCIANDO UM NOVO ANIMAL
    const animal1 = new Animal(
        nome_dono.value, //ELE VEM DO INPUT DO HTML
        info_pet.nome.value, //ELE VEM DO INPUT DO HTML
        info_pet.raca.value, //ELE VEM DO INPUT DO HTML
        info_pet.idade.value //ELE VEM DO INPUT DO HTML
    );
    animal1.mostrarAnimalConsole();

    animal1.exibirAnimal();
});