import React from 'react'
import { Banner } from './Banner'
import { TopSeller } from './TopSeller'
import Recommmened from './Recommmened'
import News from './News'

export const Home = () => {
  return (
    <>
      <Banner />
      <TopSeller />
      <Recommmened />
      <News/>
    </>
  )
}
