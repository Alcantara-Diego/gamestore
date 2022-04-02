import { useDispatch } from 'react-redux'
import { updateDetails } from '../actions/productsInfoAction'
import { scrollAnimation } from '../actions/animationAction'

function HeroSection(){

    const dispatch = useDispatch();
    
    return(
        <main className="heroSection position-relative">
            <div className="heroSectionContent w-100 d-flex flex-column justify-content-center">
                <div className="buyItemHeroSection w-100 fw-bold d-flex flex-column justify-content-center align-items-center">
                    <p>Spider-Man Miles Morales PS5</p>


                    <button onClick={() => dispatch(updateDetails("milesmorales"))} className="actionButton px-4 py-2">Comprar agora!</button>
                </div>

                <div className="navigateBetweenSectionCards mt-5 d-flex flex-row justify-content-center">
                    <div onClick={() => dispatch(scrollAnimation("highlightsSection"))} className="card"><i className="bi bi-star"></i> Destaques
                    </div>
                    <div onClick={() => dispatch(scrollAnimation("consolesSection"))}  className="card"><i className="bi bi-controller"></i> Consoles
                    </div>
                    <div onClick={() => dispatch(scrollAnimation("discountSection"))} className="card"><i className="bi bi-cash-coin"></i> Ofertas
                    </div>
                </div>
            </div>
            
            
        </main>
    )
}



export default HeroSection;