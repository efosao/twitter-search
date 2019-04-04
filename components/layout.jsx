import React from 'react'
import Head from 'next/head'
import { Container, Grid, Header, Icon } from 'semantic-ui-react'

const Layout = ({ children }) => {
  return (
  <>
    <Head>
      <title>Twitter Test App</title>
      <link
        href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css'
        rel='stylesheet'
      />
    </Head>
    <Container style={{ marginTop: '3em' }}>
      <Header as='h1'>Code Test / Efosa O</Header>
      <Header as='h2' dividing><Icon color='blue' name='twitter' /> Twitter Search App</Header>
      <Grid columns={3} stackable>
        <Grid.Column>
          {children}
        </Grid.Column>
      </Grid>
    </Container>
  </>
  )
}

export default Layout
