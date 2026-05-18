import chatImg from '../../../../public/image/chat.avif'
import Image from "next/image";

export default function Chat() {
    return (
        <div>
             <div className="hidden xsm:flex fixed bottom-22 right-4 items-center justify-center z-50">
        <div className="relative animate-spin-slow">
          <svg className="w-23 h-32" viewBox="0 0 100 100">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              />
            </defs>
            <text className="text-[12px] font-[700] fill-[#ed0d0d] uppercase tracking-[0.1em]">
              <textPath href="#circlePath" startOffset="0">
                CONTACT • CONTACT • CONTACT •
              </textPath>
            </text>
          </svg>
        </div>
        <div className="absolute w-11 h-11 rounded-full overflow-hidden cursor-pointer bg-[#A78BFA] shadow-lg ">
          <Image
            src={chatImg}
            alt="support"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
        </div>
    )
}