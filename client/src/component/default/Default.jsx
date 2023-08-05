import React from 'react'
import {Link} from 'react-router-dom'
import './default.css'

function Default() {
  return (
    <div className='container'>
      <h2>Welcome To Blog Pix</h2>
      <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam saepe assumenda ducimus voluptates soluta ad, sit dolores velit corporis quaerat tempora aliquid quidem reprehenderit similique sunt consectetur amet ipsum incidunt beatae accusantium voluptas modi. Error rerum nesciunt quisquam laudantium? Esse, suscipit optio vero voluptatum quo veritatis qui est asperiores quod expedita id, quis totam et nobis. Quis, totam excepturi vel earum corporis ratione iusto asperiores officiis nobis assumenda porro alias accusantium sint, at quisquam saepe! Explicabo harum culpa doloremque dicta excepturi nulla laudantium reiciendis nesciunt nisi debitis. Molestiae neque accusamus eos consequatur porro ut dolore quasi similique soluta, recusandae unde.</span>
      <Link to='/register'>
      <button className='btn'>Get Started</button>
      </Link>
    </div>
  )
}

export default Default
