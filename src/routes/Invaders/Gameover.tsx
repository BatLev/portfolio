import Navbar from "../../components/navbar/Navbar";
import '../../App.css';
import './invaders.css';
import { Icon } from '@iconify/react'
import { FC, useCallback, useEffect, useState } from "react";
import './functions';
// import { keyboardKey } from "@testing-library/user-event";
import { usePlayermanager, useEnemiesmanager, useBulletmanager, useInputmanager } from "./functions";
import Enemy from "./Enemy";
import Bullet from "./Bullet";
import { useNavigate } from "react-router-dom";
import { relative } from "path";


const Gameover: FC = () => {

  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar />
      <main className='content'>
        <div className="space" style={{display:'flex',flexDirection:'column',justifyContent:"space-around",alignItems:'center'}}>
          <h1>Game over!</h1>
          <h1>Try again?</h1>
          <Icon icon="mdi:space-invaders" style={{display:'flex',fontSize:'13rem'}} onClick={()=>navigate('/invaders')}></Icon>
        </div>
      </main>
    </div>
  );
}

export default Gameover;