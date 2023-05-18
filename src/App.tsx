
import Home from './component/Home/Home'
import Dashmainmenu from './component/dashboard/Dashmainmenu'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/Signup' element={<Dashmainmenu />} />
          <Route path="/*" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App