import '../style/heroSection.css';

function HeroSection(){
    return(
        <main className="heroSection position-relative">
            <div className="heroSectionContent w-100 d-flex flex-column justify-content-center">
                <div className="buyItemHeroSection w-100 fw-bold d-flex flex-column justify-content-center align-items-center">
                    <p>Spider-Man Miles Morales PS5</p>

                    <a href='/#/detalhes' className="actionButton px-4 py-2">Comprar agora!</a>
                </div>

                <div className="navigateBetweenSectionCards mt-5 d-flex flex-row justify-content-center">
                    <div className="card"><i className="bi bi-star"></i> Destaques
                    </div>
                    <div className="card"><i className="bi bi-controller"></i> Consoles
                    </div>
                    <div className="card"><i className="bi bi-cash-coin"></i> Ofertas
                    </div>
                </div>
            </div>
            
            
        </main>
    )
}



export default HeroSection;