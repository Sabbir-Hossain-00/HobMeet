
import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './router/Router'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>
         <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  )
}

export default App
