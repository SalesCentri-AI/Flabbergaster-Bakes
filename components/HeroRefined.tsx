"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export function HeroRefined() {
    const images = [
        "/hero_raspberry_cake.png",
        "/hero_vanilla.png",
        "/hero_chocolate.png",
        "/hero_strawberry.png",
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [images.length])

    return (
        <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">
            {/* Multi-Image Slideshow Background */}
            <div className="absolute inset-0 z-0">
                {images.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={src}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-cover object-center scale-105"
                            priority={index === 0}
                        />
                    </div>
                ))}
                {/* Elegant Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F3E8E2]/90 via-[#F3E8E2]/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-black/5 z-10" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <div className="max-w-2xl">
                    <div className="overflow-hidden mb-6">
                        <span className="text-[#D98C8C] font-bold tracking-[0.4em] uppercase text-[10px] block animate-in slide-in-from-bottom-full duration-700">
                            Artisan Patisserie
                        </span>
                    </div>

                    <h1 className="title-script text-[#1A0F0A] mb-8 leading-[0.85] animate-in fade-in slide-in-from-left-20 duration-1000 delay-100">
                        Flabbergaster Bakes
                    </h1>

                    <p className="font-serif text-xl lg:text-2xl text-[#2A1810]/80 mb-14 leading-relaxed italic font-medium max-w-lg animate-in fade-in slide-in-from-left-10 duration-1000 delay-300">
                        Lovingly handcrafted cakes and pastries, made for your most precious moments.
                    </p>

                    <div className="flex flex-wrap gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
                        <Link href="#menu" className="btn-premium">
                            Explore Our Menu
                        </Link>
                        <Link href="#about" className="btn-glass">
                            Our Story
                        </Link>
                    </div>
                </div>
            </div>

            {/* Refined floating scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce shrink-0 z-20">
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#1A0F0A] font-extrabold drop-shadow-sm">Scroll</span>
                <div className="w-[1.5px] h-12 bg-gradient-to-b from-[#1A0F0A] via-[#1A0F0A]/40 to-transparent" />
            </div>

            {/* Subtle organic shapes */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#D98C8C]/5 blur-[120px] rounded-full pointer-events-none z-10" />
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#E5D5CB]/20 blur-[100px] rounded-full pointer-events-none z-10" />
        </section>
    )
}
