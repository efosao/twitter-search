/* global fetch */
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { useRef, useState } from 'react'
import { Image, Input, List } from 'semantic-ui-react'
import Layout from '../components/layout'

// setup date/time formatter.
TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

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
  const [ loading, setLoading ] = useState(false)
  const [ tweets, setTweets ] = useState([])
  const inputRef = useRef()

  const searchUserTimeline = async () => {
    const username = inputRef.current.value
    setLoading(true)
    const result = await getUserTimeline(username)
    setLoading(false)
    const { tweets = [] } = result
    setTweets(tweets)
  }

  const searchOnEnter = e => {
    if (e.which === 13) searchUserTimeline()
  }

  const tweetsBlock = tweets.map(t => (
    <List.Item>
      <Image avatar src={t.user.profile_image_url_https} />
      <List.Content>
        {t.in_reply_to_screen_name &&
          <List.Header as='a'>RE: {t.in_reply_to_screen_name}</List.Header>}
        <List.Description>
        Last seen watching{' '}
          <a>
            <b>{t.text}</b>
          </a>{' '}
          {timeAgo.format(new Date(t.created_at))}.
        </List.Description>
      </List.Content>
    </List.Item>
  ))

  return (
    <Layout>
      <>
        <div>
          <Input
            action={{ content: 'Search', onClick: searchUserTimeline }}
            icon='at'
            iconPosition='left'
            input={() => <input onKeyUp={searchOnEnter} ref={inputRef} />}
            loading={loading}
            placeholder='Search users...'
          />
        </div>

        <section>
          <List relaxed>
            {tweetsBlock}
          </List>
        </section>
      </>
    </Layout>
  )
}

export default Page
