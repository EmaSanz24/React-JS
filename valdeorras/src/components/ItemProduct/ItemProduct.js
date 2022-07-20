import './ItemProduct.scss'

const ItemProduct = ({title, price, image}) => {

    return(
        <div className= "item-product">
            <img src={`/assets/Products/${image}`} alt= "Imagen Producto"/>
            <div>
                <p>{title}</p>
                <span>${price}</span>
                <button className='boton'>Comprar</button>
            </div>
        </div>
    )
}
export default ItemProduct