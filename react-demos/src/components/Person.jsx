export default function Person({ pid, name, age }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <small>{pid}</small>
        </div>
    )
}
