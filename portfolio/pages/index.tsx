import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'

const index = () => {
  return (
    <div>
      <Head>
        <title>Espens portfolio</title>
      </Head>
      <Navbar />
    </div>
  )
}

export default index