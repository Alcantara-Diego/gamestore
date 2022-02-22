import '../style/heroSection.css';

function HeroSection(){
    return(
        <main className="heroSection">
            <div className="heroSectionContent w-100 d-flex flex-column justify-content-center">
                <div className="buyItemHeroSection w-100 fw-bold d-flex flex-column justify-content-center align-items-center">
                    <p>Spider-Man Miles Morales</p>

                    <button className="px-4 py-2">Comprar agora!</button>
                </div>

                <div className="navigateBetweenSectionCards mt-5 d-flex flex-row justify-content-center">
                    <div className="card"><i className="bi bi-star"></i> Novo
                    </div>
                    <div className="card"><i className="bi bi-controller"></i> Jogos
                    </div>
                    <div className="card"><i className="bi bi-cash-coin"></i> Ofertas
                    </div>
                </div>
            </div>
            
            
        </main>
    )
}



export default HeroSection;