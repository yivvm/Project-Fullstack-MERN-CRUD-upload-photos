import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import { useDispatch } from'react-redux'
import { getPosts } from './actions/posts.js'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import memories from './images/memories.png'
import styles from './styles.js'
import postsStyles from './components/Posts/postsStyles.js'
import formStyles from  './components/Form/formStyles.js'

function App() {
  const classes = styles()
  const postsClasses = postsStyles()
  const formClasses = formStyles()
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])


  return (
    <Container maxWidth="lg">
      <AppBar position='static' color='inherit' className={classes.appBar}>
        <Typography variant='h2' align='center' className={classes.heading}>Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts className={postsClasses.mainContainer} setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form className={formClasses.root} currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
