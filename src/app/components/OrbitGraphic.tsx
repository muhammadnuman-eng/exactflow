'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AVATARS = [
  { id: 1, src: '/assets/contact-images/img1.png', radius: 220, duration: 10, initialAngle: 0 },
  { id: 2, src: '/assets/contact-images/img2.png', radius: 220, duration: 10, initialAngle: 135 },
  { id: 3, src: '/assets/contact-images/img3.png', radius: 190, duration: 10, initialAngle: 60 },
  { id: 4, src: '/assets/contact-images/img4.png', radius: 190, duration: 10, initialAngle: 240 },
  { id: 5, src: '/assets/contact-images/img5.png', radius: 145, duration: 10, initialAngle: -45 },
  { id: 6, src: '/assets/contact-images/img6.png', radius: 145, duration: 10, initialAngle: 180 },
] as const;

export function OrbitGraphic() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[500px] items-center justify-center overflow-visible bg-transparent p-4 select-none lg:max-w-[550px]">
      <motion.div className="pointer-events-none absolute h-[440px] w-[440px] rounded-full border-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.5),inset_0_0_15px_rgba(255,255,255,0.2)]" />
      <div className="pointer-events-none absolute h-[380px] w-[380px] rounded-full border-4 border-white shadow-[0_0_12px_rgba(255,255,255,0.4)]" />
      <div className="pointer-events-none absolute h-[290px] w-[290px] rounded-full border-3 border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 flex h-28 w-28 items-center justify-center rounded-3xl backdrop-blur-md select-none"
      >
        <Image
          src="/image/logo.avif"
          alt="ExactFlow"
          width={108}
          height={108}
          className="h-27 w-27"
        />
      </motion.div>

      {AVATARS.map((avatar) => (
        <motion.div
          key={avatar.id}
          className="absolute flex items-center justify-center pointer-events-none"
          style={{ width: avatar.radius * 2, height: avatar.radius * 2 }}
          animate={{ rotate: [avatar.initialAngle, avatar.initialAngle - 360] }}
          transition={{ duration: avatar.duration, ease: 'linear', repeat: Infinity }}
        >
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: 0, transform: 'translate(-50%, -50%)' }}
          >
            <motion.div
              className="flex h-15 w-15 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white shadow-md pointer-events-auto"
              animate={{ rotate: [-avatar.initialAngle, -(avatar.initialAngle - 360)] }}
              whileHover={{ scale: 1.1 }}
              transition={{
                rotate: { duration: avatar.duration, ease: 'linear', repeat: Infinity },
                scale: { duration: 0.15 },
              }}
            >
              <Image
                src={avatar.src}
                alt="ExactFlow team"
                width={60}
                height={60}
                className="h-full w-full object-cover select-none pointer-events-none"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
