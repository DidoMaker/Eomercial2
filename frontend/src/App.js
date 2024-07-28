import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './Components/Home/Home'
import LoginForm from './Components/LoginForm/LoginForm'
import Create from './Components/User/Create'
import RootLayout from './Components/Root/RootLayout'
import Forget from './Components/User/Forget'
import Admin from './Components/admin/admin'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<LoginForm/>} />
      <Route path="admin" element={<Admin/>} />
      <Route path="Create" element={<Create/>} />
      <Route path="Forget" element={<Forget/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} /> 
  );
}

export default App
