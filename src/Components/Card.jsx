import React from 'react'

function Card(props) {
  return (
    <div className="col">
          <div className="card">
            <img src={props.img} className="card-img-top fix try" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.desc}</p>
            </div>
          </div>
    </div>
  )
}

export default Card
