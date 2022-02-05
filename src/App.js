import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Modal } from 'gdc-component-modal';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div id="root"></div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => setShow(true)}>Show Modal</button>
        <Modal title="New Modal" onClose={() => setShow(false)} show={show}>
          <p>Modal incredible content 👽</p>
        </Modal>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
