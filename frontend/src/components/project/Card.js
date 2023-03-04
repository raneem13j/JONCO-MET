import React from "react"
const Card = (props) => {
    const [colorP, setColorP] = React.useState(false);

    return (
        <div className="pcard-container">
            <div className="pcard" onClick={props.onClick} onMouseOver={() => setColorP(true)}
        onMouseOut={() => setColorP(false)}>
                
                        <img className="pcardimg" src={`../assets/Images/Projects/${props.image}`} alt={props.title}/>
           <br/>
            <p className="ptitle"
              style={{ textDecoration: colorP ? "rgb(206, 89, 89) 2px underline" : "none" }}
              >{props.title}</p>
            <p className="pfade">{props.type}</p>
            </div>
            
        </div>
    )
}

export default Card