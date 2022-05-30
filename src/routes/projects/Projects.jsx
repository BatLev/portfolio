import Navbar from "../../components/navbar/Navbar";
import '../../App.css';
import './projects.css';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react'

export default function Projects() {
    return (
        <div className="App">
            <Navbar />
            <main className='content'>
                <div className="about">
                    <h1>Projects</h1>
                    <main className="projectlist">
                        <a href="https://github.com/BatLev/"><Icon className="icon" icon="akar-icons:github-outline-fill"></Icon></a>
                        <Link className='nav-link' to="/toDo"><Icon className="icon" icon="bx:list-check"></Icon></Link>
                        <Link className='nav-link' to="/invaders"><Icon className="icon" icon="mdi:space-invaders"></Icon></Link>
                    </main>
                </div>
            </main>
        </div>
    );
}