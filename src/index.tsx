import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AboutMe from './routes/aboutMe/AboutMe';
import Projects from './routes/projects/Projects';
import ToDo from './routes/toDo/ToDo'
import Invaders from './routes/Invaders/Invaders'
import Gameover from './routes/Invaders/Gameover';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/aboutMe" element={<AboutMe/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/todo" element={<ToDo/>}/>
        <Route path="/invaders" element={<Invaders/>}/>
        <Route path="/invaders/gameover" element={<Gameover/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
