import './ItemProduct.scss'
import ItemCount from '../ItemCount/ItemCount'

const ItemProduct = ({title, price, image, stock}) => {

    return(
        <div className= "item-product">
            <img src={`/assets/Products/${image}`} alt= "Imagen Producto"/>
            <div className='product-details'>
                <p>{title}</p>
                <span>${price}</span>
                <ItemCount stock={stock} initial={1}/>
                <button className='boton'>Comprar</button>
                
            </div>
        </div>
    )
}
export default ItemProduct