import React from 'react'
import { BrowserRouter as Routers ,Routes ,Route ,Link } from 'react-router-dom'
import Components from '../pages/Components'
import Login from '../pages/Components/Login'
import Signup from '../pages/Components/Signup'
import Dashboard from '../pages/Components/Dashboard copy'





export default function ARouter() {
  return (
    <div>
    
      <Routers>
    
<Routes>
<Route path='/' element={<Components />}></Route>
<Route path='Login' element={<Login/>}></Route>
<Route path='Signup' element={<Signup/>}></Route>
<Route path='Dashboard/*' element={<Dashboard/>}></Route>




</Routes>
  </Routers>
    </div>
  )
}
