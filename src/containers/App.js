import React from 'react';
import '../App.css';
import { MyCard } from '../components/MyCard';

function App() {
  return (
    <div className="App">
      <MyCard title="Contact">
        <p>Hello World</p>
      </MyCard>
    </div>
  );
}

export default App;
