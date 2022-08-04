import {useEffect, useState} from "react"
import './ItemListContainer.scss'
import ItemProduct from "../ItemProduct/ItemProduct"
import products from '../../utils/products.mock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({info}) => {

    const [listProducts, setListProducts] = useState([])
    const [title, setTitle] = useState()
    const getProducts = new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve(products)
        },)
    })
    /*useEffect (()=> {
        getProducts
            .then((res)=>{
                setListProducts(res)
            })
    }, [])*/
    const {category, type} = useParams()

    let catFilt = []
    let typFilt = []
    useEffect(() => {
        filterByType()
        typeCheck()
        filterByCategory()
    },[type, category])

    const typeCheck = () =>{
        typeof type !== 'undefined' ? setTitle(type) : setTitle(category)
    }
    const filterByCategory = () => {
        catFilt = []
        products.map((product) => {
            if (product.category === category) {
                catFilt.push(product)
                setListProducts(catFilt)
            }
            else if (info === 'main'){
                setTitle("Productos Destacados")
                setListProducts(products)
                
            }
              
        })
    }
    const filterByType = () => {
        typFilt = []
        products.map((product) => {
            if (product.type === type) {
                typFilt.push(product)
                setListProducts(typFilt)
            }
        })
    }
    return(
        <div className= 'list-products'>
            <h2>{title}</h2>
                <div className='product-cards'>
                    <ItemList items={listProducts}/>                    
                </div>
                {/*
                    <div className='product-cards'>
                        <ItemProduct title='Remera "Jet" Love' price= {7500} image= {'Remera1.jpg'} stock={3}/>
                        <ItemProduct title='Remera "Classic" Naranja' price= {7800} image= {'Remera2.jpg'} stock={5}/>
                        <ItemProduct title='Buzo Canguro' price={18000} image={'Buzo1.jpg'} stock={7}/>
                        <ItemProduct title='Campera Canguro' price={21000} image={'Campera1.jpg'} stock={10}/>
                    </div>
                */}
                
        </div>
    )
}
export default ItemListContainer