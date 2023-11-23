import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Blog from './Blog';

function UserBlog() {
  const [blogs, setBlogs] = useState();
  const id = localStorage.getItem("userID");

  async function sendRequest() {
    const res = await axios.get(`http://localhost:5000/api/blog/user/${id}`)
      .catch(err => console.log(err))
    const data = await res.data;
    return data;
  }

  useEffect(() => {
    sendRequest()
      .then((data) => setBlogs(data.user.blogs))
  }, [])
  console.log(blogs);

  return (
    <>
      {blogs && blogs.map((blog, index)=>(
        <Blog
        user={blog.user.name}
        description={blog.description}
        imageURL={blog.image}
        title={blog.title} />
      ))}
    </>
  )
}

export default UserBlog