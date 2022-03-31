import { Routes, Route} from 'react-router-dom'
import './style/style.css'

import Store from './Components/Store'
import MoreInfoDiv from './Components/MoreInfoDiv'

import { Provider } from 'react-redux'

import { createStore } from 'redux'
import root from './reducers/root'

const store = createStore(root);

function App() {

  return (
    <div className="App">

      <Provider store={store}>
        <Routes>
            <Route path="/" element={<Store/>} />
            <Route path="detalhes" element={<MoreInfoDiv/>}/>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
