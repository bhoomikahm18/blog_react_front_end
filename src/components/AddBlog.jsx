import React, { useState } from 'react';
import { Box, Button, Typography, InputLabel, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './utils';

const labelStyle = { mb: 1, mt: 2, fontSize: '24px', fontWeight: 'bold' }

function AddBlog() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "", description: "", imageURL: ""
  })

  function handleChange(e) {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    })
    );
  }

  async function sendRequest() {
    const res = await axios.post(`http://localhost:5000/api/blog/add`, {
      title: inputs.title,
      description: inputs.description,
      image: inputs.imageURL,
      user: localStorage.getItem("userID")
    }).catch(err => console.log(err))
    const data = await res.data;
    return data;
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then(data => console.log(data))
      .then(() => navigate("/blogs"))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          border={3}
          borderColor='linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,19,121,1) 0%, rgba(0,212,255,1) 100%)'
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          marginTop={3}
          display='flex'
          flexDirection={'column'}
          width={"80%"}
        >
          <Typography
            className={classes.font}
            fontWeight={'bold'}
            padding={3}
            color="grey"
            variant='h2'
            textAlign='center'>Post Your Blog</Typography>
          <InputLabel className={classes.font} sx={labelStyle}>Title</InputLabel>
          <TextField name='title' onChange={handleChange} value={inputs.title} margin='auto' variant='outlined' />
          <InputLabel className={classes.font} sx={labelStyle}>Description</InputLabel>
          <TextField name='description' onChange={handleChange} value={inputs.description} margin='auto' variant='outlined' />
          <InputLabel className={classes.font} sx={labelStyle}>Image</InputLabel>
          <TextField name='imageURL' onChange={handleChange} value={inputs.imageURL} margin='auto' variant='outlined' />
          <Button type="submit" sx={{ mt: 2, borderRadius: 4 }} variant='contained' color='warning'>Submit</Button>
        </Box>
      </form>
    </div>
  )
}

export default AddBlog