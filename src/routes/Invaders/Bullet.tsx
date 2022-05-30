import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

interface bullet {
    type: string;
    alive: Boolean;
    positionx: number;
    positiony: number;
    frame: number;
}

interface fakit{
    key:string;
    positionx:number;
    positiony:number;
    alive:Boolean
}


const Bullet = (prop:fakit) => {

    // const [positionx, setpositionx] = useState(prop.positionx);
    // const [positiony, setpositiony] = useState(prop.positiony);
    // const [alive, setalive] = useState(prop.alive);
    // const [type, settype] = useState(prop.type);
    // const [frame, setframe] = useState(prop.frame);
    //     useEffect(() => {
    //     const loop = setInterval(() => {

    //     }, 1600);
    //     return () => clearInterval(loop);
    // }, []);

    // useEffect(() => {
    //     console.log("i changed")
    // }, [positiony])

    function tobe(ornot:Boolean){
        return ornot ? "inherit" : "none";
    }

    return (
        <Icon className="icon bullet" icon='ant-design:fire-outlined' rotate="180deg" style={{top:`${prop.positiony}%`,left:`${prop.positionx}%`,display:tobe(prop.alive)}}></Icon>
    )
}

export default Bullet