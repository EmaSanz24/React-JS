import './ItemCount.scss'
import {useState} from 'react'

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial)
    const onAdd =() => {
        if (count<stock)
        {setCount (count + 1)}  
    }
    const onRemove =()=>{
        if (count>initial)
        {setCount (count - 1)}    
    }
    return(
        <div className= 'contador'>
            <button onClick={onRemove}>-</button>
            <span>{count}</span>
            <button onClick={onAdd}>+</button>
        </div>
    )
}


export default ItemCount 