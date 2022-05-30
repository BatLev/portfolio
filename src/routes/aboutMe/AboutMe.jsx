import Navbar from "../../components/navbar/Navbar";
import '../../App.css';
import './aboutMe.css';

export default function aboutMe() {
    return (
        <div className="App">
            <Navbar />
            <main className='content'>
                <div className="about">
                    <h1>About me</h1>
                </div>
            </main>
        </div>
    );
}