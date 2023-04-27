import React, { useState } from 'react'

const SearchBar = (data) => {
  const [searchInput, setSearchInput] = useState('')
  const [selectedFood, setSelectedFood] = useState(null)
  
  console.log(data);
  const food = [
    { name: 'food1', origin: 'Europe' },
    { name: 'food2', origin: 'Asia' },
    { name: 'food3', origin: 'Europe' },
    { name: 'food4', origin: 'Asia' }
  ]

  const handleChange = e => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }

  const handleFoodClick = food => {
    setSelectedFood(food)
    setSearchInput(food.name)
  }

  let filteredFood = []
  if (searchInput.length > 0) {
    filteredFood = food.filter(country => {
      return country.name.match(searchInput)
    })
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

      {filteredFood.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Origin</th>
            </tr>
          </thead>

          <tbody>
            {filteredFood.map((food, index) => (
              <tr
              style={{ cursor: 'pointer', ':hover': {textDecoration: 'underline' }}}

                key={index}
                onClick={() => handleFoodClick(food)}
              >
                <td>{food.name}</td>
                <td>{food.origin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedFood && <p>You selected {selectedFood.name}</p>}
    </div>
  )
}

export default SearchBar
