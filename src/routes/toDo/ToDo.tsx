import Navbar from "../../components/navbar/Navbar";
import '../../App.css';
import './toDo.css';
import { Icon } from '@iconify/react'
import { FC, useEffect, useState } from "react";

const ToDo: FC = () => {

    const [tickets, setTickets] = useState<string[]>([]);
    const [newticket, setnewTicket] = useState<string>("");
    const [ticketnum, setTicketnum] = useState<number>(0);

    useEffect(() => {
        var Ticketcount:number = parseInt(localStorage.getItem('ticketnum') || '0');
        var ticketlist:Array<string> = [];

        setTicketnum(Ticketcount);
        for (let i = 0; i < Ticketcount; i++) {
            ticketlist[i]=localStorage.getItem("ticket"+i) || "Error:001";
        }
        setTickets(ticketlist);
    }, [ticketnum]);

    function addticket(): void {
        var Ticketcount = ticketnum;
        if(!tickets.includes(newticket)){
            setTicketnum(Ticketcount + 1);
            localStorage.setItem("ticketnum",(Ticketcount+1).toString());
            setTickets([...tickets,newticket]);
            localStorage.setItem("ticket"+Ticketcount,newticket);
            setnewTicket('');
        }else{
            alert("Can't be two of the same task!");
        }
    }

    function removeticket(ticket:string): void{
        var Ticketcount:number = ticketnum;
        var ticketlist:Array<string> = tickets.filter(choosen=>choosen!==ticket);
        for(let i=0;i<Ticketcount-1;i++){
            localStorage.setItem("ticket"+i,ticketlist[i]);
        }
        localStorage.removeItem("ticket"+(Ticketcount-1));
        localStorage.setItem("ticketnum",(Ticketcount-1).toString());
        setTicketnum(Ticketcount-1)
    }

    return (
        <div className="App">
            <Navbar />
            <main className='content'>
                <h1>To do list</h1>
                {/* i need a theme chooser! */}
                <>
                    {tickets.map((ticket) => {
                        return <div key={ticket} className="ticket">
                            <input className="textbox" onChange={e => setnewTicket(e.target.value)}>
                            </input>
                            <p className="task">{ticket}</p>
                            <Icon onClick={() => removeticket(ticket)} className="icon" icon="ic:baseline-done-outline" />
                        </div>
                    })}
                    <div className="ticket">
                        <input className="textbox" onChange={e => setnewTicket(e.target.value)} value={newticket}>
                        </input>
                        <p className="task"></p>
                        <Icon onClick={() => addticket()} className="icon" icon="ant-design:plus-circle-outlined" />
                    </div>
                </>
            </main>
        </div>
    );
}

export default ToDo;