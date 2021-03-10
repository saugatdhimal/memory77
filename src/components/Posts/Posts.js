import React from 'react'
import Post from './Post/Post'
import useStyles from './style'
import { useSelector } from 'react-redux'
import { Grid , CircularProgress } from "@material-ui/core"

function Posts({ setCurrentId }) {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts)
    
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid container 
            className={classes.container}
            alignItems='stretch'
            spacing={3}
            >
                {
                    posts.map((post) => (
                        <Grid item key={post._id} xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts
