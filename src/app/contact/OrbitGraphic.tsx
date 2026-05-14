'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../../../public/image/logo.avif'

export const OrbitGraphic: React.FC = () => {
    // تصویر کے مطابق لائنوں پر سیٹ کرنے کے لیے ریڈیس (Radius) ایڈجسٹ کیے گئے ہیں
    const avatars = [
        { id: 1, src: 'assets/contact-images/img1.png', radius: 220, duration: 10, initialAngle: 0 },
        { id: 2, src: 'assets/contact-images/img2.png', radius: 220, duration: 10, initialAngle: 135 },

        { id: 3, src: 'assets/contact-images/img3.png', radius: 190, duration: 10, initialAngle: 60 },
        { id: 4, src: 'assets/contact-images/img4.png', radius: 190, duration: 10, initialAngle: 240 },

        { id: 5, src: 'assets/contact-images/img5.png', radius: 145, duration: 10, initialAngle: -45 },
        { id: 6, src: 'assets/contact-images/img6.png', radius: 145, duration: 10, initialAngle: 180 },
    ];

    return (
        <div className="relative w-full aspect-square max-w-[500px] lg:max-w-[550px] mx-auto flex items-center justify-center p-4 select-none overflow-visible bg-transparent">

            {/* ================= BACKGROUND CONCENTRIC SOLID WHITE RINGS ================= */}
            {/* Outer Ring */}
            <div className="absolute w-[440px] h-[440px] border-4 border-white rounded-full pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.5),inset_0_0_15px_rgba(255,255,255,0.2)]" />

            {/* Middle Ring */}
            <div className="absolute w-[380px] h-[380px] border-4 border-white rounded-full pointer-events-none shadow-[0_0_12px_rgba(255,255,255,0.4)]" />

            {/* Inner Ring */}
            <div className="absolute w-[290px] h-[290px] border-3 border-white rounded-full pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.3)]" />

            {/* ================= CENTRAL LOGO BRANDING MARKS ================= */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 w-28 h-28 backdrop-blur-md rounded-3xl flex items-center justify-center pointer-events-none select-none "
            >
                <div className="relative w-27 h-27 flex items-center justify-center">
                    <Image 
                        src={logo}
                        alt='logo'
                        className='w-27 h-27'
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20 transform scale-110">
                        {/* Custom elements if needed */}
                    </div>
                </div>
            </motion.div>

            {/* ================= PERFECT ANTI-CLOCKWISE REVERSE ORBIT SYSTEM ================= */}
            {avatars.map((avatar) => {
                return (
                    <motion.div
                        key={avatar.id}
                        className="absolute pointer-events-none flex items-center justify-center"
                        style={{
                            width: avatar.radius * 2,
                            height: avatar.radius * 2,
                        }}
                        animate={{ rotate: [avatar.initialAngle, avatar.initialAngle - 360] }}
                        transition={{
                            duration: avatar.duration,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        <div
                            className="absolute left-1/2 -translate-x-1/2"
                            style={{
                                top: 0,
                                transform: 'translate(-50%, -50%)', 
                            }}
                        >
                            <div className="p-1.5 rounded-full flex items-center justify-center">
                                <motion.div
                                    className="w-15 h-15 rounded-full overflow-hidden  shadow-md bg-white pointer-events-auto cursor-pointer flex items-center justify-center"
                                    animate={{ rotate: [-avatar.initialAngle, -(avatar.initialAngle - 360)] }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{
                                        rotate: {
                                            duration: avatar.duration,
                                            ease: "linear",
                                            repeat: Infinity,
                                        },
                                        scale: { duration: 0.15 }
                                    }}
                                >
                                    <img
                                        src={avatar.src}
                                        alt="ExactFlow Dynamic Sync Node"
                                        className="w-full h-full object-cover select-none pointer-events-none"
                                        loading="lazy"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};