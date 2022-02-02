import './styles/card.css'
import uniqid from 'uniqid';

const Cards = props =>{

    return (
        <div onClick={props.click}  className='container' key={props.keyProp}>
            <img key={props.text} name={props.nameProp}src={props.source} alt="img" />
        </div>
    )
}

export default Cards;