import React from 'react'
import { Grid, CircularProgress} from '@mui/material'
import { useSelector } from 'react-redux'

import Post from './Post/Post.jsx'
import styles from './postsStyles.js'

export default function Posts({ setCurrentId }) {
  const posts = useSelector(state => state.posts)
  // const classes = useStyles()

  console.log(posts)

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid sx={styles.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}

      </Grid>
    )
  )
}
