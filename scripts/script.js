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


/**************************************************************/
// Récuperation des elements
const btnJourNuit1 = document.querySelector('#btn-jour-nuit');
const btnJourNuit2 = document.querySelector('#btn-jour-nuit-2');
const zoneJourNuit = document.querySelector('#zone-jour-nuit');

// Affichage en console des classe de "zoneJourNuit"
// - Une chaine de caractere avec les classes
console.log('className : ', zoneJourNuit.className);
// - Une liste avec les differentes classes
console.log('classList : ', zoneJourNuit.classList);

// Interaction via le clique du bouton
btnJourNuit1.addEventListener('click', function() {
  console.log('Click sur le btn !!!');
});

btnJourNuit1.addEventListener('click', function() {
  // Detection de la classe "jour"
  if(zoneJourNuit.classList.contains('jour')) {

    // Suppression de la classe "jour"
    zoneJourNuit.classList.remove('jour');

    // Ajout de la classe "nuit"
    zoneJourNuit.classList.add('nuit');
  }
  else {

    // Remplacer la classe "nuit" par la classe "jour"
    zoneJourNuit.classList.replace('nuit', 'jour');
  }
});

btnJourNuit2.addEventListener('click', function() {
  // Le "toggle" test la présence de la classe : 
  // - Si elle est présente => La retire
  // - Si elle est absente  => l'ajoute
  zoneJourNuit.classList.toggle('jour');
  zoneJourNuit.classList.toggle('nuit');
})



/**************************************************************/

// LocalStorage => Permet de sauvegarde des données 
//                 Sous forme de chaine de caractere !!!

// - Pour les valeurs primitive (string, number, boolean, ...)
//   On peut les stocker directement, mais attention a la conversion
const firstname = 'Della';
const nb = 42;

//   • Save
localStorage.setItem('first_name', firstname);
localStorage.setItem('number', nb);

//   • Recuperer
const firstnameRecup = localStorage.getItem('first_name');
const nbRecup = parseFloat(localStorage.getItem('number'));


// - Pour les valeurs complexe (object, tableau, dico, ...)
//   Il faut passé par un format pour eviter de perdre les données !!!
//   Le plus simple => JSON

// Tips pour le JSON : 
//  - Valeur vers le JSON =>  const json = JSON.stringify(valeur);
//  - JSON vers la valeur =>  const copy = JSON.parse(json);

const house = {
  nbRoom : 42,
  color: 'Pinky'
};

const tab = ['Riri', 'Zaza', 'Della']

const people = [
  {
    firstname: 'Della',
    lastname: 'Duck'
  },
  {
    firstname: 'Zaza',
    lastname: 'Vanderquack'
  }
]


//   • Save
localStorage.setItem('house', JSON.stringify(house));
localStorage.setItem('tab', JSON.stringify(tab));
localStorage.setItem('people', JSON.stringify(people));

//   • Recuperer
const houseRecup = JSON.parse(localStorage.getItem('house'));
const tabRecup = JSON.parse(localStorage.getItem('tab'));
const peopleRecup = JSON.parse(localStorage.getItem('people'));