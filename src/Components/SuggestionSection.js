import batmanGame from '../assets/gamesImages/batmanGame.jpg'
import tlowGame from '../assets/gamesImages/tlowGame.jpg'

function SuggestionSection(){

    return(
        <div className="suggestionSection">

            <h3 className="sectionTitle">Produtos similares</h3>



            <div className="cardsContainer suggestionCardsContainer">

                {/* THE LAST OF US 2 */}
                <div className="card suggestionCard">
                    <img src={tlowGame}  alt="."></img>      
                </div>

                {/* BATMAN ARKHAM KNIGHT */}
                <div className="card suggestionCard">
                    <img src={batmanGame}  alt="."></img>      
                </div> 



            </div>



        </div>
    )
}

export default SuggestionSection;