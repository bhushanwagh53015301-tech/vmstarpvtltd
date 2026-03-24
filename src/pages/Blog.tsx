import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => (
  <Layout>
    <Seo
      title="VM Star Blog | Security and Facility Management Insights"
      description="Expert tips on security services, housekeeping standards, and facility management across Maharashtra."
    />
    <section className="gradient-navy px-4">
      <div className="container-custom min-h-[260px] md:min-h-[300px] flex flex-col items-center justify-center">
        <div className="translate-y-10 text-center">
          <p className="text-primary-foreground/70 text-sm tracking-[0.25em] uppercase">Insights</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">
            Facility &amp; Security Knowledge Base
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mt-4">
            Practical guidance on security, housekeeping, manpower, and compliance.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map(post => (
          <article key={post.slug} className="group bg-card border border-border rounded-3xl overflow-hidden shadow-lg">
            <div className="relative h-44 bg-slate-100">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground">
                {post.date}
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 rounded-full bg-muted/80">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-5">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Read time: 4 min</span>
                <Link to={`/blog/${post.slug}`} className="text-accent font-semibold hover:underline">
                  Read more
                </Link>
              </div>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-emerald-400/60 via-accent/70 to-emerald-400/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;
