import React from 'react';
import FirstHook from './components/FirstHook';
import SecondHook from './components/SecondHook';
import SecondHooksContinue from './components/SecondHooksContinue';
import Modal from './components/Modal';
import Form from './components/Form';
import Content from './components/Content';
import DOMManipulationComponent from './components/DOMManipulationComponent';
import WebSocketComponent from './components/WebSocketComponent';

function App() {

  return (
    <div className="App">
    <FirstHook />
    <Modal />
    <Form />
    <Content />
    <SecondHook />
    <SecondHooksContinue />
    <DOMManipulationComponent />
    </div>
  );
}

export default App;
