import React, {useState , useEffect} from 'react'
// import "./BotCollection.css"
import BotCollection2 from './BotCollection2'
import YourBotArmy from './YourBotArmy'

function BotCollection() {
    const [data, setData] = useState ([])

useEffect (()=> {
    fetch ("http://localhost:3000/bots")
    .then (res => res.json())
    .then (data => setData (data))
},[])

const [botDetail , setBotDetail] = useState ([])

function handleAddItem (newBot) {
  setBotDetail([...botDetail, newBot])
}
  return (
    <div>
      {data.map ((item)=> (
        <BotCollection2 key = {item.id} item = {item}/>
       
      ))}
     
    </div>
  )
}

export default BotCollection