import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ({Item})=> {
    
    return(
        <div>
             {Item.map((product)=>{
                return <ItemDetail key={product.id} data={product}/>
            })}
        </div>  
    )
}

export default ItemDetailContainer