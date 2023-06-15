import React from 'react'
import ReactDOM from 'react-dom/client'
import { NewsApp } from './NewsApp'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
          <NewsApp/>
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
