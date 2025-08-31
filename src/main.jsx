import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {ContactList} from "./components/contact-left/";

function App(){
  return(
    <main id="main_conteiner" className="main_conteiner">
      <ContactList />
    </main>
  );
}

createRoot(document.getElementById('root')).render(
    <App />,
)
