import React from 'react'
import Home from './Component/Home'
import Login from './Component/Login'
import Create from './Component/Create'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './Component/Profile'


const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "create", element: <Create /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App