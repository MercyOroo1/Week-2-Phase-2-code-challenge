import React from 'react'

function YourBotArmy2({enlistedBots}) {
  return (
    <div>
        <div style={{ backgroundColor: "green" }} className='main'>
      <div className='container' style={{ width: '100%', height: '500px', backgroundColor: 'green' }}>
      
           <div key = {enlistedBots.id} >
            
            <div className='card' style = {{width: 200}} >
            <img src={enlistedBots.avatar_url} className="card-img-top" alt="..." style = {{width: 200}}/>
            <div className="card-body">
            <h1> {enlistedBots.name} </h1>
            <p className="card-text">
                        {enlistedBots.catchphrase}
                    </p>
                    <p className="card-text">
                    <i className="fa-solid fa-heart"></i> {enlistedBots.health} <i className="fa-solid fa-bolt"></i> {enlistedBots.damage} <i className="fa-solid fa-shield-halved"></i> {enlistedBots.armor}
                    </p>
              </div>

              </div>
            </div>
        
        
      </div>
      <div>
      </div>
    </div>
    </div>
  )
}

export default YourBotArmy2