
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import AuthProvider from './provider/AuthProvider'

createRoot(document.getElementById('root')).render(
  
 <AuthProvider>
   <div className='  bg-[#000] text-white w-full '>
    <RouterProvider router={router}/>
  </div>
 </AuthProvider>
)
