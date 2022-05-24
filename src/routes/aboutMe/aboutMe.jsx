import Navbar from "../../components/navbar/navbar";
import '../../App.css';
import './aboutMe.css';

export default function aboutMe() {
    return (
        <div className="App">
            <Navbar />
            <main className='content'>
                <div className="about">
                    <h1>About me</h1>
                    <img alt="decor" src='https://rune.ai/images/RuneLogoPurpleHD.png' />
                    <img alt="decor" style={{ top: '40rem', right: 'auto', left: '-25rem' }} src='https://rune.ai/images/RuneLogoPurpleHD.png' />
                </div>
            </main>
        </div>
    );
}