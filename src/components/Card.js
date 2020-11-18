import React from "react";

export default function Card(props) {
  

  return (
    <article className="card">
      <div className="card__info">
        <div className="card__name">Author: {props.author} ({props.id})</div>
        <div className="card__artist">reads: {props.reads}</div>
      </div>
    </article>
  );
}
