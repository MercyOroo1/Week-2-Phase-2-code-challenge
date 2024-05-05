import React from 'react'

function Filter({onClassChange}) {
    function handleChange (event) {
        onClassChange(event.target.value)
    }
  return (
    <div>
        <label>Category</label>
        <select onChange = {handleChange}> 
        <option value = "All"> All</option>
            <option value = "Support"> Support</option>
            <option value = "Medic"> Medic</option>
            <option value = "Assault"> Assault</option>
            <option value = "Defender"> Defender</option>
            <option value = "Captain">  Captain</option>
            <option value = "Witch">  Witch</option>
        </select>
    </div>
  )
}

export default Filter