
import User from './components//User';
import './App.css';
import { useState } from 'react'

import Detail from './components/Detail';

function App() {


  const [activeId, setaActiveId] = useState();


  return (
    <div className="container">
      <User setaActiveId={setaActiveId} />
      <Detail activeId={activeId} />

    </div>
  );
}

export default App;
