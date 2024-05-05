import React from 'react';
import "./YourBotArmy.css";

function YourBotArmy({bots = []}) {
  
  

  if (bots === null) {
    return <div>Loading...</div>;
  }

  console.log(bots)

  return (
    <div style={{ backgroundColor: "green" }} className='main'>
      <div className='container' style={{ width: '100%', height: '500px', backgroundColor: 'green' }}>
        {/* Map through the bots array and create list items for each bot */}
        {bots.map ((bot)=> (
           <div key = {bot.id} >
            <div className='card' style = {{width: 200}}>
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
