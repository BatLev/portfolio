import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react'


function App() {

  const [navbar, setnavbar] = useState(false)

  return (
    <div className="App">
      <nav className='navbar'>
        <div className='navbar-base'>
          <div className='navbar-links'>
            <Link className='nav-link' to="#"><Icon className="icon" icon="codicon:home"></Icon></Link>
            <Link className='nav-link' to="#"><div className='title'>Main</div></Link>
          </div>
          <div className='navbar-links'>
            <Link className='nav-link' to="#"><Icon className="icon" icon="ant-design:phone-twotone"></Icon></Link>
            <Link className='nav-link' to="#"><div className='title'>Contact</div></Link>

          </div>
          <div className='navbar-links' onClick={() => console.log("clicked")}>
            <Link className='nav-link' to='#'><Icon className="icon" icon="fa:github"></Icon></Link>
            <Link className='nav-link' to='#'><div className='title'>Projects</div></Link>
          </div>
          <div className='navbar-links' onClick={() => console.log("clicked")}>
            <Link className='nav-link' to='#'><Icon className="icon" icon="carbon:settings"></Icon></Link>
            <Link className='nav-link' to='#'><div className='title'>Settings</div></Link>
          </div>
        </div>
        <div className='navbar-settings'>
          
        </div>
      </nav>
      <div className='content'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum ab a accusamus corrupti enim modi quasi repudiandae? Doloribus suscipit quasi assumenda odit vitae impedit amet aliquam sunt adipisci facere.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus illo quos mollitia veniam natus ipsam ex nostrum voluptas id consequatur, nobis cupiditate debitis autem corporis, perferendis dolore, doloribus inventore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repudiandae similique minus veniam beatae ad quam alias, molestias, eligendi, incidunt deserunt sapiente nostrum. Nostrum vitae commodi blanditiis veniam laborum possimus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, labore beatae. Rerum laborum doloribus eos, omnis, mollitia harum impedit accusantium atque inventore ut a iure voluptates cupiditate enim! Autem, deserunt?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque dolores perspiciatis officiis mollitia labore eveniet, quia voluptatibus culpa cupiditate optio eius, blanditiis iusto, quidem corrupti adipisci voluptate placeat a?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum ab a accusamus corrupti enim modi quasi repudiandae? Doloribus suscipit quasi assumenda odit vitae impedit amet aliquam sunt adipisci facere.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus illo quos mollitia veniam natus ipsam ex nostrum voluptas id consequatur, nobis cupiditate debitis autem corporis, perferendis dolore, doloribus inventore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repudiandae similique minus veniam beatae ad quam alias, molestias, eligendi, incidunt deserunt sapiente nostrum. Nostrum vitae commodi blanditiis veniam laborum possimus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, labore beatae. Rerum laborum doloribus eos, omnis, mollitia harum impedit accusantium atque inventore ut a iure voluptates cupiditate enim! Autem, deserunt?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque dolores perspiciatis officiis mollitia labore eveniet, quia voluptatibus culpa cupiditate optio eius, blanditiis iusto, quidem corrupti adipisci voluptate placeat a?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum ab a accusamus corrupti enim modi quasi repudiandae? Doloribus suscipit quasi assumenda odit vitae impedit amet aliquam sunt adipisci facere.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus illo quos mollitia veniam natus ipsam ex nostrum voluptas id consequatur, nobis cupiditate debitis autem corporis, perferendis dolore, doloribus inventore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repudiandae similique minus veniam beatae ad quam alias, molestias, eligendi, incidunt deserunt sapiente nostrum. Nostrum vitae commodi blanditiis veniam laborum possimus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, labore beatae. Rerum laborum doloribus eos, omnis, mollitia harum impedit accusantium atque inventore ut a iure voluptates cupiditate enim! Autem, deserunt?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque dolores perspiciatis officiis mollitia labore eveniet, quia voluptatibus culpa cupiditate optio eius, blanditiis iusto, quidem corrupti adipisci voluptate placeat a?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum ab a accusamus corrupti enim modi quasi repudiandae? Doloribus suscipit quasi assumenda odit vitae impedit amet aliquam sunt adipisci facere.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus illo quos mollitia veniam natus ipsam ex nostrum voluptas id consequatur, nobis cupiditate debitis autem corporis, perferendis dolore, doloribus inventore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repudiandae similique minus veniam beatae ad quam alias, molestias, eligendi, incidunt deserunt sapiente nostrum. Nostrum vitae commodi blanditiis veniam laborum possimus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, labore beatae. Rerum laborum doloribus eos, omnis, mollitia harum impedit accusantium atque inventore ut a iure voluptates cupiditate enim! Autem, deserunt?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque dolores perspiciatis officiis mollitia labore eveniet, quia voluptatibus culpa cupiditate optio eius, blanditiis iusto, quidem corrupti adipisci voluptate placeat a?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum ab a accusamus corrupti enim modi quasi repudiandae? Doloribus suscipit quasi assumenda odit vitae impedit amet aliquam sunt adipisci facere.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus illo quos mollitia veniam natus ipsam ex nostrum voluptas id consequatur, nobis cupiditate debitis autem corporis, perferendis dolore, doloribus inventore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repudiandae similique minus veniam beatae ad quam alias, molestias, eligendi, incidunt deserunt sapiente nostrum. Nostrum vitae commodi blanditiis veniam laborum possimus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, labore beatae. Rerum laborum doloribus eos, omnis, mollitia harum impedit accusantium atque inventore ut a iure voluptates cupiditate enim! Autem, deserunt?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque dolores perspiciatis officiis mollitia labore eveniet, quia voluptatibus culpa cupiditate optio eius, blanditiis iusto, quidem corrupti adipisci voluptate placeat a?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum ab a accusamus corrupti enim modi quasi repudiandae? Doloribus suscipit quasi assumenda odit vitae impedit amet aliquam sunt adipisci facere.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus illo quos mollitia veniam natus ipsam ex nostrum voluptas id consequatur, nobis cupiditate debitis autem corporis, perferendis dolore, doloribus inventore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repudiandae similique minus veniam beatae ad quam alias, molestias, eligendi, incidunt deserunt sapiente nostrum. Nostrum vitae commodi blanditiis veniam laborum possimus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, labore beatae. Rerum laborum doloribus eos, omnis, mollitia harum impedit accusantium atque inventore ut a iure voluptates cupiditate enim! Autem, deserunt?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque dolores perspiciatis officiis mollitia labore eveniet, quia voluptatibus culpa cupiditate optio eius, blanditiis iusto, quidem corrupti adipisci voluptate placeat a?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum ab a accusamus corrupti enim modi quasi repudiandae? Doloribus suscipit quasi assumenda odit vitae impedit amet aliquam sunt adipisci facere.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus illo quos mollitia veniam natus ipsam ex nostrum voluptas id consequatur, nobis cupiditate debitis autem corporis, perferendis dolore, doloribus inventore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repudiandae similique minus veniam beatae ad quam alias, molestias, eligendi, incidunt deserunt sapiente nostrum. Nostrum vitae commodi blanditiis veniam laborum possimus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, labore beatae. Rerum laborum doloribus eos, omnis, mollitia harum impedit accusantium atque inventore ut a iure voluptates cupiditate enim! Autem, deserunt?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque dolores perspiciatis officiis mollitia labore eveniet, quia voluptatibus culpa cupiditate optio eius, blanditiis iusto, quidem corrupti adipisci voluptate placeat a?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum ab a accusamus corrupti enim modi quasi repudiandae? Doloribus suscipit quasi assumenda odit vitae impedit amet aliquam sunt adipisci facere.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus illo quos mollitia veniam natus ipsam ex nostrum voluptas id consequatur, nobis cupiditate debitis autem corporis, perferendis dolore, doloribus inventore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repudiandae similique minus veniam beatae ad quam alias, molestias, eligendi, incidunt deserunt sapiente nostrum. Nostrum vitae commodi blanditiis veniam laborum possimus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, labore beatae. Rerum laborum doloribus eos, omnis, mollitia harum impedit accusantium atque inventore ut a iure voluptates cupiditate enim! Autem, deserunt?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque dolores perspiciatis officiis mollitia labore eveniet, quia voluptatibus culpa cupiditate optio eius, blanditiis iusto, quidem corrupti adipisci voluptate placeat a?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum ab a accusamus corrupti enim modi quasi repudiandae? Doloribus suscipit quasi assumenda odit vitae impedit amet aliquam sunt adipisci facere.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus illo quos mollitia veniam natus ipsam ex nostrum voluptas id consequatur, nobis cupiditate debitis autem corporis, perferendis dolore, doloribus inventore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repudiandae similique minus veniam beatae ad quam alias, molestias, eligendi, incidunt deserunt sapiente nostrum. Nostrum vitae commodi blanditiis veniam laborum possimus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, labore beatae. Rerum laborum doloribus eos, omnis, mollitia harum impedit accusantium atque inventore ut a iure voluptates cupiditate enim! Autem, deserunt?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque dolores perspiciatis officiis mollitia labore eveniet, quia voluptatibus culpa cupiditate optio eius, blanditiis iusto, quidem corrupti adipisci voluptate placeat a?
        </p>
      </div>
    </div>
  );
}

export default App;
