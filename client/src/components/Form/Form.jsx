import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@mui/material'
import FileBase64 from 'react-file-base64'
import { useDispatch, useSelector } from'react-redux'

import styles from './formStyles.js'
import { createPost, updatePost } from '../../actions/posts.js'

export default function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', tags: '', selectedFile: '' 
  })

  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

  const dispatch = useDispatch()

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper sx={styles.paper}>
      <form autoComplete='off' noValidate sx={`${styles.root} ${styles.form}`} onSubmit={handleSubmit}>
      <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
        <TextField name='creator' label='Creator' variant='outlined' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
        <TextField name='title' label='Title' variant='outlined' fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
        <TextField name='message' label='Message' variant='outlined' fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
        <TextField name='tags' label="Tags (coma separated)" variant='outlined' fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}/>
        <div sx={styles.fileInput}>
          <FileBase64 
            type='file'
            multiple={false}
            onDone={({ base64 }) => setPostData({...postData, selectedFile: base64 })}
          />
        </div>
        <Button variant='contained' sx={styles.submitButton} color='primary' size='large' type='submit' fullWidth>
          Submit
        </Button>
        <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  )
}
