import React from 'react'
import './style.css'
import Button from '../Button'

export default function Case(props) {
  return (
    <section className="case">
      <div className="caseBackground">
        <img className="gunCase" src={`./img/${props.gun}.png`} alt={props.gun} />
      </div>
      <div className="caseDescription">
        <h1>{props.gun} Case</h1>
        <h2>{props.price} USD</h2>
        <Button message="Abrir" />
      </div>
    </section>
  )
}