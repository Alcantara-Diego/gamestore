import { Routes, Route} from 'react-router-dom'
import './style/style.css'

import Store from './Components/Store'
import MoreInfoDiv from './Components/MoreInfoDiv'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import detailsReducer from './reducers/productsInfoReducer'

const store = createStore(detailsReducer);

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
