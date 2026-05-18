import Image from 'next/image';
import Link from 'next/link';
import type { GuideItem } from '../constants/guides';

interface GuideCardProps {
  guide: GuideItem;
}

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <article className="flex w-full">
      <Link
        href={guide.href}
        className="group relative flex min-h-[380px] w-full cursor-pointer flex-col overflow-visible rounded-lg p-0 shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0px_7px_8px_-4px_rgba(0,0,0,0.2),0px_12px_17px_2px_rgba(0,0,0,0.14),0px_5px_22px_4px_rgba(0,0,0,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db1521]"
        style={{
          background: 'linear-gradient(309.17deg, #C05AFF -1.27%, #4D73F8 94.92%)',
        }}
      >
        <div className="relative h-[220px] w-full">
          <Image
            src="/assets/guide/guidelogo.png"
            alt="logo"
            width={88}
            height={88}
            className="absolute top-[70px] left-[55px] h-[88px] w-[88px] object-contain"
          />
          <Image
            src={guide.icon}
            alt="guide image"
            width={117}
            height={117}
            className="absolute top-[120px] left-1/2 h-[117px] w-[117px] -translate-x-1/2 rounded object-contain"
          />
        </div>

        <div className="absolute right-4 bottom-4 left-4 flex h-[100px] items-center justify-center rounded-xl bg-white px-2">
          <p
            className="text-center text-xl font-semibold text-[#101828]"
            style={{
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            }}
          >
            {guide.title}
          </p>
        </div>
      </Link>
    </article>
  );
}
