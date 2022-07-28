'use strict';

//selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector("#score--1");
const dice1 = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const current0 = document.querySelector('.current-score-0');
const current1 = document.querySelector('.current-score-1');

//Starting conditions
let scores = [0, 0]
score0.textContent = 0;
score1.textContent = 0;
let currentscore = 0;
let activeplayer = 0;
let playing = true;

function switchplayer() {
    document.querySelector(`#current--${activeplayer}`).textContent = 0;
    currentscore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}
//dice1.classlist.add('hidden');


//Rolll=ing Dice functionality
btnroll.addEventListener('click', function () {
    //1 generating random number
    if (playing) {
        let ranz = Math.trunc(Math.random() * 6) + 1;

        //display dice
        dice1.classList.remove('hidden');
        dice1.src = `dice-${ranz}.png`;

        //check for rolled 1:
        if (ranz !== 1) {
            //Add dice to current score
            currentscore = currentscore + ranz;
            document.querySelector(`#current--${activeplayer}`).textContent = currentscore
        } else {
            //switch to next player
            // document.querySelector(`#current--${activeplayer}`).textContent = 0;
            // currentscore = 0;
            // activeplayer = activeplayer === 0 ? 1 : 0;
            // player0.classList.toggle('player--active')
            // player1.classList.toggle('player--active')
            switchplayer();
        }
    }
});
btnhold.addEventListener('click', function () {
    if (playing) {
        //add current score to active player score
        scores[activeplayer] = scores[activeplayer] + currentscore;
        document.querySelector(`#score--${activeplayer}`).textContent = scores[activeplayer];


        //check if players score is >=100

        if (scores[activeplayer] >= 10) {
            //if score is>=100 finish the game
            playing = false;
            dice1.classList.add('hidden');

            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');


        } else {
            //else switch to next player
            switchplayer();
        }
    }

})

//resetting the game
btnnew.addEventListener('click', function () {
    // player0.textContent = 0;
    // player1.textContent = 0;
    currentscore = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    // player0.classList.remove('player--winner')
    // player1.classList.remove('player--winner')
    // player0.classList.remove('player--active')
    // player1.classList.remove('player--active')
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activeplayer}`).classList.add('player--active');
    playing = true;
    scores = [0, 0];

})


