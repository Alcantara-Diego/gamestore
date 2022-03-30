import Highlights from './Highlights';
import NewArrivals from './NewArrivals';

function FirstSection(props){
    return (
        <div className="section firstSection">
            <Highlights itemAddedToCart={props.itemAddedToCart} toggleCart={props.toggleCart}/>
            <NewArrivals toggleCart={props.toggleCart}/>
        </div>
    )
}

export default FirstSection;