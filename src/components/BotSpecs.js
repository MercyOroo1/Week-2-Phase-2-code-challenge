import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import YourBotArmy from './YourBotArmy';


function BotSpecs() {
    const [bot, setBot] = useState({});
    const params = useParams();
    const botId = params.id;

    useEffect(() =>{
        fetch(`http://localhost:3000/bots/${botId}`)
        .then(r => r.json())
        .then(data => setBot(data))
        .catch(error => console.error(error));
      }, [botId]);

      if(!bot.name){
        return <h1>Loading...</h1>;
      };

  return (
    <div>
        <YourBotArmy />
        <img src ={bot.avatar_url} alt = "bot avatar"/>
        <p> {bot.name}</p>
        <p>{bot.catchphrase}</p>
        <p> Class : {bot.bot_class}</p>
         <p className="card-text">
                    <i className="fa-solid fa-heart"></i> {bot.health} <i className="fa-solid fa-bolt"></i> {bot.damage} <i className="fa-solid fa-shield-halved"></i> {bot.armor}</p>
        <Link to="/" className="btn btn-primary">Go Back</Link>
        <button className='enlist-btn'> Enlist </button>
    </div>
  )
}

export default BotSpecs