import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from './pages/main';
import Forbidden from './pages/forbidden';
import Navbar from './components/navbar';
import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route>
          <Route path='/' element={<Main />} />
        </Route>
        <Route path='*' element={<Forbidden />} />
      </Routes>
    </>
  );
}

export default App;
