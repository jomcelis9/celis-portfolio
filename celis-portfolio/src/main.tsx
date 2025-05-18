import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.tsx'
import Home from './Components/Home.tsx'
import Programming from './Components/Programming.tsx'
import Multimedia from './Components/Multimedia.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<App />}/>
              <Route index element={<Home/>}/>
              <Route path='/programming' element={<Programming/>}/>
              <Route path='/multimedia' element={<Multimedia/>}  ></Route>
        <Route/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,

)
