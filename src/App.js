// React
import { useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import './style/style.css'

// Components
import Store from './Components/Store'
import MoreInfoDiv from './Components/MoreInfoDiv'

// Redux, react-redux and reducers
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import root from './reducers/root'


const store = createStore(root);

function App() {

  // a time to the animations wait until the loading screen ends to run
  // const loadScreenDelay = 1.3;

  useEffect(() => {

    // gsap.from(".loadScreen", {duration: 1, delay: loadScreenDelay, opacity: 1, display: "flex"});
    // gsap.from(".navigateBetweenSectionCards", {duration: 1.4, delay: loadScreenDelay, opacity: .1, y: "40px"});
    // gsap.from(".buyItemHeroSection", {duration: 1.5, delay: loadScreenDelay+.5, opacity: 0, y: "80px"});
  }, []);



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













