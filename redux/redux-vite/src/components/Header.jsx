import { Link } from 'react-router-dom'

const Header = () => {
  return ( 
    <nav>         
      <Link className='menu' to='/'>Home</Link>
      <Link className='menu' to='/producto'>Producto</Link>
      <Link className='menu' to='/nuevo-producto'>Nuevo Producto</Link>    
    </nav>
  );
}
 
export default Header;