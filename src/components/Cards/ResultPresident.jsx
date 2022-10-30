import React from 'react'
import './card.css'
import mapaImg from '../../assets/mapa.png'
import Avatar from './Avatar'

function ResultPresident({ percent }) {
  return (
    <div
      style={{width: "100%", margin: "20px 0px"}}
    >
      <div className='bg-map'>
        <img 
          src={mapaImg}
          className='img-map'
        />
        <div className='wrapper-avatar'>
          <Avatar percent={percent?.lula} type="lula" />
          <span>VS</span>
          <Avatar percent={percent?.bolsonaro} type="bolsonaro" />
        </div>
      </div>
    </div>
  )
}

export default ResultPresident