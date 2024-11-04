// CAPTURA DOS ELEMENTOS PELA DOM
const nameDonoInput = document.getElementById("nameDono");
const namePetInput = document.getElementById("namePet");
const especieInput = document.getElementById("especie");
const racaInput = document.getElementById("raca");
const idadeInput = document.getElementById("idadepet");
const formulario = document.getElementById("formulario");
const petList = document.getElementById("petList");

let pets = [];
let currentIndex = null; // Para rastrear o índice do pet sendo editado

class Pet {
    constructor(nomeDono, nome, especie, raca, idade) {
        this.nomeDono = nomeDono;
        this.nome = nome;
        this.especie = especie;
        this.raca = raca;
        this.idade = idade;
    }
}

function renderPetList() {
    petList.innerHTML = ""; // Limpa a lista
    pets.forEach((pet, index) => {
        const li = document.createElement("li");
        li.innerText = `Dono: ${pet.nomeDono}, Pet: ${pet.nome}, Espécie: ${pet.especie}, Raça: ${pet.raca}, Idade: ${pet.idade} anos`;

        const buttonContainer = document.createElement("div");
        buttonContainer.style.marginTop = "10px"; // Espaçamento acima dos botões

        const editButton = document.createElement("button");
        editButton.innerText = "Editar";
        editButton.className = "edit-button"; // Classe para estilização
        editButton.onclick = () => editPet(index);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Deletar";
        deleteButton.className = "delete-button"; // Classe para estilização
        deleteButton.onclick = () => deletePet(index);

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);
        li.appendChild(buttonContainer);
        petList.appendChild(li);
    });
}

function addPet(event) {
    event.preventDefault(); // Evita o envio do formulário

    const nomeDono = nameDonoInput.value.trim();
    const nome = namePetInput.value.trim();
    const especie = especieInput.value.trim();
    const raca = racaInput.value.trim();
    const idade = idadeInput.value.trim();

    if (!nomeDono || !nome || !especie || !raca || !idade) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (currentIndex !== null) {
        pets[currentIndex] = new Pet(nomeDono, nome, especie, raca, idade);
        currentIndex = null;
    } else {
        pets.push(new Pet(nomeDono, nome, especie, raca, idade));
    }

    // Limpa os inputs
    nameDonoInput.value = "";
    namePetInput.value = "";
    especieInput.value = "";
    racaInput.value = "";
    idadeInput.value = "";

    renderPetList();
    console.log("Lista de Pets:", pets);
}

function editPet(index) {
    const pet = pets[index];
    nameDonoInput.value = pet.nomeDono;
    namePetInput.value = pet.nome;
    especieInput.value = pet.especie;
    racaInput.value = pet.raca;
    idadeInput.value = pet.idade;
    currentIndex = index; // pet sendo editado

    console.log("Editando Pet:", pet);
}

function deletePet(index) {
    pets.splice(index, 1); // Remove o pet
    renderPetList();
    console.log("Lista Atualizada de Pets:", pets);
}

formulario.addEventListener("submit", addPet);
