import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './Contador'
import LabelCronometro from './LabelCronometro'
import Relogio from './Relogio'
import LabelRelogio from './LabelRelogio'

function App() {
  return (
    <div>
      <LabelCronometro name="Cronometro" />
      <Contador />
      <LabelRelogio name="Relogio" />
      <Relogio />
    </div>
  );
}

export default App;