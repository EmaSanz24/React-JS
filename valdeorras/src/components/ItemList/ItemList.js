import Item from '../Item/Item'

const ItemList = ({items}) => {
    //console.log(items)
    return(
        <>
            {items.map((product)=>{
                
                return <Item key={product.id} data={product}/>
            })}
        </>
    )
}

export default ItemList