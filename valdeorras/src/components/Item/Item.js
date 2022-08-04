import { Link } from 'react-router-dom'
const Item = ({data}) => {
    const {title, image, price, id, type, category} = data
    return(
        <div className= "item-product">
            <img src={`/assets/Products/${image}`} alt= "Imagen Producto"/>
            <div className='product-details'>
                <p>{title}</p>
                <span>${price}</span>
                <Link to= {`/products/${category}/${type}/${id}`}><button className='more-info'>Mas Informacion</button></Link>
                
            </div>
        </div>
    )
}
export default Item