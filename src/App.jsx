import { AuthProvider } from "./context/AuthProvider"
import { LoginPage } from "./pages/LoginPage"
import { AppRouter } from "./routers/AppRouter"


export const App = () => {

  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
