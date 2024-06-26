import React, { useState, useEffect } from 'react';
import BotCollection2 from './BotCollection2';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './BotSpecs';
import SortBar from './SortBar';
import Filter from './Filter';

function BotCollection() {
  const [data, setData] = useState([])
  const [clickedItems, setClickedItems] = useState([])
  const [sortBy, setSortBy] = useState('damage')
  const [selectedClass, setSelectedClass] = useState('All')
  const [enlistedBots, setEnlistedBots] = useState ([])

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  function handleEnlistedBots (item) {
  //  if (!enlistedBots.find (bot => bot.id === item.id)) {
    setEnlistedBots ([...enlistedBots, item])
  //  }
 }
  const handleClick = (item) => {
    if (!clickedItems.find(bot => bot.id === item.id)) {
      setClickedItems([...clickedItems, item]);
    }
  }

  const handleDeleteItem = (botID) => {
    setData(prevItems => prevItems.filter(bot => bot.id !== botID))
  }

  const handleRemoveItem = (botID) => {
    setClickedItems(prevItems => prevItems.filter(bot => bot.id !== botID))
  }

 

  const handleSort = (criteria) => {
    setSortBy(criteria)
  }

  const handleClassChange = (category) => {
    setSelectedClass(category)
  }

  // Filtering and sorting bots
  const filteredData = data.filter((bot) => selectedClass === 'All' || bot.bot_class === selectedClass);
  const sortedData = [...filteredData].sort((a, b) => a[sortBy] - b[sortBy])

 
  return (
    <div>
      <YourBotArmy bots={clickedItems} onRemoveItem={handleRemoveItem}  onDeleteItem = {handleDeleteItem} />
      <SortBar onSort={handleSort} />
      <Filter onClassChange={handleClassChange} />
      {sortedData.map(item => (
        <BotCollection2 key={item.id} item={item} onAddItem={handleClick} />
      ))}
      <BotSpecs onenlistedBots = {handleEnlistedBots}/>
    </div>
  );
}

export default BotCollection;
