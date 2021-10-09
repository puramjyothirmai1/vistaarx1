import React, { useState } from 'react'
import data from './data.json'
import './Card.css'
//import {Button} from "react-bootstrap"
//import Card from '@mui/material/Card';
function Cards() {
    const [text,setText]=useState("connect");
    const changeText=(text)=>setText(text);
    return (
        <div className="card-container">
  
            {
           data.map(dat=>
           <>
            <div className="cards">
            <img src={dat.img}/>
                <h1>{dat.name}</h1>
<p>{dat.email}</p>
<button onClick={()=>changeText("request Sent")}>{text}</button>
</div>
</>
              )
}
        </div>
    )
}

export default Cards
