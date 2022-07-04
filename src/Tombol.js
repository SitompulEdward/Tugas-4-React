import React from 'react'

export const Tombol = (props) => {
    const klik = () =>{
        alert(`Anda telah mengklik tombol ${props.nama}`)
    }
  return (
    <div>
        <button onClick={() => klik()}>{props.nama}</button>
    </div>
  )
}
