import React, { useState } from 'react'
import data from './data.json'
import './Card.css'
function Cards() {
    const [text, setText] = useState("connect");
    const changeText = (text) => setText(text);
    const remove = (id) => {
        alert("removig" + id);
    }

    return (
        <div className="card-container" >

            {
                data.map(dat =>
                    <>

                        <div className="cards">
                            <button onClick={() => remove(dat.id)}>remove {dat.id} </button>

                            <img src={dat.img} />
                            <h1>{dat.name}</h1>
                            <p>{dat.email}</p>
                            <button onClick={() => changeText("request Sent")}>{text}</button>

                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Cards;
