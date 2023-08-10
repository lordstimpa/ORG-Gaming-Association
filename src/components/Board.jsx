import React from "react";
import Silhouette from "../assets/silhouette.png";

const Board = () => {
  return (
    <div className="CardContainer">
      <div className="Card">
        <img src={Silhouette}></img>
        <h2>Ordförande</h2>
        <p>Martin Norgren</p>
        <p>example.mail@hotmail.com</p>
      </div>
      <div className="Card">
        <img src={Silhouette}></img>
        <h2>Vice Ordförande</h2>
        <p>Rasmus Andersson</p>
        <p>example.mail@hotmail.com</p>
      </div>
      <div className="Card">
        <img src={Silhouette}></img>
        <h2>Kassör</h2>
        <p>Samuel Bergström</p>
        <p>example.mail@hotmail.com</p>
      </div>
      <div className="Card">
        <img src={Silhouette}></img>
        <h2>Sekreterare</h2>
        <p>Steven Dalfall</p>
        <p>steven.dalfall@live.se</p>
      </div>
    </div>
  );
};
export default Board;
