import '../src/App.css';
import Navbar from '../src/components/navbar/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <main className='content'>
        <div className='about'>
          <h1>Welcome!</h1>
          <p>
            I am Levente Batóg and this is my personal page. Currently there isn't much to see but feel free to look around.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
