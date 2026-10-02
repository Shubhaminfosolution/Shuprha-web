import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getPosts, formatDate } from '../lib/blogApi'

export default function Blog() {
  const [params, setParams] = useSearchParams()
  const page = Number(params.get('page')) || 1
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    setData(null)
    setError(false)
    getPosts({ page })
      .then(setData)
      .catch(() => setError(true))
  }, [page])

  const goTo = (p) => {
    setParams({ page: p })
    window.scrollTo(0, 0)
  }

  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <title>Blog | Shuprha</title>
      <meta
        name="description"
        content="Digital marketing tips, strategies and insights from the Shuprha team."
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-3">Blog</h1>
      <p className="text-muted-foreground mb-12">
        Insights on digital marketing, branding and growth.
      </p>

      {error && (
        <p className="text-muted-foreground">
          Could not load posts right now. Please try again later.
        </p>
      )}
      {!data && !error && <p className="text-muted-foreground">Loading...</p>}
      {data && data.results.length === 0 && (
        <p className="text-muted-foreground">No posts yet. Check back soon.</p>
      )}

      {data && data.results.length > 0 && (
        <>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.results.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-accent transition-colors flex flex-col"
              >
                {post.featured_image && (
                  <img
                    src={post.featured_image}
                    alt={post.featured_image_alt}
                    loading="lazy"
                    className="w-full h-52 object-cover"
                  />
                )}
                <div className="p-6 flex flex-col flex-1">
                  {post.category && (
                    <span className="text-accent text-xs font-semibold uppercase tracking-wide mb-2">
                      {post.category.name}
                    </span>
                  )}
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {formatDate(post.published_at)} | {post.reading_time_minutes} min read
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {(data.previous || data.next) && (
            <div className="flex justify-between mt-12">
              <button
                disabled={!data.previous}
                onClick={() => goTo(page - 1)}
                className="px-5 py-2 rounded-full border border-border disabled:opacity-30 hover:border-accent transition-colors"
              >
                Previous
              </button>
              <button
                disabled={!data.next}
                onClick={() => goTo(page + 1)}
                className="px-5 py-2 rounded-full border border-border disabled:opacity-30 hover:border-accent transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </section>
  )
}