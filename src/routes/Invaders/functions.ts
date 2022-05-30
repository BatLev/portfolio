import { useCallback, useEffect, useState } from "react";

export function useInputmanager(key: string) {

    const [keypressed, setkeypressed] = useState(false)

    const keydownFunction = useCallback((event: KeyboardEvent) => {
        if (event.code === key) {
            setkeypressed(true);
        }
    }, [key]);

    const keyUpFunction = useCallback((event: KeyboardEvent) => {
        if (event.code === key) {
            setkeypressed(false);
        }
    }, [key]);

    useEffect(() => {
        document.addEventListener("keydown", keydownFunction);
        return () => {
            document.removeEventListener("keydown", keydownFunction);
        };
    }, [keydownFunction]);
    useEffect(() => {
        document.addEventListener("keyup", keyUpFunction);
        return () => {
            document.removeEventListener("keyup", keyUpFunction);
        };
    }, [keyUpFunction]);

    return keypressed
}

export function useTouchmanager() {

    const [touched, setTouched] = useState(false);
    const [touchposition, setTouchposition] = useState<number>(0);
    const [resolution, setResolution] = useState<number>(1);

    useEffect(() => {
        console.log(window.screen.width);
        console.log(window.screen.height);
        console.log(window.screen.availHeight);
        console.log(window.screen.availWidth);
        setResolution(window.screen.width);
    }, [touched])
    

    const touchStartFunction = useCallback((event: TouchEvent) => {
        setTouched(true);
        setTouchposition(Math.floor((event.touches[0].screenX/resolution)*100));
    }, [resolution]);

    const TouchMoveFunction = useCallback((event: TouchEvent) => {
        setTouchposition(Math.floor((event.touches[0].screenX/resolution)*100));
        // console.log((event.touches[0].clientX/resolution))
    }, [resolution]);

    const TouchEndFunction = useCallback((event: TouchEvent) => {
        setTouched(false)
    }, []);

    useEffect(() => {
        document.addEventListener("touchstart", touchStartFunction);
        return () => {
            document.removeEventListener("touchstart", touchStartFunction);
        };
    }, [touchStartFunction]);
    useEffect(() => {
        document.addEventListener("touchmove", TouchMoveFunction);
        return () => {
            document.removeEventListener("touchmove", TouchMoveFunction);
        };

    }, [TouchMoveFunction]);

    useEffect(() => {
        document.addEventListener("touchend", TouchEndFunction);
        return () => {
            document.removeEventListener("touchend", TouchEndFunction);
        };
    }, [TouchEndFunction]);

    return { touched, touchposition,resolution }
}

export function usePlayermanager() {
    const Leftkeypressed = useInputmanager('ArrowLeft');
    const Rightkeypressed = useInputmanager('ArrowRight');
    const { touched, touchposition } = useTouchmanager();
    const [playerposition, setPlayerposition] = useState<number>(50);

    useEffect(() => {
        console.log('touched:'+touched+"pos:"+touchposition)
    }, [touched,touchposition])
    

    useEffect(() => {
        const loop = setInterval(() => {
            var playpos = playerposition;
            if (Leftkeypressed || (touched && (playerposition-touchposition>0)) ) {
                playpos = playpos - 1;
            }
            if (Rightkeypressed || (touched &&(playerposition-touchposition<0)) ) {
                playpos = playpos + 1;
            }
            if (playpos < 0) {
                playpos = 0;
            }
            if (playpos > 100) {
                playpos = 100;
            }
            setPlayerposition(Math.floor(playpos));
        }, 16);
        return () => clearInterval(loop);
    }, [Leftkeypressed, Rightkeypressed, playerposition,touched,touchposition]);

    return playerposition;
}

interface enemi {
    key: number;
    // type: string;
    alive: Boolean;
    positionx: number;
    positiony: number;
    frame: number;
}

export function useEnemiesmanager(num: number) {
    const [enemies, setenemies] = useState<enemi[]>([{ alive: true, key: 0, positionx: 20, positiony: 20, frame: 0 }]);
    // const [leftmove, setleftmove] = useState(true)

    useEffect(() => {
        var enemiesgrid = enemies;
        for (let i = 0; i < num; i++) {
            if (i < 8) {
                enemiesgrid[i] = { alive: true, key: i, positionx: (19 + (i) * (90 / 10)), positiony: 30, frame: 0 };
            }
            if (i >= 8 && i < 16) {
                enemiesgrid[i] = { alive: true, key: i, positionx: (19 + (i - 8) * (90 / 10)), positiony: 20, frame: 1 };
            }
            if (i >= 16 && i < 24) {
                enemiesgrid[i] = { alive: true, key: i, positionx: (19 + (i - 16) * (90 / 10)), positiony: 10, frame: 0 };
            }

        }
        setenemies([...enemiesgrid]);
    }, [])

    useEffect(() => {
        const loop = setInterval(() => {
            var enemiarray = enemies;
            // var leftmover = leftmove;
            for (let i = 0; i < enemiarray.length; i++) {
                enemiarray[i].positiony = enemiarray[i].positiony + 0.16;
                enemiarray[i].frame = enemiarray[i].frame === 0 ? 1 : 0;
                // enemiarray[i].positionx = leftmover ? enemiarray[i].positionx + 5 : enemiarray[i].positionx - 5;
            }
            // setleftmove(!leftmover)
            setenemies([...enemiarray]);
        }, 320);
        return () => clearInterval(loop);
    }, [enemies]);

    return { enemies, setenemies };
}

interface blazingbullet {
    key: string,
    alive: Boolean,
    positionx: number,
    positiony: number
}

function generaterandomkey() {
    var randomkey = Math.random().toString().split('.')[1].slice(0, 6);
    return randomkey;
}

export function useBulletmanager() {

    const [bullets, setBullet] = useState<blazingbullet[]>([]);
    const [position, setPosition] = useState<number>(50);
    const uppressed = useInputmanager('ArrowUp');
    const [count, setcount] = useState(0);
    const [ready, setReady] = useState(false);


    const setPos = (pos: number) => { setPosition(pos) };
    const setBull = (bul: blazingbullet[]) => { setBullet(bul) };

    useEffect(() => {
        const loop = setInterval(() => {
            var poscorrected = position// + (left ? -7 : 0) + (right ? 7 : 0)
            if (!uppressed) {
                var bulletarray = bullets;
                for (let i = 0; i < bulletarray.length; i++) {
                    var pos = bulletarray[i].positiony;
                    pos -= 4;
                    bulletarray[i].positiony = pos;
                }
                if (count === 6) {
                    setReady(true);
                    setcount(0);
                } else {
                    setcount(count + 1)
                    setReady(false);
                }
                if (ready) {
                    setBullet([...bulletarray.filter(curbullet => curbullet.positiony > -30), { key: generaterandomkey(), alive: true, positionx: poscorrected, positiony: 80 }]);
                } else {
                    setBullet([...bulletarray.filter(curbullet => curbullet.positiony > -30)]);
                }
            }
        }, 80);
        return () => clearInterval(loop);
    }, [bullets, uppressed, ready, count,position]);

    return { bullets, setBull, setPos };
}

export function useCounter() {

    const [count, setcount] = useState(0);
    const [ready, setReady] = useState(false);

    const setcounter = () => {
        if (count === 4) {
            setReady(true);
            setcount(0);
        } else {
            setcount(count + 1)
        }
        console.log(count);
    };



    return { count, ready, setcounter }
}
