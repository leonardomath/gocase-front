import React from 'react'
import './style.css'

export default function UserMenu() {
  return (
    <section className="menu-left">
      <div className="avatar-user"></div>
      <ul className="options-menu">
        <li className="username">Leonardo</li>
        <li className="money">500 USD</li>
        <li>Editar Perfil</li>
        <li>Meu inventário</li>
        <li>Criar caixa</li>
        <li>Sair</li>
      </ul>

      <img className="logo" src="./img/GOCASE.png" />
    </section>
  )
}