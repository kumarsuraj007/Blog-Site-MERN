import { useContext } from 'react'
import { UserContext } from '../../contexts/userContext.jsx'
import { Outlet, Link } from 'react-router-dom'
import './navigation.styles.css'

function Navigation () {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const logoutUser = () => {
    localStorage.clear();
    setCurrentUser(null)
  }
 
  return (
    <>
    <div className='nav'>
    <Link to='/'><h1>BLOG PIX</h1></Link>
        <ul>
        <li><a href='/createpost'>CREATE POST</a></li>
        {
              currentUser ? (
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
