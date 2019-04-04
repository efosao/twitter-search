import Layout from '../components/layout'
import { Button, Input } from 'semantic-ui-react'

const Page = () => {
  return (
    <Layout>
      <>
        <div>
          <Input icon='at' iconPosition='left' placeholder='Search users...' />
          <Button>Search</Button>
        </div>

        <section>
          <p>Results</p>
        </section>
      </>
    </Layout>
  )
}

export default Page
