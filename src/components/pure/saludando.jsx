import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Saludando = (props) => {
    
    const [edad, setState] = useState(28)
    
    const incrementar = () => {
        setState(edad+1)
    }

    return (
        <div>
            <p>me llamo {props.nombre} y tengo {edad}</p>
            <button onClick={incrementar}>incrementar</button>  
        </div>
    );
};

Saludando.propTypes = {
    nombre: PropTypes.string,
};

export default Saludando;

