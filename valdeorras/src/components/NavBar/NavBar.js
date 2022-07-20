//UpperCamelCase
import './NavBar.scss'
import CartWidget from './CartWidget'
const NavBar = () => {
    return(
        
            <header>
                <img src="/assets/logo.png" alt= "logo Valdeorras"/>
                <ul>
                    <li><button>Inicio</button></li>
                    <li><button>Productos</button></li>
                    <li><button>Ofertas</button></li>
                    <li><button>About Us</button></li>
                    <li><button>Contacto</button></li>
                </ul>
                <div className='cart-widget'>
                    <CartWidget/>
                </div>
                
            </header>
    )
}
export default NavBar
