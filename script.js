// CAPTURA DOS ELEMENTOS PELA DOM
const nameDonoInput = document.getElementById("nameDono");
const namePetInput = document.getElementById("namePet");
const especieInput = document.getElementById("especie");
const racaInput = document.getElementById("raca");
const idadeInput = document.getElementById("idadepet");
const formulario = document.getElementById("formulario");
const petList = document.getElementById("petList");
const saidaSection = document.getElementById("saida");

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
        li.innerText = `Dono: ${pet.nomeDono}, Pet: ${pet.nome}, Espécie: ${pet.especie}, Raça: ${pet.raca}, Idade: ${pet.idade} anos `;

        const editButton = document.createElement("button");
        editButton.innerText = "Editar";
        editButton.className = "button edit-button";
        editButton.onclick = () => editPet(index);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Deletar";
        deleteButton.className = "button delete-button";
        deleteButton.onclick = () => deletePet(index);

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        petList.appendChild(li);
    });

    // Mostra a seção de saida se tiver pets
    if (pets.length > 0) {
        saidaSection.classList.remove("hidden");
    } else {
        saidaSection.classList.add("hidden");
    }
}



function addPet(event) {
    event.preventDefault(); // Evita o enviar formulário
    const nomeDono = nameDonoInput.value;
    const nome = namePetInput.value;
    const especie = especieInput.value;
    const raca = racaInput.value;
    const idade = idadeInput.value;

    if (currentIndex !== null) {
        // Edita pet existente
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

    // lista de pets
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

    // pet sendo editado
    console.log("Editando Pet:", pet);
}

function deletePet(index) {
    const removedPet = pets[index]; // Guarda o pet removido
    pets.splice(index, 1); // Remove o pet
    renderPetList();

    //removido
    console.log("Pet Removido:", removedPet);
    console.log("Lista Atualizada de Pets:", pets);
}

formulario.addEventListener("submit", addPet);
