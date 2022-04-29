import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Page */
import Home from './Page/HomePage/Home';
import Board from './Page/BoardPage/Board';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/board' element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
