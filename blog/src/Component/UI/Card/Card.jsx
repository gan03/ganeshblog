import "./Card.css"
const Card = (props) => {
    return (
        <div className='card' {...props}>
            {props.children}
        </div>
    )
}

export default Card
