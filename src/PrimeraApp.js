//import React, { Fragment } from 'react';
import React from 'react';
import { PropTypes } from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {

    return(
        <>

            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>

        </>
       
    );

}
 PrimeraApp.propTypes = {
     saludo: PropTypes.string.isRequired //esta es la manera de obligar a los otros programadores de usar mi componente como lo digo
 }

PrimeraApp.defaultProps = {

    subtitulo:'Soy un subtitulo'
}

export default PrimeraApp;