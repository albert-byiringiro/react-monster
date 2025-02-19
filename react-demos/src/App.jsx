import { useState } from 'react';
import MovieList from './components/MovieList';

export default function App() {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([
    { id: 1, title: 'Spiderman', rating: 5 },
    { id: 2, title: 'batman', rating: 3 },
    { id: 3, title: 'Life is good', rating: 7 },
  ]);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleAddMovie = () => {
    if (input.trim() !== '') {
      const initalMovie = {
        id: Math.round(Math.random() * 10),
        title: input.trim(),
        rating: 1,
      };

      setMovies([...movies, initalMovie]);
      setInput('');
    }
  };

  const handleRemoveMovie = (indexToRemove) => {
    setMovies(movies.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter movie title"
      />
      <button onClick={handleAddMovie} disabled={!input.trim()}>
        Add Movie
      </button>
      {movies.length === 0 ? (
        <p>No movies in the list</p>
      ) : (
        <MovieList movies={movies} onRemoveHandler={handleRemoveMovie} />
      )}
    </div>
  );
}
