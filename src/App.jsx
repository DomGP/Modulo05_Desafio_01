import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"

import HomePage from './views/HomePage';
import ContactoPage from './views/ContactoPage';
import NotFound from './views/NotFound';
import Footer from "./components/Footer";

function App() {
  

  return (
    <div className="app">
      <Navigation />
        <main>
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
        </main>
      <Footer />
    </div>
  )
}

export default App
