import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import "./BotCollection2.css"



function BotCollection2({item, onAddItem}) {

     

    function handleClick () {
       onAddItem (item)
    }

    // assign the items an icon based on their classes
    return (
        <div>
        <div className= "card-container">
                    <div>
           
            <div className="card" onClick = {handleClick} >
                <img src={item.avatar_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1> {item.name} </h1>
                    <p className="card-text">
                        {item.catchphrase}
                    </p>
                    <p className="card-text">
                    <i className="fa-solid fa-heart"></i> {item.health} <i className="fa-solid fa-bolt"></i> {item.damage} <i className="fa-solid fa-shield-halved"></i> {item.armor}
                    </p>
                </div>
            </div>
            <button> View Details </button>
        </div>
        </div>
        </div>
    )
}

export default BotCollection2
