import React from 'react'

function SortBar({onSort}) {

        function handleChange (event){
            onSort(event.target.value)

    }
  return (
    <div>
        <label> Sort Bots</label>
        <select onChange={handleChange}> 
            <option value="damage">
            Damage
            </option>
            <option value = "health">
                Health
            </option>
            <option value ="armor">
                Armor
            </option>
        </select>
    </div>
  )
}

export default SortBar
