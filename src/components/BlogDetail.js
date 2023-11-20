import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetail = () => {
  const id = useParams().id
  console.log(id);
  useEffect(() => { })
  return (
    <div>BlogDetail</div>
  )
}

export default BlogDetail