/*
const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

export default function Password({ isValid }) {
    return isValid ? <ValidPassword /> : <InvalidPassword />
}

*/

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