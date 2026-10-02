import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPost, formatDate } from '../lib/blogApi'
import './blog.css'

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [status, setStatus] = useState('loading') // loading | ok | notfound | error

  useEffect(() => {
    setStatus('loading')
    setPost(null)
    getPost(slug)
      .then((data) => {
        setPost(data)
        setStatus('ok')
      })
      .catch((err) =>
        setStatus(err.response?.status === 404 ? 'notfound' : 'error')
      )
  }, [slug])

  if (status === 'loading') {
    return (
      <p className="pt-32 px-6 max-w-3xl mx-auto text-muted-foreground">
        Loading...
      </p>
    )
  }

  if (status !== 'ok') {
    return (
      <section className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <meta name="robots" content="noindex" />
        <h1 className="text-3xl font-bold mb-4">
          {status === 'notfound' ? 'Post not found' : 'Something went wrong'}
        </h1>
        <Link to="/blog" className="text-accent">Back to blog</Link>
      </section>
    )
  }

  const url = post.canonical_url || `${window.location.origin}/blog/${post.slug}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.meta_description,
    image: post.featured_image || undefined,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: { '@type': 'Person', name: post.author?.name },
    publisher: {
      '@type': 'Organization',
      name: 'Shuprha',
      logo: { '@type': 'ImageObject', url: `${window.location.origin}/logo.png` },
    },
    mainEntityOfPage: url,
  }

  return (
    <article className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
      <title>{post.meta_title}</title>
      <meta name="description" content={post.meta_description} />
      <link rel="canonical" href={url} />
      {post.noindex && <meta name="robots" content="noindex" />}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.meta_title} />
      <meta property="og:description" content={post.meta_description} />
      <meta property="og:url" content={url} />
      {post.featured_image && (
        <meta property="og:image" content={post.featured_image} />
      )}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>

      <Link
        to="/blog"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← Back to blog
      </Link>

      {post.category && (
        <p className="text-accent text-xs font-semibold uppercase tracking-wide mt-8 mb-3">
          {post.category.name}
        </p>
      )}
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
        {post.title}
      </h1>
      <p className="text-muted-foreground text-sm mb-8">
        By {post.author?.name} | {formatDate(post.published_at)} | {post.reading_time_minutes} min read
      </p>

      {post.featured_image && (
        <img
          src={post.featured_image}
          alt={post.featured_image_alt}
          className="w-full rounded-2xl mb-10"
        />
      )}

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {post.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-10">
          {post.tags.map((t) => (
            <span
              key={t.slug}
              className="text-xs border border-border rounded-full px-3 py-1 text-muted-foreground"
            >
              {t.name}
            </span>
          ))}
        </div>
      )}

      {post.related_posts?.length > 0 && (
        <div className="mt-16 pt-10 border-t border-border">
          <h2 className="text-2xl font-semibold mb-6">Related posts</h2>
          <div className="grid gap-4">
            {post.related_posts.map((r) => (
              <Link
                key={r.id}
                to={`/blog/${r.slug}`}
                className="bg-card border border-border rounded-xl p-5 hover:border-accent transition-colors"
              >
                <h3 className="font-semibold mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-sm">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}