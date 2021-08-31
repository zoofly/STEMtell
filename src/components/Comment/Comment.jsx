import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Comment.css';
import {Container, Card, TextField, Box, Avatar, Button} from '@material-ui/core';
//Add reducer and stuff here


function Comment() {

    return(
        <Container className='GeneralCommentContainer'>
            <Box id='GeneralCommentInput'>
             <TextField 
            fullWidth='true'
            placeholder='Comment...'
            multiline
            rows={3}
            //value=
            //OnChange=
            //Handleonsubmit?
            />
            <section className='BtnsforCommenting'>
            <Button className='CancelCommentBtn'>Cancel</Button>
            <Button className='CommentBtn'> Comment </Button>
            
            </section>
            
            </Box>
        
            <Card 
            className='GeneralCommentCard'
            variant= 'outlined'
            >

            <h6 
            className='CommentCardHeader'
            > 
            Comments 
            </h6>   

            <section 
            className='GeneralCommentSection'
            >
           
            <div 
            className='CommentProfilePicAndName'
            >
            <Avatar
            id='GeneralCommentAvatar'
            >
            </Avatar> 
            <span className='CommentUserName'>
                <h5> Commenter's Name </h5>
            </span>
            <span className='CommentDate'> 
                <p> Aug 28th, 2020 </p>
            </span>
            
            </div>
            

            <p 
            className='CommentText'
            > 
            This is a general comment from a user. 
            </p>
            </section>

            </Card>
        </Container>

    )
}


export default Comment;