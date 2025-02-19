import { CiApple } from "react-icons/ci";
import "./index.css"

/*
const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

export default function Password({ isValid }) {
    return isValid ? <ValidPassword /> : <InvalidPassword />
}

*/

/*
const Cart = () => {
    const items = ['Wireless Earbuds', "Power Bank", "New SSD", "Hoddie"];

    return (
        <>
            <h1>Cart</h1>

            {items.length > 0 && <h2>YOu have {items.length} items in your cart.</h2>}

            <ul>
                <h4>Products</h4>
                {items.map(item => (
                    <li key={Math.random()}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Cart
*/

/*
export function Weather({ temperature }) {
    if (temperature < 15) {
        return <p>It's cold outside!</p>
    } else if (temperature >= 15 && temperature <= 25) {
        return <p>It's nice outside!</p>
    } else {
        return <p>It's hot outside!</p>
    }
}
*/

/*
export function UserStatus({ loggedIn, isAdmin }) {
    if (loggedIn && isAdmin) {
        return <h1>Welcome Admin</h1>
    }

    return <h1>Welcome user</h1>
}
*/


/*
export function StyledCard() {
    return (
        <div style={{ backgroundColor: "lightblue", padding: "20px", borderRadius: "10px", color: "darkblue" }}>
            <h1><CiApple size={80} color="gold" />           </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quae dolorem earum? Reprehenderit similique fugit quod minus expedita? Perspiciatis, ducimus. Quis ut animi veniam voluptates fugiat quos quisquam tenetur dolore.</p>
        </div>
    )
}

*/


/*
export function Button() {
    const handleClick = () => console.log(Math.round(Math.random() * 10));
    return <button onClick={handleClick}>Click</button>
}
*/ 

// STATE

/* 
import React, { useState } from 'react'

export default function App() {

  const [count, setCount] = useState(0)

  const incrementCount = () => setCount(count + 1)
  const decrementCount = () => setCount(count - 1)

  return (
    <div className="">
      <h1>App - {count}</h1>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  )
}

*/ 

/*
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

*/ 

/*
import { useState } from 'react'

export default function App() {

  const [input, setInput] = useState('')

  const [movies, setMovies] = useState(
    [
      { id: 1, title: 'Spiderman', rating: 5 },
      { id: 2, title: 'batman', rating: 3 },
      { id: 3, title: 'Life is good', rating: 7 }
    ]
  )

  const handleInputChange = (e) => setInput(e.target.value)

  const handleAddMovie = () => {
    if (input.trim() !== '') {

      const initalMovie = {
        id: Math.round(Math.random() * 10),
        title: input.trim(),
        rating: 1
      }

      setMovies([...movies, initalMovie])
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
              <li key={movie.id}>
                <span>{movie.title} - {movie.rating}</span>
                <button onClick={() => handleRemoveMovie(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )
      }
    </div >
  )
}
*/ 

