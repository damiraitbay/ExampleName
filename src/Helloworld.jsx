import './Helloworld.css'
function Helloworld(props){
    return(
        <div style={{
            backgroundColor: 'blue'
        }}>
            <h1>Аты: {props.name} </h1>
            <img src={props.image} alt=""/>
            <p>Жасы: {props.age} </p>
            <p>Бойы: {props.height}</p>
            <p>ИИН: {props.id}</p>
        </div>
    )
}

export default Helloworld