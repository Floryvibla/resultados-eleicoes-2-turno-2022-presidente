import React from 'react'

function VoteCounting({ voteCounting="5,00", date="30/10/2022", time="14:24:30" }) {
  return (
    <div>
      <div style={{fontWeight: "bold", fontSize: 18}}> {voteCounting}% das seções apuradas </div>
      <div className='card-progressbar'>
        <div style={{width: `${voteCounting.replace(",", ".")}%`}} className='card-progressbar-result'/>
      </div>
      <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <span>Última atualização {date} {time} </span>
        <span className='refresh' 
          style={{padding: "5px 10px", backgroundColor: "#fddb54a3", borderRadius: 10, fontSize: 14, cursor: "pointer"}}
        >
          Atualizar
        </span>
      </div>
    </div>
  )
}

export default VoteCounting