import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BLOG_API_URL || 'https://crm.shuprha.com/api/v1',
})

// If your real route differs, change only these two lines
export const getPosts = (params = {}) =>
  api.get('/blog/posts/', { params }).then((r) => r.data)

export const getPost = (slug) =>
  api.get(`/blog/posts/${slug}/`).then((r) => r.data)

export const formatDate = (d) =>
  new Date(d).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })