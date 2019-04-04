/* global fetch */
import Layout from '../components/layout'
import { Button, Input } from 'semantic-ui-react'

const getUserTimeline = async username => {
  try {
    const result = await fetch(`/api/search/${username}`)
    if (result.ok) return await result.json()
    else return { error: `${result.statusText} (${result.status})` }
  } catch (e) {
    return { error: e.message }
  }
}

const Page = () => {
  const searchUserTimeline = async () => {
    console.log(await getUserTimeline('efosa'))
  }

  return (
    <Layout>
      <>
        <div>
          <Input icon='at' iconPosition='left' placeholder='Search users...' />
          <Button onClick={searchUserTimeline}>Search</Button>
        </div>

        <section>
          <p>Results</p>
        </section>
      </>
    </Layout>
  )
}

export default Page
