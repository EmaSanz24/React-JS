import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import {useParams} from 'react-router-dom'
import products from '../utils/products.mock'
import {useEffect, useState} from 'react'

const Category = () => {

    return(
        <div className="container">
            <ItemListContainer/>
        </div>
    )
}
export default Category