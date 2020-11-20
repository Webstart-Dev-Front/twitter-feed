import React, { useEffect } from 'react'

const Header = (props) => {
  // MOUNT/UNMOUNT
  useEffect(() => {
    // on Mount
    console.log('MOUNTING')
    

    return () => {
      // on Unmount
      console.log('UNMOUNT')
    }
  }, [])

  // UPDATE
  useEffect(() => {
    console.log(props.tweets)
    console.log('NOUVEAU TWEET !')
  }, [props.tweets])

  if(props.tweets.length === 0) {
    return null
  }


  const user = props.tweets[0].user

  return (
    <div style={{ border: 'orange solid 5px' }}>
      <img src={user.profile_image_url} style={{ height: 50, width: 50 }} />
      <p>{user.description}</p>
    </div>
  )
}

export default Header
