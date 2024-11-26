import './App.css'
import { Route, Routes } from 'react-router-dom'
import {WelcomePage} from './pages/welcomePage'
import {Login} from './pages/login'
import { Register } from './pages/register'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<WelcomePage />}></Route>
        <Route path='/login' element = {<Login />}></Route>
        <Route path='/register' element = {<Register/>}></Route>
        <Route path='/vuelos'></Route>
      </Routes>
    </>
  )
}

export default App
