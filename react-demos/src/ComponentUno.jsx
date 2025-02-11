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

export function UserStatus({ loggedIn, isAdmin }) {
    if (loggedIn && isAdmin) {
        return <h1>Welcome Admin</h1>
    }

    return <h1>Welcome user</h1>
}