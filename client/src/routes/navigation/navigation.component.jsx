import { Outlet, Link } from 'react-router-dom'
import './navigation.styles.css'

function Navigation () {
  const logoutUser = () => {
    localStorage.clear();
  }
 
  return (
    <>
    <div className='nav'>
    <Link to='/'><h1>BLOG PIX</h1></Link>
        <ul>
        <li><a href='/createpost'>CREATE POST</a></li>
        {
              localStorage.getItem('jwt') !== null ? (
                <Link to='/login'><li onClick={logoutUser}>LOGOUT</li></Link>
              ) : (
                <Link to='/login'><li>LOGIN</li></Link>
              )
            }
            
        </ul>
    </div>
    <Outlet />
    </>
  )
}

export default Navigation 
