import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';

const thStyle: CSSProperties = {
  border: '1px solid #ccc',
  padding: '8px 12px',
  textAlign: 'left',
  fontWeight: 600,
  background: 'transparent',
};

const tdStyle: CSSProperties = {
  border: '1px solid #ccc',
  padding: '8px 12px',
  verticalAlign: 'top',
};

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="!text-blue-600 !underline dark:!text-blue-400"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export function BlogContentImage({
  src,
  alt,
  className = 'my-6 h-auto w-full rounded-lg',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <span className="not-prose block w-full">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        sizes="(max-width: 920px) 100vw, 920px"
        className={className}
      />
    </span>
  );
}

export function BlogContentTags({ tags }: { tags: readonly string[] }) {
  return (
    <div className="not-prose mt-8 flex flex-wrap gap-2.5" role="list">
      {tags.map((tag) => (
        <span
          key={tag}
          role="listitem"
          className="inline-flex items-center rounded-full border border-[#db1521] px-3 py-0.5 text-[13px] font-medium text-[#db1521]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export { thStyle, tdStyle };
