import React from 'react'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
  <>
    <Head>
      <title>Twitter Test App</title>
    </Head>
    {children}
  </>
  )
}

export default Layout
