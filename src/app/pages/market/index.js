import React from 'react'

import UserMenu from '../../components/UserMenu'
import LastRewards from '../../components/LastRewards'
import Search from '../../components/Search'

import './style.css'

export default function Market() {
  return (
    <>
      <UserMenu />
      <section className="market-container">
        <LastRewards />
        <section className="cases-container">
          <Search />
          <h1>Market</h1>
          <h1>dasd</h1>
        </section>
      </section>
    </>
  );
}