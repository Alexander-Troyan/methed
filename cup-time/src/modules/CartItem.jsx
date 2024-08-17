export const CartItem = ({ data }) => (
    <li className="cart-item">
        <img className="cart-item__img" src={data.image} alt={data.title}></img>

        <div className="cart-item__info">
            <h3 className="cart-item__title">{data.title}</h3>
            <div className="cart-item__quantity">
                <button className="cart-item__quantity-button cart-item__quantity-button_minus"></button>
                <input type="number" className="cart-item__quantity-input" value={1}></input>
                <button className="cart-item__quantity-button cart-item__quantity-button_plus"></button>
            </div>
            <p className="cart-item__price">{data.price}&nbsp;₽</p>
        </div>
    </li>
)