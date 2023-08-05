import { useContext } from 'react'
import { UserContext } from '../../contexts/userContext.jsx'
import { Outlet } from 'react-router-dom'
import './navigation.styles.css'

function Navigation () {
  const {currentUser} = useContext(UserContext);
  console.log(currentUser)
 
  return (
    <>
    <div className='nav'>
        <h1><a href='/'>BLOG PIX</a></h1>
        <ul>
        <li><a href='/createpost'>CREATE POST</a></li>
        {
              currentUser ? (
                <li><a href='/' onClick={
                  () => {
                    localStorage.clear()
                  }
                }>LOGOUT</a></li>
              ) : (
                <li><a href='/login'>LOGIN</a></li>
              )
            }
            
        </ul>
    </div>
    <Outlet />
    </>
  )
}

export default Navigation 
