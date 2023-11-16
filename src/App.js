import React from 'react';
import NavBar from './components/navbar';
import { ToastContainer } from 'react-toastify';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <NavBar />
    </div>
    <div>
      <ToastContainer />
    </div>
    </>
  );
}
export default App;
