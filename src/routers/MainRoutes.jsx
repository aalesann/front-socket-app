import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { ChatPage } from '../pages/ChatPage'
import { AboutPage } from '../pages/AboutPage'

export const MainRoutes = () => {
  return (
    <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/chat' element={<ChatPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/' element={<HomePage />} />
    </Routes>
  )
}
