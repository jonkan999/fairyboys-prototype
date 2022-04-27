
import React from 'react';
import Wheel from './Wheel'
import BasicForm from './BasicForm'
import {useState} from 'react';


const App = () => {
    var [startGame, setStartGame] = useState(false);
    var [Values, setValues] = useState({
        business: '',
        email: ''
      });

    if (startGame === false) {
        return (
        
            <div>
                <BasicForm  newValues = {setValues} startInd = {setStartGame}/>
            </div>
        );
    } else {
        console.log((Values))
        return (
        
            <div>
                <Wheel submitValues = {Values}/>
            </div>
        );

    }
}

export default App;



