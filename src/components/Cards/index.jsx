import React from 'react'
import './card.css';
import ResultPresident from './ResultPresident';
import VoteCounting from './VoteCounting'

function Card({ type, voteCounting, date, time }) {
  return (
    <div className='card'>
      {type === "apuração" && <VoteCounting voteCounting={voteCounting} date={date} time={time} />}
    </div>
  )
}

export default Card