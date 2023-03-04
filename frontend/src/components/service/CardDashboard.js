
import "./CardDashboard.css";
import edit from "../../assets/assets/Icons/icons8-create-64.png"
export default function Card(props) {
  

  return (
    <>
    {/* {console.log("props ",props)} */}
    <div
      className="section"
     
      data-content={props.title}
      data-description={props.description}
    >
       <img
          src={`../assets/Images/Services/${props.image}`}
          className="cover"
          alt={props.title}
        />
      <div className="card" >
        <div className="card-content">
          <p className="card-description">
            {props.description}
          </p>
          <p className= "card-title">
            {props.title}
          </p>
        </div>
    </div> 
           <button className="gclose" onClick={props.onEdit} >
              <img src={edit} alt="" />
            </button>
      </div>

    </>
  );
}