import './ItemCount.scss'
import {useState} from 'react'

const ItemCount = ({stock, initial, setQttSelected}) => {
    const [count, setCount] = useState(initial)
    const addQtt =() => {
        if (count<stock)
        {setCount (count + 1)}  
    }
    const remQtt =()=>{
        if (count>initial)
        {setCount (count - 1)}    
    }
    const onAdd = () =>{
        setQttSelected(count)
    }
    return(
        <>
            <div className= 'contador'>
            <button onClick={remQtt}>-</button>
            <span>{count}</span>
            <button onClick={addQtt}>+</button>
            </div>
            <button className='addOnCart' onClick={onAdd}>Agregar al carrito</button>
        </>
        
    )
}


export default ItemCount 