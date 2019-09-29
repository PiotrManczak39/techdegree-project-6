
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const missed = 0;
const startButton = overlay.lastElementChild;
const phrases = [
  "two wrongs do not make a right",
  "better late than never",
  "never look a gift horse in the mouth",
  "god helps those who help themselves",
  "actions speak louder than words"
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
    if ( li.textContent === ' ' ) {
      li.className = 'space';
    } else {
      li.className = 'letter';
    }
  }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

function checkLetter(buttonPressed) {
  const letters = document.querySelectorAll('.letter');
  for (let i=0; i<letters.length; i++) {
    const listItem = letters[i];
    if ( listItem.textContent === buttonPressed ) {
      listItem.className = 'show';
      let match = listItem;
      return match;
    } 
  }
}

checkLetter('a');

// qwerty.addEventListener('keyup', (e) => {
//   const button = e.target;
//   if ( button.tagName === 'BUTTON' ) {
//     button.className = 'chosen';
//     button.setAttribute(disabled);
//   }
// });

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});
