import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import "./BotCollection2.css"


function BotCollection2({item}) {
    function handleClick (id) {
        fetch (`http://localhost:3000/bots/${id}`)
        .then (res => res.json())
        .then (data => console.log(data))
    }

    // assign the items an icon based on their classes
    return (
        <div className= "card-container">
           
        <div>
            <div className="card" onClick = {()=> handleClick (item.id)} >
                <img src={item.avatar_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1> {item.name} </h1>
                    <p className="card-text">
                        {item.catchphrase}
                    </p>
                    <p className="card-text">
                    <i class="fa-solid fa-heart"></i> {item.health} <i class="fa-solid fa-bolt"></i> {item.damage} <i class="fa-solid fa-shield-halved"></i> {item.armor}
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default BotCollection2