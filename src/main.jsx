import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {ContactList} from "./components/contact-left/";
import {Conversation} from "./components/conversation/";

function App(){
  return(
    <main id="main_conteiner" className="main_conteiner">
      <ContactList />
      <Conversation />
    </main>
  );
}

createRoot(document.getElementById('root')).render(
    <App />,
)
