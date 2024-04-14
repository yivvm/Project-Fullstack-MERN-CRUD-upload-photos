import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';

import styles from './postStyles'

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // backgroundBlendMode: "darken",
  },
});

export default function Post({ post, setCurrentId }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  console.log("selected file: ", post.selectedFile)

  const imageURL = 'https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt1fba85432c25b789/63728282f9a34d1271d5dc86/tools-categories-XL_(2).jpg?crop=99.82p,100p,x0,y0&width=1050&height=591&auto=webp'  // for testing

  return (
    <Card sx={styles.card}>
      <CardMedia
        sx={styles.media}
        className={classes.media}
        image={post.selectedFile || imageURL}
        // image={imageURL}
        title={post.title}
      />
      <div sx={styles.overlay}>
        <Typography variant="h6">
          {post.creator}
        </Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div sx={styles.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div sx={styles.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography sx={styles.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions sx={styles.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small" /> 
          Like 
          {post.likeCount} 
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> 
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}
