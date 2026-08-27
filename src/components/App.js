import React, { useState } from 'react'

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]

const App = () => {
  const [search, setSearch] = useState("")
  const [suggestions, setSuggestions] = useState(fruits)

  const handleChange = (e) => {
    const value = e.target.value
    setSearch(value)

    setTimeout(() => {
      const filteredFruits = fruits.filter((fruit) =>
        fruit.toLowerCase().includes(value.toLowerCase())
      )

      setSuggestions(filteredFruits)
    }, 300)
  }

  return (
    <div id="main">
      <input
        type="text"
        value={search}
        onChange={handleChange}
      />

      <ul>
        {suggestions.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

export default App