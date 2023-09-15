import './App.css';
import Canvas from './Canvas';
import Header from './Header';
import Output from './Output';

function App() {

  return (
    <div className="App">
      <Header/>
      <div className='MainBody'>
        <Canvas></Canvas>
        <Output></Output>
      </div>
    </div>
  );
}

export default App;
