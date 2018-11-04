window.onload = () => {
    // declare all my variables
    const CHOICES = ['r', 'p', 's'];
    const clickymabob = document.querySelector('.start > button');
    const playAgain = document.querySelector('.result > button');
    const gogogo = document.querySelector('.prompt > button');
    const first = document.querySelector('.start');
    const second = document.querySelector('.prompt');
    const third = document.querySelector('.result');
    const textBox = document.querySelector('input');
    const resultHeader = document.querySelector('.result > h1')
    let randomNumber;
    let computerChoice;
    let resultText;
    
    // on click the game starts
    // addEventListener took some research to make sure it was done right, also debugging
    clickymabob.addEventListener('click', displayStart);
    gogogo.addEventListener('click', () => evaluateChoice(textBox.value));
    playAgain.addEventListener('click', displayStart);
    
    function displayStart() {
        first.className +=  ' unseen';
        second.className = 'prompt seen';
        third.className = 'result unseen'
    } 
        
    function evaluateChoice(choose) {
        // i google javascript random number finding and reviewing https://www.w3schools.com/js/js_random.asp
        randomNumber = Math.floor(Math.random() * (2 - 0 + 1) );
        computerChoice = CHOICES[randomNumber];
        second.className = 'prompt unseen';
        third.classList += 'result seen';
    
        switch (choose.charAt(0).toLowerCase()) {
            case 'r':
                if ( computerChoice === 'r' ) {
                    resultText = 'you chose rock, the computer chose rock. TIE!';
                } else if ( computerChoice === 'p' ) {
                    resultText = 'you chose rock, the computer chose paper. YOU LOSE';
                } else {
                    resultText = 'you chose rock, the computer chose scissors. YOU WIN!!!';
                }
                break;
            case 'p':
                if ( computerChoice === 'p' ) {
                    resultText = 'you chose paper, the computer chose paper. TIE!';
                } else if ( computerChoice === 's' ) {
                    resultText = 'you chose paper, the computer chose scissors. YOU LOSE';
                } else {
                    resultText = 'you chose paper, the computer chose rock. YOU WIN!!!';
                }
                break;
            case 's':
                if ( computerChoice === 's' ) {
                    resultText = 'you chose scissors, the computer chose scissors. TIE!';
                } else if ( computerChoice === 'r' ) {
                    resultText = 'you chose scissors, the computer chose rock. YOU LOSE';
                } else {
                    resultText = 'you chose scissors, the computer chose paper. YOU WIN!!!';
                }
                break;
        
            default:
                alert('what exactly are you trying to do? reload a try again.');
                break;
        }
    
        resultHeader.innerHTML = resultText;
        textBox.value = '';
    }
}