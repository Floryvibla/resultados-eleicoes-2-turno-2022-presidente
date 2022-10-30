import React from 'react'
import './card.css'
import mapaImg from '../../assets/mapa.png'
import Avatar from './Avatar'

function ResultPresident({ percent, voteCounting }) {
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
          {voteCounting == "100" 
            ? parseFloat(percent?.lula.replace(',', ".")) > parseFloat(percent?.bolsonaro.replace(',', "."))
              ? <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                  <Avatar percent={percent?.lula} type="lula" />
                  <span
                    style={{fontSize: 18, marginTop: 30, fontWeight: "bold"}}
                  >
                    Lula vence eleição para ser o 39º presidente do Brasil
                  </span>
              </div> : <Avatar percent={percent?.bolsonaro} type="bolsonaro" />
            : <>
                <Avatar percent={percent?.lula} type="lula" />
                <span>VS</span>
                <Avatar percent={percent?.bolsonaro} type="bolsonaro" />
              </>
          }
        </div>
      </div>
    </div>
  )
}

export default ResultPresident