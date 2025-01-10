import React from 'react';
import './App.css';
import 'h8k-components';
import ChatWindow from './components/ChatWindow';

const title = "AI Assistant";

function App() {
  return (
    <div className="App">
      <h8k-navbar header={title} data-testid="navbar"></h8k-navbar>
      <ChatWindow />
    </div>
  );
}

export default App;
