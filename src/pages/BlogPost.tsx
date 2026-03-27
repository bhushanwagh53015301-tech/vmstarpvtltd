import { Link, useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(item => item.slug === slug);

  if (!post) {
    return (
      <Layout>
        <Seo title="लेख सापडला नाही | VM Star ब्लॉग" description="तुम्ही शोधत असलेला लेख उपलब्ध नाही." />
        <section className="section-padding">
          <div className="container-custom text-center">
            <h1 className="font-heading text-3xl font-bold">लेख सापडला नाही</h1>
            <p className="text-muted-foreground mt-3">कृपया ब्लॉग पेजवर परत जा.</p>
            <Link to="/blog" className="inline-block mt-6 px-6 py-3 rounded-lg gradient-accent text-accent-foreground font-semibold">
              ब्लॉगकडे परत जा
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo title={`${post.title} | VM Star ब्लॉग`} description={post.excerpt} type="article" />
      <section className="gradient-navy px-4">
        <div className="container-custom max-w-3xl min-h-[240px] md:min-h-[280px] py-10 md:py-14 flex flex-col justify-center">
          <div>
            <p className="text-primary-foreground/70 text-xs tracking-[0.3em] uppercase mb-4">ब्लॉग</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">{post.title}</h1>
            <div className="flex flex-wrap gap-3 text-xs text-primary-foreground/70 mt-4">
              <span>{post.date}</span>
              <span>|</span>
              <span>{post.tags.join(', ')}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl space-y-6 text-foreground">
          <div className="rounded-3xl overflow-hidden border border-border shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              decoding="async"
              className="w-full h-72 md:h-96 object-cover object-top"
              style={{ objectPosition: 'center -36px' }}
            />
          </div>
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-base md:text-lg leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}

          <div className="bg-muted/60 border border-border rounded-2xl p-6">
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">कस्टम प्लॅन हवा आहे?</h3>
            <p className="text-muted-foreground mb-4">
              तुमच्या साइटसाठी सुरक्षा, हाऊसकीपिंग किंवा मनुष्यबळ गरजांबाबत आमच्या टीमशी संपर्क साधा.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/services" className="px-5 py-2.5 rounded-lg bg-foreground text-background font-semibold">
                सेवा पाहा
              </Link>
              <Link to="/contact" className="px-5 py-2.5 rounded-lg border border-foreground/20 text-foreground font-semibold">
                संपर्क करा
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
