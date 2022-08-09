import ItemDetail from "../ItemDetail/ItemDetail"
import products from '../../utils/products.mock'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ()=> {
    
    const [productDetail, setProductDetail] = useState({})
    const { Id } = useParams() 
    useEffect( ()=> {
        filterById(Id)
    }, [Id])

    const filterById = (id) => {
        products.some( (product) => {
            if(product.id == id) {
                setProductDetail(product)
            }
    })}
    return(
        <div>             
            <ItemDetail data={productDetail}/>    
        </div>  
    )
}

export default ItemDetailContainer