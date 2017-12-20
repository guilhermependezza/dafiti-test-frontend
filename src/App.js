import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import './App.css';

// Main app component
function App() {
  return (
    <BrowserRouter>
        <div className="content">
          <Main />
        </div>
    </BrowserRouter>
  );
}

export default App;
