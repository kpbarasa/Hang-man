import React, { useEffect, useState } from 'react';
import { checkWin } from '../helpers/helpers';

function PopUp({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain, setFullWord}){
  
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let checkFullWord = '';
  let fullWord = '';
  let playable = true;

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Congratulations! You won! 😃';
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });
    return (
        // <!-- Container for final message -->
        <div className={`popup-container  ${checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ? 'd-flex' : ''}  ${checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ? 'd-flex' : ''}`} id="popup-container">
          <div className="popup">
            <h2 id="final-message">{finalMessage}</h2>
            <h3 id="final-message-reveal-word">{finalMessageRevealWord}</h3>
            <button id="play-button" className="btn-hint" onClick={() => playAgain()}>Play Again</button>
          </div>
        </div>
    )
}

export default PopUp
