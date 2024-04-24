import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"

import HomePage from './views/HomePage';
import ContactoPage from './views/ContactoPage';
import NotFound from './views/NotFound';

function App() {
  

  return (
    <>
      <Navigation />
      <Routes>
       <Route 
          path='/'
          element={<HomePage/>}/>
        <Route
          path='/contacto'
          element={<ContactoPage/>}/>
        <Route 
          path="*"
          element = {<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
