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
import ToDo from './pages/ToDo.jsx';
import Resources from './pages/Resources.jsx';
import Settings from './pages/Settings.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path='/assignments' element={<AssignmentManagement />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/todos' element={<ToDo />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/settings' element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
