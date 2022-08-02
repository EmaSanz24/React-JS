import './ItemDetail.scss'



const ItemDetail = ({data}) => {
    
    const {title, image, price, description, stock} = data
    return(
        <>
        <h1>Item Detail</h1>
        <div className = "Item-Detail">
            <img src={`/assets/Products/${image}`}/>
            <div className = "Item-Info">
                <h2>{title}</h2>
                <p>{description}</p>
                <div>
                <span>${price}</span>
                </div>

            </div>
        </div>
        </>
        
    )
}

export default ItemDetail