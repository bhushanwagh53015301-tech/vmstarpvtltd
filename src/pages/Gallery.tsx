import Layout from '@/components/Layout';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Seo from '@/components/Seo';

const galleryModules = {
  ...(import.meta.glob('../assets/Gallery/*.{webp,WEBP,jpg,JPG,jpeg,JPEG,png,PNG}', {
    eager: true,
    import: 'default',
  }) as Record<string, string>),
  ...(import.meta.glob('../assets/gallery/*.{webp,WEBP,jpg,JPG,jpeg,JPEG,png,PNG}', {
    eager: true,
    import: 'default',
  }) as Record<string, string>),
};

const getExtensionPriority = (path: string) => {
  const extension = path.split('.').pop()?.toLowerCase();
  if (extension === 'webp') return 0;
  if (extension === 'jpg' || extension === 'jpeg') return 1;
  if (extension === 'png') return 2;
  return 3;
};

const getCanonicalImageName = (path: string) => {
  const fileName = path.split('/').pop() ?? path;
  return fileName.replace(/\.(webp|jpe?g|png)$/i, '').toLowerCase();
};

const galleryItems = Object.entries(galleryModules)
  .sort(([a], [b]) => {
    const nameCompare = getCanonicalImageName(a).localeCompare(getCanonicalImageName(b), undefined, { numeric: true });
    if (nameCompare !== 0) return nameCompare;
    return getExtensionPriority(a) - getExtensionPriority(b);
  })
  .filter(([path], index, entries) => {
    const currentName = getCanonicalImageName(path);
    return index === entries.findIndex(([otherPath]) => getCanonicalImageName(otherPath) === currentName);
  })
  .map(([path, src]) => ({
    src,
    name: getCanonicalImageName(path),
  }));

const housekeepingImages = galleryItems.filter((item) => item.name.startsWith('housekeeping'));
const securityImages = galleryItems.filter((item) => item.name.startsWith('security'));

const Gallery = () => {
  useScrollAnimation({ blur: false });

  const hasImages = galleryItems.length > 0;

  return (
    <Layout>
      <Seo
        title="Gallery | VM Star Private Limited"
        description="Explore photos of VM Star security and housekeeping operations across Maharashtra."
      />
      <section className="gradient-navy px-4">
        <div className="container-custom min-h-[260px] md:min-h-[300px] flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
              Gallery
            </h1>
            <p className="text-primary-foreground/75 text-lg max-w-3xl mx-auto">
              Moments from our security and facility operations across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {!hasImages ? (
            <p className="text-center text-muted-foreground">No gallery images found.</p>
          ) : (
            <div className="space-y-12">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 text-center animate-on-scroll">
                  Housekeeping
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-grid animate-on-scroll">
                  {housekeepingImages.slice(0, -1).map((item, index) => (
                    <div key={item.src}>
                      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm card-hover transition-transform duration-300 ease-out hover:scale-[1.01]">
                        <img
                          src={item.src}
                          alt={`Housekeeping image ${index + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-64 md:h-72 object-contain bg-muted/30 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 text-center animate-on-scroll">
                  Security
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-grid animate-on-scroll">
                  {securityImages.map((item, index) => (
                    <div key={item.src}>
                      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm card-hover transition-transform duration-300 ease-out hover:scale-[1.01]">
                        <img
                          src={item.src}
                          alt={`Security image ${index + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-64 md:h-72 object-contain bg-muted/30 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
