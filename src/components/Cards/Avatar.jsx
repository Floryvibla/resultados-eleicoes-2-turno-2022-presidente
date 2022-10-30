import React from 'react'
import imgLula from '../../assets/lula.jpeg'

function Avatar({ type, percent=30 }) {
  return (
    <div className='avatar'>
        <img 
            src={type === "lula"
                ? imgLula
                : "https://resultados.tse.jus.br/oficial/ele2022/545/fotos/br/280001618036.jpeg"
            }
            style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "100%", objectPosition: type === "lula" ? "0px 30%" : "0px 10%"}}
        />
        <span style={{backgroundColor: type === "lula" ? "#940e0e" : "#05085a"}} className='percent-info'>
            {percent}<span style={{fontSize: 16}}>%</span>
        </span>
    </div>
  )
}

export default Avatar