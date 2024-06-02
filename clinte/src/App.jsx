import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Header } from './assets/components/header/header'
import { Footer } from './assets/components/footer/footer'
import { Pages } from './pages'
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import { LoginRoutes } from './loginRoutes'



export const App = () => {
  const [login, setLogin] = useState(false)
  return (
    <>
      <BrowserRouter>
        {/* {
        login === false?
        <LoginRoutes/>
         : */}
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="flex-grow-1">
            <Pages />
          </div>
          <Footer />
        </div>

        {/* } */}
      </BrowserRouter>
    </>
  )
}

