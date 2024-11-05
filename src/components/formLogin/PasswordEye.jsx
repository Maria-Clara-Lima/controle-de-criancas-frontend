/* eslint-disable no-unused-vars */

/*useState permite criação de variaveis de estado */
import React, { useState } from 'react';

function PassWordEye() {

    const [SenhaVisivel, setSenhaVisivel] = useState(false);

    setSenhaVisivel(!SenhaVisivel);

    if(SenhaVisivel == true) {
       <input type="text" /> 
    } else {
        <input type= "password" />
    }



}





export default PassWordEye