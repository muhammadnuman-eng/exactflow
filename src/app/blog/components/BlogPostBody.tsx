import type { ReactNode } from 'react';

interface BlogPostBodyProps {
  children: ReactNode;
}

export function BlogPostBody({ children }: BlogPostBodyProps) {
  return (
    <div
      className="prose max-w-none prose-[--tw-prose-bullets:#000000] dark:prose-invert
        prose-headings:font-semibold prose-headings:text-[#051441] prose-headings:tracking-normal
        prose-h1:mb-0 prose-h1:mt-2 prose-h1:text-[28px] prose-h1:leading-tight  md:prose-h1:text-[30px] prose-h1:font-[600] prose-h1:text-[#423B50]
        prose-h2:mb-3 prose-h2:mt-8 prose-h2:text-[22px] md:prose-h2:text-[26px]
        prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-lg md:prose-h3:text-xl
        prose-p:mb-4 prose-p:mt-0.5 prose-p:text-[15px] prose-p:font-[400] prose-p:leading-[1.5] prose-p:text-[#424242] prose-p:[font-family:var(--font-montserrat),_'Montserrat',_sans-serif]
        prose-li:text-[15px] prose-li:leading-normal prose-li:text-[#424242] prose-li:marker:text-black
        prose-a:font-normal prose-a:text-blue-600 prose-a:underline
        prose-strong:text-[#051441]
        prose-img:my-8 prose-img:w-full prose-img:max-w-none prose-img:rounded-xl
        prose-table:text-sm prose-th:border prose-th:border-[#ccc] prose-th:p-2 prose-th:font-semibold
        prose-td:border prose-td:border-[#ccc] prose-td:p-2 prose-td:align-top"
      style={{
        fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
      }}
    >
      {children}
    </div>
  );
}
