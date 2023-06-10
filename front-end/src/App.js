import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Router from './routes/router';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
