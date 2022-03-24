import Highlights from './Highlights';
import NewArrivals from './NewArrivals';

function FirstSection(props){
    return (
        <div className="section firstSection">
            <Highlights toggleCart={props.toggleCart}/>
            <NewArrivals/>
        </div>
    )
}

export default FirstSection;