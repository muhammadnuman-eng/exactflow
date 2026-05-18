import { notFound } from 'next/navigation';
import Chat from '@/app/components/chat/chat';
import { BlogPostBody } from '../components/BlogPostBody';
import { BlogPostHero } from '../components/BlogPostHero';
import { BLOG_POSTS, getBlogPostBySlug } from '../constants/blogs';
import { renderBlogContent } from '../content';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Blog | ExactFlow' };
  }

  return {
    title: `${post.title} | ExactFlow`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = renderBlogContent(slug, post);

  return (
    <div className="w-full bg-[#F4F5FA]">
      <article className="mx-auto max-w-[920px] px-4 pb-20 pt-28 md:px-6 md:pt-32">
        <BlogPostHero post={post} />
        <div className="blog-post-content mt-10 md:mt-12">
          <BlogPostBody>{content}</BlogPostBody>
        </div>
      </article>
      <Chat />
    </div>
  );
}
