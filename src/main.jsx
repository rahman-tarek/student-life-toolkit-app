import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Dashboard from './pages/Dashboard.jsx';
import AssignmentManagement from './pages/Assignments.jsx';
import Notes from './pages/notes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path='/assignments' element={<AssignmentManagement />} />
            <Route path='/notes' element={<Notes />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
