

function LoadScreen(){
    return(
        <aside className="loadScreen">
            <h1>FlameStore🔥</h1>
            <h6>Seus games favoritos estão aqui!</h6>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </aside>
    )
}

export default LoadScreen;