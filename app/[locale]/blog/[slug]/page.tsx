import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/get-blog-posts";
import { getBaseUrl, getCanonicalUrl, getAlternateLanguages } from "@/lib/config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPostBySlug(slug, locale);
  const baseUrl = getBaseUrl();

  if (!post) {
    const t = await getTranslations({ locale, namespace: "common" });
    return {
      title: `${t("notFound")} | Article Not Found | Myanmar Casino Reviews`,
    };
  }

  const path = `/blog/${post.slug}`;
  const canonical = getCanonicalUrl(path, locale);

  return {
    title: `${post.title} | Myanmar Casino Reviews`,
    description: post.excerpt,
    robots: { index: false, follow: true },
    alternates: {
      canonical,
      languages: getAlternateLanguages(path),
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      url: canonical,
      publishedTime: post.publishDate,
      authors: [post.author],
      images: post.featuredImage ? [{
        url: post.featuredImage.startsWith('http') ? post.featuredImage : `${baseUrl}${post.featuredImage}`,
        alt: post.title
      }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const baseUrl = getBaseUrl();
  const post = getBlogPostBySlug(slug, locale);
  const blogPostsData = getBlogPosts(locale);
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const tBlog = await getTranslations({ locale, namespace: "blog" });

  if (!post) {
    notFound();
  }

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.publishDate,
    "dateModified": post.lastModified,
    "image": post.featuredImage ? (post.featuredImage.startsWith('http') ? post.featuredImage : `${baseUrl}${post.featuredImage}`) : undefined,
    "inLanguage": locale === "my" ? "my-MM" : "en-US"
  };

  // Related posts
  const relatedPosts = blogPostsData
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">{tCommon("home")}</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gold">{tBlog("heading")}</Link>
          <span>/</span>
          <span className="text-white">{post.title}</span>
        </nav>

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-gold">{post.title}</span>
        </h1>

        {/* 文章資訊 */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.publishDate}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span className="text-gold">{post.category}</span>
        </div>

        {/* 特色圖片 */}
        {post.featuredImage && (
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* 文章內容 */}
        <article className="prose prose-invert max-w-none mb-8">
          <div className="bg-dark-lighter rounded-xl p-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              {post.excerpt}
            </p>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6 mt-6">
            <h2 className="text-2xl font-bold text-white mb-4">{tBlog("aboutArticle")}</h2>
            {post.content_html ? (
              <div
                className="blog-content text-gray-300 leading-relaxed [&_.headsingle]:hidden [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-3 [&_p]:mb-4 [&_img]:max-w-full [&_img]:rounded-lg [&_img]:my-4"
                dangerouslySetInnerHTML={{ __html: post.content_html }}
              />
            ) : (
              <p className="text-gray-300 leading-relaxed">
                {post.content || `${post.title} ${tBlog("fullArticle")}`}
              </p>
            )}
          </div>

          {/* 標籤 */}
          <div className="flex flex-wrap gap-2 mt-6">
            {(Array.isArray(post.tags) ? post.tags : []).map((tag: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-dark-lighter rounded-full text-sm text-gray-300 border border-dark-lightest"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* 相關文章 */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-white mb-6">{tBlog("relatedArticles")}</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedPosts.map((relatedPost: any) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-dark-lighter rounded-xl overflow-hidden hover:border-gold/50 border border-dark-lightest transition-all"
                >
                  {relatedPost.featuredImage && (
                    <div className="relative w-full h-32">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-white font-bold mb-1 line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-gray-400 text-xs">{relatedPost.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </div>
    </div>
  );
}

