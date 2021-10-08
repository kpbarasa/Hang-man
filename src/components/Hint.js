import React from 'react' 


function Hint({selectedWord, hintText, setHintText, showHint, setShowHint}) {
    
    
    function hintOnclick(){
        setShowHint("d-flex");
        if(selectedWord == "programming"){ 
            setHintText("provide the computer a set of instructions that are written in a language that the computer can understand");
        }
        else if(selectedWord == "application"){ 
            setHintText("Downloaded onto mobile phones, it features algorithms based on factors like age, gender of user ");
        }
        else if(selectedWord == "interface"){ 
            setHintText("a point where two systems, subjects, organizations, etc. meet and interact or a device or program enabling a user to communicate with a computer.");
        }
        else if(selectedWord == "wizard"){ 
            setHintText("a man who has magical powers, especially in legends and fairy tales or a help feature of a software package that automates complex tasks by asking the user a series of easy-to-answer questions.");
        }
        setTimeout(() => {
            setShowHint("d-none");
        }, 4000);
    }
    return (
        <div className="hint-container">
            <span className="hint-btn-holder">
            <button className={`button-hint`} onClick={()=>hintOnclick()} type="button" title="Hint">&nbsp;<b>!</b>&nbsp;</button> Hint
            </span>
            <div className={`hint-card ${showHint}`}>
                {hintText} 
            </div>
        </div>
    )
}

export default Hint
