import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Details from './components/details/Details';
import Error from './components/Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index  element={<Home/>} />
          <Route path="/details/:id" element={<Details/>} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
