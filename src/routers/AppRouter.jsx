import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PublicRoutes } from "./PublicRoutes"
import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage"
import { PrivateRoutes } from "./PrivateRoutes"
import { RegisterPage } from "../pages/RegisterPage"
import { MainRoutes } from "./MainRoutes"

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/auth/*' element={
        <PublicRoutes>
          <Routes>
          {/* <Route path='/' element={<LoginPage />} /> */}
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </PublicRoutes>

    } />
    
    <Route path='/*' element={
        <PrivateRoutes>
          <MainRoutes />
        </PrivateRoutes>
    } />
      
    <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
    </BrowserRouter>
  )
}
