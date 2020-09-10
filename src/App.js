import React from 'react';
import News from './components/news';
import Navbar from './components/navbar';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <News path="/" />
      </Router>
    </div>
  );
}

export default App;
