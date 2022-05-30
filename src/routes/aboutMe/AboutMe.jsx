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
                    <img src='https://rune.ai/images/RuneLogoPurpleHD.png' />
                    <img style={{ top: '40rem', right: 'auto', left: '-25rem' }} src='https://rune.ai/images/RuneLogoPurpleHD.png' />
                    <img src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg" />
                </div>
            </main>
        </div>
    );
}