import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './features/pages/HomePage'
import About from './features/pages/About'
import Contact from './features/pages/Contact'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage />} />

          

        <Route path='/About' element={<About />}  />

        <Route path='/Contact' element={<Contact />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App