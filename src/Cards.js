import './styles/card.css'
const Cards = props =>{

    return (
        <div className='container' key={props.key}>
            <img src={props.source} alt="img">
            </img>
            <span>{props.text}</span>
        </div>
    )

}

export default Cards;