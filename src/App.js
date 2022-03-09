import { Routes, Route} from 'react-router-dom';
import './style/style.css';
import Store from './Components/Store';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={ <Store/>}/>
      </Routes>
    </div>
  );
}

export default App;
