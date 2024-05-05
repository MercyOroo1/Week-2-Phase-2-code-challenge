import React from 'react';
import "./YourBotArmy.css";

function YourBotArmy({bots = [], onRemoveItem}) {
  
  

  if (bots === null) {
    return <div>Loading...</div>;
  }

  function handleRemoveBot (id) {
    onRemoveItem(id)
  }

  function handleDeleteBot (id) {
   fetch (`http://localhost:3000/bots/${id}`, {
    method : "DELETE",
    headers : {
      "Content-Type": "application/json",
    },
   })
   .then (res => res.json())
   .then (()=> onRemoveItem (id))
  }

  return (
    <div style={{ backgroundColor: "green" }} className='main'>
      <div className='container' style={{ width: '100%', height: '500px', backgroundColor: 'green' }}>
        {bots.map ((bot)=> (
           <div key = {bot.id} >
             <button className = "deletebtn" onClick = {()=> handleDeleteBot(bot.id)}>x</button>
            <div className='card' style = {{width: 200}} onClick = {()=> handleRemoveBot(bot.id)}>
            <img src={bot.avatar_url} className="card-img-top" alt="..." style = {{width: 200}}/>
            <div className="card-body">
            <h1> {bot.name} </h1>
            <p className="card-text">
                        {bot.catchphrase}
                    </p>
                    <p className="card-text">
                    <i className="fa-solid fa-heart"></i> {bot.health} <i className="fa-solid fa-bolt"></i> {bot.damage} <i className="fa-solid fa-shield-halved"></i> {bot.armor}
                    </p>
              </div>

              </div>
            </div>
        ))}
        
      </div>
    </div>
  );
}

export default YourBotArmy;
