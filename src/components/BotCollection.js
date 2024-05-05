import React, {useState , useEffect} from 'react'
// import "./BotCollection.css"
import BotCollection2 from './BotCollection2'
import YourBotArmy from "./YourBotArmy"

function BotCollection() {
    const [data, setData] = useState ([])

useEffect (()=> {
    fetch ("http://localhost:3000/bots")
    .then (res => res.json())
    .then (data => setData (data))
},[])

const [clickedItems, setClickedItems] = useState([]);

function handleClick (item) {
    if (!clickedItems.find(bot => bot.id === item.id)) {
        setClickedItems([...clickedItems, item])
    }

}


console.log (clickedItems)
  return (
    <div>
       <YourBotArmy bots = {clickedItems} />
      {data.map ((item)=> (
        <BotCollection2 key = {item.id} item = {item} onAddItem={handleClick}/>
       
      ))}
     
    </div>
  )
}

export default BotCollection