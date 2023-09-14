import './App.css';
import Canvas from './Canvas';
import Header from './Header';

function App() {

  return (
    <div className="App">
      <Header/>
      <div className='MainBody'>
        <Canvas></Canvas> 
      </div>
    </div>
  );
}

export default App;
