import './App.css'
import { Routes,Route } from 'react-router-dom'
import CoinListing from './Pages/CoinListing'
import CoinDetailsDisplay from './Pages/CoinDetailsDisplay'
function App() {

  return (
   <Routes>
        <Route path='/' element={<CoinListing/>} />
        <Route path='/coin/:id' element={<CoinDetailsDisplay/>} />
    </Routes>
  )
}

export default App
