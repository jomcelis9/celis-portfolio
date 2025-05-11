import './App.css'
import React from 'react';
import{Routes, Route} from 'react-router';
import Home from '../src/Components/Home';

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
