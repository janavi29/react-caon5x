import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Middle from './Middle';
import { Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Middle />
    </Router>
  );
}
