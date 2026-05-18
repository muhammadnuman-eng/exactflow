import Link from 'next/link';

export default function BlogPostNotFound() {
  return (
    <div className="blogs_pageBg mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 pt-32 text-center">
      <h1 className="blogs_textPrimary text-2xl font-semibold">Article not found</h1>
      <p className="blogs_textMuted mt-4">
        The blog post you are looking for does not exist or may have been moved.
      </p>
      <Link
        href="/blog"
        className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-[#db1521] px-6 py-3 text-sm font-medium text-[#db1521] transition-colors hover:bg-[#db1521] hover:text-white"
      >
        Back to blogs
      </Link>
    </div>
  );
}
