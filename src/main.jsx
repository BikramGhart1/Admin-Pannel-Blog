import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/postStore.js'
import Preview from './components/Preview.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />}/>
        <Route path='/preview/:id' element={<Preview/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
