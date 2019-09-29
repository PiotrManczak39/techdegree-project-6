
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const missed = 0;
const startButton = overlay.lastElementChild;
const phrases = [
  "Two wrongs don't make a right",
  "Better late than never",
  "Never look a gift horse in the mouth",
  "God helps those who help themselves",
  "Actions speak louder than words"
];
const list = phrase.getElementsByTagName('ul')[0];

function getRandomPhraseAsArray(arr) {
  function randomNumber() {
    return Math.floor(Math.random() * arr.length);
  }
  const random = randomNumber();
  const newGameArray = Array.from(arr[random]);
  return(newGameArray);
}

function addPhraseToDisplay(arr) {
  for (let i=0; i<arr.length; i++) {
    let li = document.createElement('li');
    li.textContent = arr[i];
    list.appendChild(li);
    if ( li.textContent !== null ) {
      li.className = 'letter';
    }
  }
}

// function checkLetter(button) {
//   const arrayOfLetters = document.getElementsByTagName('li');
//   const letters = [];
//   for (let i=0; i<arrayOfLetters.length; i++) {
//     if ( arrayOfLetters[i].className = 'letter' ) {
//       letters.push(arrayOfLetters[i]);
//     }
//   }
//   return letters;
// }
//
// console.log(checkLetter());

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});
