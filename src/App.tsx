import React, { useState } from 'react';
 import Sidebar from './components/Sidebar/Sidebar';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <Sidebar />
    </>
  );
}

export default App;
