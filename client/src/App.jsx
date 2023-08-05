import React from 'react'
import Register from '../src/routes/sign-up-form/Register.component.jsx';
import Login from '../src/routes/sign-in-form/Login.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import { Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './routes/home/home.component.jsx';

function App () {
  return (
    <div className='App'>
      <Routes>
       <Route path='/' element={<Navigation />}>
       <Route index element={<Home />} />
       <Route path='/register' element={< Register/>}/>
       <Route path='/login' element={< Login/>}/>
       </Route>
      </Routes>
    </div>
  )
}

export default App;
