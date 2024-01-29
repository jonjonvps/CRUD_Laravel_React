import React from 'react';
import MyRouter from './router/index.js';
import Navbar from './componets/Navbar.js';

// Rendering of the MyRouter component, which manages routes
// Rendering Navbar
function App() 
{
  return (
    <div>
      
      <Navbar />
      
      <MyRouter />
    </div>
  );
}

export default App;
