import './App.css';
import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from'./components/Header';
import Figure from'./components/Figure';
import WrongLetters from'./components/WrongLetters';
import Word from'./components/Word';
import PopUp from './components/PopUp';
import Notification from'./components/Notification'; 
import Hint from'./components/Hint'; 
import { showNotification as show, checkWin } from './helpers/helpers';


const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;


let hint =['application, ', 'programming, ', 'interface, ', 'wizard '];

// const correctLetters = [];
// const wrongLetters = [];

function App() {

  const [payable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]) 
  const [wrongLetters, setWrongLetters] = useState([])
  const [showNotification, setShowNotification] = useState(false);
  const [hintText, setHintText] = useState('');
  const [showHint, setShowHint] = useState("d-none");

  useEffect(() => { 
    const handleKeydown = event => {
      const { key, keyCode} = event; 
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
    
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter]); 
    
            } else {
              
              show(setShowNotification);

            }
          }
          else {
            if (!wrongLetters.includes(letter)) {
             
              setWrongLetters(currentLetters => [...currentLetters, letter]);
    
              // updateWrongLettersEl();
            } else {

              show(setShowNotification);

            }
          }
        } 
      
    }
    
    // Keydown letter press
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown); 

  }, [correctLetters, wrongLetters, playable]);
  
  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }
  


  return (
    <div className=" container">  
    <div className="App col-lg-6 col-md-6 col-sm-12 col-12"> 
      <Header selectedWord={selectedWord} />
      <div className="game-container">
         
        <WrongLetters wrongLetters={wrongLetters} /> 

        <Figure wrongLetters={wrongLetters} />

        {/* // Show hidden word */}
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />

        <Notification showNotification={showNotification} />
        <center> 
        <PopUp correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
        </center>
      </div> 
        <Hint selectedWord={selectedWord} hintText={hintText} setHintText={setHintText} showHint={showHint} setShowHint={setShowHint} />
    </div> 
    </div>
  );
}

export default App;
