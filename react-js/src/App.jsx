import {BrowesrRouter,Routes,Route} from 'react-router-dom'
import HomePage from './features/pages/HomePage'
import About from './features/pages/About'
import Contact from './features/pages/contact'
const App = () => {
  return (
    <BrowesrRouter>
    <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/About' element={<About />}  />

        <Route path='/Contact' element={<Contact />} />

    </Routes>
    </BrowesrRouter>
  )
}

export default App