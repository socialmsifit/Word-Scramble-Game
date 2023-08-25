const words = [
    {
        word: 'pocket',
        hint: 'A bag for carrying small items'
    },
    {
        word: 'statement',
        hint: 'A declaration of something'
    },
    {
        word: 'second',
        hint: 'One-sixtieth of a minute'
    },
    
    {
        word: 'library',
        hint: 'place containing collection of books'
    },
    {
        word: 'expert',
        hint: 'A person with extensive knowledge'
    },

    {
        word: 'needle',
        hint: 'A thin and sharp metal pin'
    },

    {
        word: 'pocket',
        hint: 'A bag for carrying small items'
    },
    {
        word: 'tongue',
        hint: 'the muscular organ of mouth'
    },
    {
        word: 'comfort',
        hint: 'A pleasant feeling of relaxation'
    },
    {
        word: 'feather',
        hint: 'Hair like outer covering of Bird '
    },
    {
        word: 'position',
        hint: 'Location of someone or something'
    },
    {
        word: 'garden',
        hint: 'Space for planting flower and plant'
    },
    {
        word: 'canvas',
        hint: 'Piece of fabric for oil painting'
    },
    {
        word: 'addition',
        hint: 'The process of adding numbers'
    },
    {
        word: 'meeting',
        hint: 'Event in which people come together'
    },
    {
        word: 'number',
        hint: 'Math symbol used for counting'
    },
    {
        word: 'expansion',
        hint: 'The process of increase or grow'
    },
    {
        word: 'country',
        hint: 'A politically identified region '
    },
    {
        word: 'group',
        hint: 'A number of objects or person'
    },
    {
        word: 'taste',
        hint: 'Ability of tongue to detect flavour'
    },
    {
        word: 'store',
        hint: 'Large shop where goods are traded'
    },
    {
        word: 'field',
        hint: 'Area of land for farming activities'
    },
    {
        word: 'friend',
        hint: 'person other than family member'
    },
]

const wordText = document.querySelector('.word');
hintText = document.querySelector('.hint span');
timeText = document.querySelector('.time b');
inputField = document.querySelector('input');
refreshButton = document.querySelector('.refresh-word');
checkButton = document.querySelector('.check-word');

let correctWord, timer;

const initTimer = ()=> {
    clearInterval(timer);
    timer = setInterval(() =>{
        if (maxTime > 0){
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert('time up! ${correctWord.toUpperCase()} was the correct word');
        initGame();

    }, 1000)
}


const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split('');
    for (let i = wordArray.length =1; 1 > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] =  [wordArray[j], wordArray[i]]; 
    }

    wordText.innerText = wordArray.join('');
    hintText.innerText = randomObj.hint('');
    correctWord = randomObj.word.toLowerCase();
    inputField.value = '';
    inputField.setAttribute('maxlength', correctWord.length);
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocalelowerCase();
    if (!userWord)   
    return alert('please enter a word check');
    if (userWord !== correctWord) 
    return alert('oops! ${userWord} is not a correct word');
    alert('Congrats! ${userWord.toUpperCase()} is a correct word');

    initGame();

}
refreshButton.addEventListener('click', initGame)
checkButton.addEventListener('click', checkWord)