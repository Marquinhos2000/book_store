export default function Book ({book, addToCart}) {

    const { name, image, description, price } = book

    return (
        <div className="productContainerMain">
            <div className="productContainer">

                <div className="productImgContainer">
                    <img className="productImg" src = "/book1.png" alt="Imagen del libro"/>
                </div>

                <div className="productData">
                    <h3 className="productName"> {name} </h3>
                    <p className="productDescription"> {description} </p>
                    <p className="productPrice"> ${price} </p>
                </div>
            </div>
            <button type="button" className="addProductBtn" onClick={() => addToCart(book)}> AGREGAR AL CARRITO </button>
        </div>
    )
}