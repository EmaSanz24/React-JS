import './ItemListContainer.scss'
import ItemProduct from "../ItemProduct/ItemProduct"

const ItemListContainer = ({greeting}) => {

    return(
        <div className= 'list-products'>
            <h2>{greeting}</h2>
                <div className='product-cards'>
                    <ItemProduct title='Remera "Jet" Love' price= {7500} image= {'Remera1.jpg'}/>
                    <ItemProduct title='Remera "Classic" Naranja' price= {7800} image= {'Remera2.jpg'}/>
                    <ItemProduct title='Buzo Canguro' price={18000} image={'Buzo1.jpg'}/>
                    <ItemProduct title='Campera Canguro' price={21000} image={'Campera1.jpg'}/>
                </div>
        </div>
    )
}
export default ItemListContainer