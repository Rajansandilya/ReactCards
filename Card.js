import React from 'react'

const Card = (props) => {
    return (
        <div>
             <div className="card">
  <img src={props.avatar} alt="Avatar" style={{width:'30%'}}/>
  <div className="container">
    <h4>{props.name}</h4> 
    <p>{props.title}</p>
    <input type="text" onChange={props.onChangeName} value={props.name}/>
     <p><button className="button button-red" onClick={props.onDelete}>Delete</button></p>
    <div>{props.children}</div> 
  </div>
</div> 
        </div>
    )
}

export default Card
