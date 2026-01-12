import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './elements/Home'
import Edit from './elements/Edit'
import Create from './elements/Create'
import Read from './elements/Read'
import Notas from './elements/Notas'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/notas/:id" element={<Notas />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App