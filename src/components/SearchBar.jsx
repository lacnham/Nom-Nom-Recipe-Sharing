import React, { useState } from 'react'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')

  const food = [
    { name: 'food1', origin: 'Europe' },
    { name: 'food2', origin: 'Asia' }
  ]

  const handleChange = e => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }

  if (searchInput.length > 0) {
    food.filter(country => {
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

      <table>
        <tr>
          <th>Name</th>
          <th>Origin</th>
        </tr>

        {food.map((food, index) => {
          <div>
            <tr>
              <td>{food.name}</td>
              <td>{food.origin}</td>
            </tr>
          </div>
        })}
      </table>
    </div>
  )
}

export default SearchBar
