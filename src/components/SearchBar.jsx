import React, { useEffect, useState } from 'react'

const SearchBar = data => {
  const [searchInput, setSearchInput] = useState('')
  const [selectedFood, setSelectedFood] = useState(null)
  const [filteredFood, setFilteredFood] = useState([])
  const dataArray = Object.values(data)
  const names = dataArray[0].map(item => item.name)
  const uniqueNames = [...new Set(names)]
  const mergedData = uniqueNames.map(name => {
    const items = dataArray[0].filter(item => item.name === name)
    return Object.assign({}, ...items)
  })
  const food = mergedData.map(item => ({ name: item.name }))

  const handleChange = e => {
    setSearchInput(e.target.value)
  }

  const handleFoodClick = food => {
    setSelectedFood(food)
    setSearchInput(food.name)
  }

  useEffect(() => {
    if (searchInput.length > 0) {
      setFilteredFood(
        food.filter(food =>
          food.name.toLowerCase().match(searchInput.toLowerCase())
        )
      )
    } else {
      setFilteredFood([])
      setSelectedFood()
    }
  }, [searchInput])

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
                style={{
                  cursor: 'pointer',
                  ':hover': { textDecoration: 'underline' }
                }}
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
