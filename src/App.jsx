import { useState } from 'react';
import './App.css'
import Book from './components/Book'
import Header from './components/Header'
import { db } from './data/db';

function App() {

  const [data] = useState(db)
  const [cart, setCart] = useState([])

  const maxItems = 5
  const minItems = 1

  function addToCart(item) {
    const itemExists = cart.findIndex(book => book.id === item.id)

    if (itemExists >= 0) {
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity++

    } else {
      item.quantity = 1
      setCart([...cart, item])
    }
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > minItems) {
        return {
          ...item, quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity < maxItems) {
        return {
          ...item, quantity: item.quantity + 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  function removeFromCart(id) {
    setCart(prevCart => prevCart.filter(book => book.id != id))
  }

  function clearCart() {
    setCart([])
  }

  return (
    <>

      <Header
        cart={cart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />

      <main className='mainContainer'>
        <h2> All our available products </h2>

        <div className='productsList'>
          {data.map((book) => (
            <Book
              key={book.id}
              book={book}
              cart={cart}
              addToCart={addToCart}
            />
          ))}
        </div>

      </main>

      <footer className="footer">
        <div className="footer-section">
          <h3> <span className='footer-fp'> MiniStore </span> <span className='footer-sp'> Marquinhos </span> </h3>
          <p> Tienda online de libros. Explora, elige y recibe en casa</p>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p> Ciudad de los Libros, Biblioteca Central</p>
          <p> +503 7000 0000</p>
          <p> contacto@ministore.com</p>
        </div>
      </footer>
    </>
  )
}

export default App