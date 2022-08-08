import './App.css'
import AddPostForm from './components/AddPost'
import PostList from './components/PostList'
import SinglePostPage from './components/SinglePostPage'
import Layout from './components/Layout'
import { Routes, Route, Navigate } from 'react-router-dom'
import EditPostForm from './components/EditPostForm'
import UsersList from './features/users/UserList'
import UserPage from './features/users/UserPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        {/* Catch all - replace with 404 component if you want */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
