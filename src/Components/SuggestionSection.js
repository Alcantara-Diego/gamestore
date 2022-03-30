import batmanGame from '../assets/gamesImages/batmanGame.jpg'
import tlou2Game from '../assets/gamesImages/tlou2Game.png'

import { useDispatch } from 'react-redux';
import { updateDetails } from '../actions/productsInfoAction'

function SuggestionSection(){

    const dispatch = useDispatch()

    return(
        <div className="suggestionSection">

            <h3 className="sectionTitle">Produtos similares</h3>



            <div className="cardsContainer suggestionCardsContainer">

                {/* THE LAST OF US 2 */}
                <div onClick={() => dispatch(updateDetails("tlou2"))} className="card suggestionCard">
                    <img src={tlou2Game}  alt="."></img>      
                </div>

                {/* BATMAN ARKHAM KNIGHT */}
                <div onClick={() => dispatch(updateDetails("batmanak"))} className="card suggestionCard">
                    <img src={batmanGame}  alt="."></img>      
                </div> 



            </div>



        </div>
    )
}

export default SuggestionSection;