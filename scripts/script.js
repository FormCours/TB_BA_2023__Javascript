console.log('Hello les BA ♥');

// Rappel 01
const louis = document.createElement('p');
louis.innerText = 'Hello Technobel';

const commentaire = document.createComment('Ceci est un commentaire pour Tarik')

const container = document.getElementById('container');
container.appendChild(louis);
container.appendChild(commentaire);


/**************************************************************/
const tarik = document.createElement('p');
tarik.innerText = 'Tarik （⊙ｏ⊙）';

const serge = document.createElement('p');
serge.innerText = 'Serge 😎';

const containerInsert = document.getElementById('container-insert');
// Ajout en premier dans le "container"
// containerInsert.prepend(tarik, serge)

// Ajout en dernier dans le "container"
containerInsert.append(tarik, serge)

// Permet de supprimé un noeud
const test = document.getElementById('test');
test.remove()
