"use client"

import { NavbarRefined } from "@/components/NavbarRefined"
import { Clock, Award, Heart, Users, ArrowRight, Star, Quote, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AboutPage() {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight
            const currentScroll = window.scrollY
            setScrollProgress((currentScroll / totalScroll) * 100)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const team = [
        {
            name: "Isabella Vancini",
            role: "Founder & Master Pâtissier",
            bio: "With over 15 years of experience in Michelin-starred kitchens across Paris and London, Isabella founded Flabbergaster to bring art-gallery aesthetics to the world of desserts.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella&backgroundColor=ffdfbf&clothingColor=ffffff"
        },
        {
            name: "Julian Thorne",
            role: "Head of Creative Development",
            bio: "A visionary in flavor profiles, Julian ensures every cake is a multisensory journey. He believes that baking is as much about chemistry as it is about emotion.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julian&backgroundColor=c0aede&clothingColor=3d2b1f"
        },
        {
            name: "Marcus Aurel",
            role: "Director of Operations",
            bio: "Marcus ensures that the Flabbergaster experience is seamless from the first click to the final bite, maintaining the highest standards of luxury concierge service.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&backgroundColor=b6e3f4&clothingColor=ebebeb"
        }
    ]

    const gallery = [
        "/cake_salted_caramel.png",
        "/cake_pistachio_rose.png",
        "/cake_matcha.png",
        "/cake_hazelnut_praline.png",
        "/cake_black_forest.png",
        "/cake_tiramisu.png"
    ]

    return (
        <div className="relative min-h-screen bg-[#4A1D1D] text-[#F3E8E2]">
            {/* Scroll Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-[#D98C8C] z-[100] transition-all duration-100"
                style={{ width: `${scrollProgress}%` }}
            />

            <NavbarRefined />

            <main>
                {/* Hero Section - Editorial Style */}
                <section className="pt-48 pb-32 px-6 relative overflow-hidden bg-gradient-to-b from-[#3D1414] to-[#4A1D1D]">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex flex-col items-center text-center">
                            <div className="overflow-hidden mb-6">
                                <span className="text-[#D98C8C] font-bold tracking-[0.4em] uppercase text-[10px] block animate-in slide-in-from-bottom-full duration-700">Atelier of Dreams</span>
                            </div>
                            <h1 className="text-7xl lg:text-9xl font-serif text-white leading-tight mb-12">
                                Our <span className="italic text-[#D98C8C]">Story</span>
                            </h1>
                            <div className="max-w-3xl relative">
                                <Quote className="absolute -top-8 -left-8 text-[#D98C8C]/20" size={64} />
                                <p className="text-2xl lg:text-3xl font-serif italic text-white/90 leading-relaxed">
                                    "We believe that a cake is more than just a dessert; it is the silent protagonist of your most precious celebrations."
                                </p>
                            </div>
                        </div>

                        {/* Scroll Indicator */}
                        <div className="flex flex-col items-center gap-4 mt-24 animate-bounce opacity-40">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Scroll</span>
                            <ChevronDown size={20} />
                        </div>
                    </div>
                    {/* Background decorative blob */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D98C8C]/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute -bottom-48 -left-20 w-[600px] h-[600px] bg-[#D98C8C]/5 blur-[120px] rounded-full pointer-events-none" />
                </section>

                {/* Our Journey - Alternating Layout */}
                <section className="py-32 px-6 bg-[#4A1D1D]">
                    <div className="max-w-7xl mx-auto space-y-40">
                        {/* Part 1 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="relative order-2 lg:order-1">
                                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
                                    <Image
                                        src="/hero_raspberry_cake.png"
                                        alt="The beginning"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white p-6 rounded-full flex items-center justify-center text-center shadow-xl rotate-12">
                                    <span className="font-serif text-lg leading-tight text-[#1A0F0A]">Born in London<br /><span className="text-[#D98C8C] font-bold">2024</span></span>
                                </div>
                            </div>
                            <div className="space-y-8 order-1 lg:order-2">
                                <div className="space-y-4">
                                    <span className="text-[#D98C8C] font-bold tracking-[0.4em] uppercase text-[10px]">The Beginning</span>
                                    <h2 className="text-5xl lg:text-7xl font-serif text-white leading-tight">A Vision for <br /><span className="italic">Perfection.</span></h2>
                                </div>
                                <p className="text-white/70 text-lg leading-relaxed font-serif italic">
                                    Flabbergaster Bakes started in a small, sunlight-drenched kitchen in West London. Our founder, Isabella, tired of the mass-produced cakes flooding the market, decided to strip baking back to its roots: pure ingredients, meticulous technique, and boundless heart.
                                </p>
                            </div>
                        </div>

                        {/* Part 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <span className="text-[#D98C8C] font-bold tracking-[0.4em] uppercase text-[10px]">The Craft</span>
                                    <h2 className="text-5xl lg:text-7xl font-serif text-white leading-tight">The Art of <br /><span className="italic">The Whisk.</span></h2>
                                </div>
                                <p className="text-white/70 text-lg leading-relaxed font-serif italic">
                                    Every ingredient that enters our atelier is hand-selected. From the organic Madagascar vanilla beans to the farm-fresh local berries, we don't compromise on quality because we know you don't either.
                                </p>
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <div className="text-[#D98C8C]"><Star size={24} fill="currentColor" /></div>
                                        <h4 className="font-serif text-xl">Michelin Standards</h4>
                                        <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">In every layer</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-[#D98C8C]"><Heart size={24} fill="currentColor" /></div>
                                        <h4 className="font-serif text-xl">Made with Love</h4>
                                        <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">100% Handcrafted</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
                                    <Image
                                        src="/cake_red_velvet.png"
                                        alt="Our craft"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute -top-10 -right-10 w-48 h-48 bg-white p-6 rounded-full flex items-center justify-center text-center shadow-xl -rotate-12">
                                    <span className="font-serif text-lg leading-tight text-[#1A0F0A] italic">Zero Artificial<br />Additives</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section - Meet the Artisans */}
                <section className="py-32 px-6 bg-[#3D1414]">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                            <div className="space-y-4">
                                <span className="text-[#D98C8C] font-bold tracking-[0.4em] uppercase text-[10px]">The Atelier Team</span>
                                <h2 className="text-5xl lg:text-7xl font-serif text-white">Meet the <span className="italic">Artisans</span></h2>
                            </div>
                            <p className="max-w-sm text-white/60 font-serif italic text-lg leading-relaxed">
                                Our team is a collective of dreamers, bakers, and designers, all dedicated to one singular goal: excellence.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                            {team.map((member, idx) => (
                                <div key={member.name} className="group overflow-hidden">
                                    <div className="relative aspect-square rounded-full overflow-hidden mb-8 shadow-lg border-4 border-white/10 group-hover:border-[#D98C8C]/50 transition-all duration-700 bg-[#4A1D1D]">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-contain p-8 scale-110 group-hover:scale-100 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-[#D98C8C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                    <div className="space-y-4 text-center">
                                        <div>
                                            <h3 className="text-3xl font-serif text-white group-hover:text-[#D98C8C] transition-colors">{member.name}</h3>
                                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D98C8C] mt-2">{member.role}</p>
                                        </div>
                                        <p className="text-white/60 text-sm italic leading-relaxed max-w-xs mx-auto">
                                            "{member.bio}"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The Atelier Gallery */}
                <section className="py-32 px-6 bg-[#4A1D1D]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24 space-y-4">
                            <span className="text-[#D98C8C] font-bold tracking-[0.4em] uppercase text-[10px]">Visual Symphony</span>
                            <h2 className="text-5xl lg:text-7xl font-serif text-white">Recent <span className="italic">Creations</span></h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {gallery.map((src, idx) => (
                                <div key={src} className={`relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl group border border-white/5 ${idx % 2 === 0 ? 'translate-y-0' : 'md:translate-y-12'}`}>
                                    <Image
                                        src={src}
                                        alt="Cake creation"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-[#1A0F0A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            ))}
                        </div>

                        <div className="mt-48 text-center">
                            <Link href="/menu" className="btn-premium group inline-flex items-center gap-4 border-white/20 text-white hover:bg-white hover:text-[#1A0F0A]">
                                <span className="uppercase tracking-widest font-bold text-xs">Explore Full Collection</span>
                                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-32 px-6 border-t border-white/5 bg-[#3D1414]">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <p className="font-script text-7xl text-white mb-4">Flabbergaster Bakes</p>
                    <p className="text-[#D98C8C] text-sm font-bold tracking-[0.6em] uppercase mb-16">The Art of Pure Fine Baking</p>

                    <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-8 text-[10px] font-bold uppercase tracking-[0.4em]">
                        <Link href="/" className="text-white/40 hover:text-white transition-colors">Home</Link>
                        <Link href="/menu" className="text-white/40 hover:text-white transition-colors">Selection</Link>
                        <Link href="/about" className="text-white transition-colors">Atelier</Link>
                        <Link href="/contact" className="text-white/40 hover:text-white transition-colors">Concierge</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
