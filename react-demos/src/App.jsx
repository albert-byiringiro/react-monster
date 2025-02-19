import React, { useState } from 'react'

export default function App() {

  const [input, setInput] = useState('')

  const [movies, setMovies] = useState([
    'Spiderman',
    'batman',
    'Life is good'
  ])

  const handleInputChange = (e) => setInput(e.target.value)

  const handleAddMovie = () => {
    if (input.trim() !== '') {
      setMovies([...movies, input.trim()])
      setInput('')
    }
  }

  const handleRemoveMovie = (indexToRemove) => {
    setMovies(movies.filter((_, index) => index !== indexToRemove))
  }

  return (
    <div className="">
      <input type="text" value={input} onChange={handleInputChange} placeholder='Enter movie title' />
      <button onClick={handleAddMovie} disabled={!input.trim()}>Add Movie</button>
      {
        movies.length === 0 ? (
          <p>No movies in the list</p>
        ) : (
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>
                {movie}
                <button onClick={() => handleRemoveMovie(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )
      }
    </div >
  )
}
