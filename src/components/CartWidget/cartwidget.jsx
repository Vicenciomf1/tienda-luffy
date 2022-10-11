import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown }  from "@fortawesome/free-solid-svg-icons";
//import { render } from 'react-dom';

function Cartwidget(props){
  return (
    <div>
        <h1><FontAwesomeIcon icon={faCartArrowDown}/></h1>
    </div>
  )
}

export default Cartwidget;

