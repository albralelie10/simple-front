import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { Layout } from './components/Layout'
import {Home} from "./pages/Home"
import {Cards} from "./pages/Cards"
import {Contact} from "./pages/Contact"
const router=createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {index:true,element:<Home/>},
      {path:"/contact",element:<Contact/>},
      {path:"/cards",element:<Cards/>}
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
