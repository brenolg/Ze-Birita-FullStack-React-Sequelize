import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Router from './routes/router';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Toaster
        containerStyle={ {
          top: 200,
          left: 20,
        } }
      />
    </BrowserRouter>
  );
}

export default App;
