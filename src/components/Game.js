import React, {useState} from 'react';

const boxes      = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const winOptions = ['brownie', 'garlic flat bread', 'pizza'];

const Game = (props) => {
    const [competition, setcompetition] = useState(false);
    const [winningBox, setwinningBox]   = useState(false)
    const [winningItem, setwinningItem] = useState(false)

    const boxClicked = (e) => {
        let userSelect  = parseInt(e.currentTarget.querySelector('span').textContent);
        const randomBox = Math.floor(Math.random() * boxes.length);

        console.log(userSelect, randomBox)
        
        if (userSelect === randomBox + 1) {
            console.log('user selected winning box!');

        }

        setwinningBox(boxes[randomBox]);
        setwinningItem(winOptions[Math.floor(Math.random() * winOptions.length)]);
        setcompetition(true);
    }

    return (
        <div className='gameCont'>
            <h4>Before you leave us, how about a chance to win something free from our menu?!</h4>
            <p>Underneath one of these 10 boxes is a free gift of either <span className='winOption'>a brownie</span>, <span className='winOption'>garlic flat bread</span>, or <span className='winOption'>a pizza of your chosing</span>. Choose your box to see if you a winner!</p>
            <div className='divFlex'>
                {boxes.map((box, index) => {
                    if(competition){
                        if (competition & parseInt(winningBox) === index +1){
                            return <div className={'gameBox'} key={box} onClick={boxClicked} style={{background:'transparent', color:'black', border: '3px solid #a3bd5c'}}><span id='winner'>{winningItem}</span></div>
                        }
                        else{
                            return <div className={'gameBox'} key={box} onClick={boxClicked} style={{background:'transparent', color:'black'}}><span>{box}</span></div>
                        }
                    }
                    return <div className={'gameBox'} key={box} onClick={boxClicked}><span>{box}</span></div>
                }
                    
                )}
            </div>
        </div>
    );
};

export default Game;