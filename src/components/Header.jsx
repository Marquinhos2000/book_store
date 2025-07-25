import { useMemo } from "react"
export default function Header ({cart, decreaseQuantity, increaseQuantity, removeFromCart, clearCart}) {

    const isEmpty = useMemo( () => cart.length === 0, [cart])
    const cartTotal = useMemo( () => cart.reduce( (total, item ) => total + (item.quantity * item.price), 0), [cart] )
    
    return (
        <header className="cmp-header">
            <div>
                <img className="navImg" src="/spinner.png" width={300} />
                <h1> Library Development </h1>
            </div>
            <div className="carritoWrapper">
                <div className="carritoImg-wrapper">
                    <img className="carritoImg" src="/carrito.png" alt="" />
                </div>
                <div className="carritoWrapper-table">
                    {isEmpty ? (
                        <p> El carrito está vacío </p>
                    ) : (
                        <>
                            <table className="carritoTable">
                                <thead>
                                    <tr>
                                        <th> Imagen </th>
                                        <th> Nombre </th>
                                        <th> Precio </th> 
                                        <th> Cantidad </th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(book => (
                                        <tr key={book.id}>
                                            <td> <img className="productImgCmp" src="../book1.png" alt="imagen"></img> </td>
                                            <td> {book.name} </td>
                                            <td> {book.price} </td>
                                            <td className="header-btn-container">
                                                <button className="manageQuantityBtn" onClick={() => decreaseQuantity(book.id)}> - </button>
                                                {book.quantity}
                                                <button className="manageQuantityBtn" onClick={() => increaseQuantity(book.id)}> + </button>
                                            </td>
                                            <td> <button className="deleteBookBtn" onClick={() => removeFromCart(book.id)}> x </button> </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                            <p> <b> Total a pagar: </b> <span> ${cartTotal} </span>  </p>
                        </>
                    )}
                    <button className="resetCart" onClick={clearCart}> VACIAR CARRITO </button>
                </div>
            </div>
        </header>
    )
}