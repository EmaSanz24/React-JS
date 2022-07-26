import './ItemListContainer.scss'
import ItemProduct from "../ItemProduct/ItemProduct"

const ItemListContainer = ({greeting}) => {

    return(
        <div className= 'list-products'>
            <h2>{greeting}</h2>
                <div className='product-cards'>
                    <ItemProduct title='Remera "Jet" Love' price= {7500} image= {'Remera1.jpg'} stock={3}/>
                    <ItemProduct title='Remera "Classic" Naranja' price= {7800} image= {'Remera2.jpg'} stock={5}/>
                    <ItemProduct title='Buzo Canguro' price={18000} image={'Buzo1.jpg'} stock={7}/>
                    <ItemProduct title='Campera Canguro' price={21000} image={'Campera1.jpg'} stock={10}/>
                </div>
        </div>
    )
}
export default ItemListContainer