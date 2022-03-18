import { Routes, Route} from 'react-router-dom';
import './style/style.css';
import Store from './Components/Store';
import MoreInfoDiv from './Components/MoreInfoDiv';

import tlowGame from './assets/gamesImages/tlowGame.jpg'
import milesmorales from './assets/heroSpiderman.jpg'

function App() {

  function updateDetailsPage(code){
    console.log("working")

    setTimeout(()=>{
      let name = document.getElementById("productName");
      let price = document.getElementById("productPrice");
      let image = document.getElementById("productImageId");
      switch (code){
        case "milesmorales":
          name.innerHTML= "Spider-Man Miles Morales";
          price.innerHTML= "R$420,00";
          console.log(image)
          image.style.backgroundImage=`url(${milesmorales})`
          break

        default:
          console.log("error");
      }
    }, 1000);
    
  }
  return (
    <div className="App">

      <Routes>
        {/* <Route updateDetailsPage={updateDetailsPage} path="/" element={ <Store/>}/> */}
        <Route path="/" element={<Store updateDetailsPage = {updateDetailsPage} />} />
        <Route path="detalhes" element={<MoreInfoDiv/>}/>
      </Routes>
    </div>
  );
}

export default App;
