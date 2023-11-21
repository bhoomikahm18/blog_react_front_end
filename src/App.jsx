import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Auth from './components/Auth.jsx'
import Blogs from './components/Blogs.jsx'
import UserBlog from './components/UserBlog.jsx'
import BlogDetail from './components/BlogDetail.jsx'
import AddBlog from './components/AddBlog.jsx'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/myBlogs' element={<UserBlog />} />
          <Route path='/myBlogs/:id' element={<BlogDetail />} />
          <Route path='/blogs/add' element={<AddBlog />} />
        </Routes>
      </main>
    </>
  )
}

export default App