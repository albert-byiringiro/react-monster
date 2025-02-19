export default function MovieList({ movies, onRemoveHandler }) {
    const onHandlerRemoveMovie = (index) => () => onRemoveHandler(index); // Fix: Wrap in a function to prevent immediate execution

    return (
        <ul>
            {movies.map((movie, index) => (
                <li key={movie.id}>
                    <span>
                        {movie.title} - {movie.rating}
                    </span>
                    <button onClick={onHandlerRemoveMovie(index)}>Remove</button>
                </li>
            ))}
        </ul>
    );
}
