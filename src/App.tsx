import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import Register from './pages/auth/register'
import Login from './pages/auth/login'
import ErrorPage from './pages/error'
import Questions from './pages/questions'
import Feedback from './pages/feedback'

const App = () => {
  return (
    <div className='bg-[var(--color-background)]'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element ={<Register/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='questions' element = {<Questions/>}/>
        <Route path='complete' element = {<Feedback/>}/>
        <Route path='*' element = {<ErrorPage/>}/>
        
      </Routes>
    </div>
  )
}

export default App