import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesManagement from './RoutesManagement';

function App() {
  return (
    <BrowserRouter>
      <RoutesManagement />
    </BrowserRouter>
  );
}

export default App;
