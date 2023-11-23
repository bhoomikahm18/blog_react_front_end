import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useStyles } from './utils';

function Blog(props) {
  const classes = useStyles();
  const navigate = useNavigate();

  function handleEdit(e) {
    navigate(`/myBlogs/${props.id}`)
  }
  async function deleteRequest() {
    const res = await axios.delete(`http://localhost:5000/api/blog/${props.id}`)
      .catch(err => console.log(err))
    const data = await res.data;
    return data;
  }
  function handleDelete() {
    deleteRequest().then(() => navigate("/")).then(() => navigate("/blogs"))
  }
  return (
    <Card sx={{
      width: '40%', margin: 'auto', mt: 2, padding: 2, boxShadow: "5px 5px 10px #ccc",
      ":hover": {
        boxShadow: "10px 10px 20px #ccc"
      }
    }}>

      {props.isUser && (
        <Box display='flex'>
          <IconButton onClick={handleEdit} sx={{ marginLeft: 'auto' }}><EditIcon color='warning' /></IconButton>
          <IconButton onClick={handleDelete}><DeleteForeverIcon color='error' /></IconButton>
        </Box>
      )}
      <CardHeader
        avatar={
          <Avatar className={classes.font} sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.user ? props.user.charAt(0) : ""}
          </Avatar>
        }

        title={props.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.imageURL}
        alt="Paella dish"
      />
      <CardContent>
        <hr />
        <br />
        <Typography className={classes.font} variant="body2" color="text.secondary">
          <b>{props.user}</b>{":"}{props.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Blog