import React from "react";
function Card(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <a target="_blank" href="c1.jpg">
        <img src={props.imgURL} alt="kangarooms-Agartala" className="card-img-top" />
      </a>
      <div className="card-body">

        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          <a target="_blank" href="swimmingpool.png"><img src={props.director} alt="kangarooms-Agartala" style={{ width: "20px", height: "20px" }} className="class5" /></a> {props.heroName}<br />
          <a target="_blank" href="wifi.jpg"><img src={props.hero} alt="kangarooms-Agartala" style={{ width: "20px", height: "20px" }} className="class5" /></a>{props.heroName} <br />
          <a target="_blank" href="nobreakfast.jpg"><img src={props.heroine} alt="kangarooms-Agartala" style={{ width: "20px", height: "20px" }} className="class5" /></a>{props.breakfast} <br />
          <a target="_blank" href="lovethemes.webp"><img src={props.rating} alt="kangarooms-Agartala" style={{ width: "20px", height: "20px" }} className="class5" /></a>{props.theme} <br />
        </p>
        <pre>
          <a href="kangarooms-Book.html" className="btn btn-primary">Book</a> <button className="btn btn-primary" onClick="abc20()">Check-in</button> <button className="btn btn-primary" onClick="def20() ">Check-out</button>
        </pre>
      </div>
    </div>
  )
}
export default Card;