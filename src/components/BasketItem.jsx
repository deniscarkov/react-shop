function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incrementQuantity = Function.prototype,
        decrementQuantity = Function.prototype,
    } = props;

    return (
        <li className='collection-item'>
            {name} x
            <i
                className='material-icons basket-quantity'
                onClick={() => decrementQuantity(id)}
            >
                remove
            </i>
            {quantity}
            <i
                className='material-icons basket-quantity'
                onClick={() => incrementQuantity(id)}
            >
                add
            </i>
            ={price.regularPrice * quantity} руб.
            <span
                className='secondary-content'
                onClick={() => removeFromBasket(id)}
            >
                <i className='material-icons basket-delete'>clear</i>
            </span>
        </li>
    );
}

export { BasketItem };
