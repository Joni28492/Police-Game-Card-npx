import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DeckProvider } from './context/deck'
import { PlayerProvider } from './context/player'
import { QuestionProvider } from './context/questions'
import { TableProvider } from './context/table'
import { UIProvider } from './context/UI'
import './index.css'

import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <UIProvider >
      <PlayerProvider>
        <QuestionProvider>
          <DeckProvider>
            <TableProvider >
              <App />
            </TableProvider>
          </DeckProvider>
        </QuestionProvider>
      </PlayerProvider>
    </UIProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
