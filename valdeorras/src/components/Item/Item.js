


const Item = ({data}) => {
    const {title, image, price} = data
    return(
        <div className= "item-product">
            <img src={`/assets/Products/${image}`} alt= "Imagen Producto"/>
            <div className='product-details'>
                <p>{title}</p>
                <span>${price}</span>
                <button className='boton'>Mas Informacion</button>
                
            </div>
        </div>
    )
}
export default Item