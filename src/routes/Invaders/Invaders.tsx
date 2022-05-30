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


const Invaders: FC = () => {

  const player = usePlayermanager();
  const { enemies, setenemies } = useEnemiesmanager(24);
  const { bullets, setBull, setPos } = useBulletmanager();
  // const { colbullets,colenemies,setbul,setnmi } = useCollisionmanager();
  const navigate = useNavigate();


  useEffect(() => {
    setPos(player);
  }, [player])

  useEffect(() => {
    // const loop = setInterval(() => {
    var enemiarray = enemies;
    var bulletarray = bullets;
    var collision = false;
    bullets.map((bullet, bulindex) => {
      enemies.map((enemi, enemindex) => {
        if (enemi.positiony > 75) {
          navigate("/invaders/gameover");
        }
        if ((Math.abs(bullet.positionx - enemi.positionx) < 2.5) && (Math.abs(bullet.positiony - enemi.positiony) < 2) && bullet.alive && enemi.alive) {
          enemiarray[enemindex].alive = false;
          bulletarray[bulindex].alive = false;
          collision = true;
          // console.log('bullet at:' + bullet.positionx + ':' + bullet.positiony + ' killed enemi at:' + enemi.positionx + ':' + enemi.positiony);
        }
        // }, 160);
        // return () => clearInterval(loop);
        if (collision) {
          collision = false;
          setenemies([...enemiarray]);
          setBull([...bulletarray]);
        }
      })
    });
  }, [bullets, enemies])


  return (
    <div className="App">
      <Navbar />
      <main className='content'>
        <div className="space">
          <Icon className="icon player" icon="ri:space-ship-line" style={{ left: `${player}%` }}></Icon>
          {/* <Icon key={1} className="icon enemy" icon={(true) ? "mdi:space-invaders" : "bxs:invader"} style={{top:'20%',left:`${enemies[1]}%`}}></Icon> */}
          {enemies.map((enemi) => {
            return <Enemy alive={enemi.alive} key={enemi.key} positionx={enemi.positionx} positiony={enemi.positiony} frame={enemi.frame} />
          })}
          {bullets.map((currentValue) => {
            return <Bullet alive={currentValue.alive} key={currentValue.key} positionx={currentValue.positionx} positiony={currentValue.positiony} />
          })}
        </div>
      </main>
    </div>
  );
}

export default Invaders;