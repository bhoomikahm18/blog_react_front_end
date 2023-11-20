import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react';

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }

const AddBlog = () => {
  const [inputs, setInputs] = useState({
    title: "", description: "", imageURL: ""
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          border={3}
          borderColor={"green"}
          borderRadius={10}
          boxShadow={"10px 10px 20px #ccc"}
          padding={3}
          margin={"auto"}
          marginTop={3}
          display={"flex"}
          flexDirection={"column"}
          width={"80%"} >
          <Typography
            fontWeight={"bold"}
            padding={3}
            color={"grey"}
            variant='h2'
            textAlign={"center"}>Post your Blog</Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField name='title' onChange={handleChange} value={inputs.title} margin='auto' variant='outlined' />
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField name='description' onChange={handleChange} value={inputs.description} margin='auto' variant='outlined' />
          <InputLabel sx={labelStyles}>ImageURL</InputLabel>
          <TextField name='imageURL' onChange={handleChange} value={inputs.imageURL} margin='auto' variant='outlined' />
          <Button type='submit'>Submit</Button>
        </Box>
      </form>
    </div>
  )
}

export default AddBlog