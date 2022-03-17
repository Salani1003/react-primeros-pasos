/* import React, { Fragment } from "react";*/

import React from "react";
import PropTypes from "prop-types";
const PrimeraApp = ({
  saludo,
  subtitulo = "Esta es mi primera aplicacion de React",
  subtitulo2,
}) => {
  /* Puedo enviar Strings, numeros, arreglos (concatena el arreglo), en caso de querer enviar un objeto tengo que poner JSON.Stringify(saludo) */
  /* Puedo poner un valor por defecto a las props igualandola a algo como siempre en JS */
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
      <p>{subtitulo2}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};
PrimeraApp.defaultProps = {
  subtitulo2: "Soy el Subtitulo 2", /// otra manera de mandar una prop por defecto
};
export default PrimeraApp;
