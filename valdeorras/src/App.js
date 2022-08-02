import './App.scss';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Detail from './utils/detailProduct.mock';
import {useEffect, useState} from "react"

function App() {
  const [item, setItem] = useState([])

    const getItem = new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve(Detail)
        }, 2000)
    })
    useEffect (()=> {
        getItem
            .then((res)=>{
                setItem(res)
            })
    }, [])

  return (
    <div className= 'container'>
      <NavBar/>
      <div className="main-container">
        <ItemListContainer greeting="Productos Destacados"/>
        <ItemDetailContainer Item={item}/>
      </div>
    </div>
    
  );
}

export default App;
