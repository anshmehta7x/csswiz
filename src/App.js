import './App.css';
import Canvas from './Canvas';
import Header from './Header';
import Switches from './Switches';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='MainBody'>
        <Canvas color='#808080'/>
        <Switches/>
      </div>
    </div>
  );
}

export default App;
