import React from 'react'

import UserMenu from '../../components/UserMenu'
import LastRewards from '../../components/LastRewards'
import Search from '../../components/Search'
import Overlay from '../../components/Overlay'
import Case from '../../components/Case'

import './style.css'

export default function Market() {
  return (
    <>
    <Overlay />
      <UserMenu />
      <section className="market-container">
        <LastRewards />
        <section className="cases-container">
          <Search />
          <section className="cases">
            <Case gun="m4" price="100" />
            <Case gun="awp" price="120" />
            <Case gun="knife" price="500" />
          </section>
        </section>
      </section>
    </>
  );
}