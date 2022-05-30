import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

interface enemi {
    type: string;
    alive: Boolean;
    positionx: number;
    positiony: number;
    frame: number;
}

interface fakit{
    alive:Boolean;
    positionx:number;
    positiony:number;
    frame:number
}


const Enemy = (prop:fakit) => {

    // const [positionx, setpositionx] = useState(prop.positionx);
    // const [positiony, setpositiony] = useState(prop.positiony);
    // const [alive, setalive] = useState(prop.alive);
    // const [type, settype] = useState(prop.type);
    // const [frame, setframe] = useState(prop.frame);


    // useEffect(() => {
    //     console.log("i changed")
    // }, [positiony])

    function tobe(ornot:Boolean){
        return ornot ? "inherit" : "none";
    }

    return (
        <Icon className="icon enemy" icon={(prop.frame==0) ? "mdi:space-invaders" : "bxs:invader"} style={{top:`${prop.positiony}%`,left:`${prop.positionx}%`,display:tobe(prop.alive)}}></Icon>
    )
}

export default Enemy