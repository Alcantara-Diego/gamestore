import { Routes, Route} from 'react-router-dom';
import './style/style.css';
import Store from './Components/Store';
import MoreInfoDiv from './Components/MoreInfoDiv';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={ <Store/>}/>
        <Route path="detalhes" element={<MoreInfoDiv/>}/>
      </Routes>
    </div>
  );
}

export default App;
