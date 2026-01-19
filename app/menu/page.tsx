"use client"

import { refinedProducts, getProducts } from "@/lib/refined-products"
import { NavbarRefined } from "@/components/NavbarRefined"
import { ProductCardRefined } from "@/components/ProductCardRefined"
import { CommissionModal } from "@/components/CommissionModal"
import { ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("All")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [products, setProducts] = useState(refinedProducts)
    const [loading, setLoading] = useState(true)

    // Fetch products from WordPress on component mount
    useEffect(() => {
        async function loadProducts() {
            setLoading(true)
            const wpProducts = await getProducts()
            setProducts(wpProducts)
            setLoading(false)
        }
        loadProducts()
    }, [])

    // Get unique categories, filter out "Uncategorized", and sort with Signature Collection first
    const allCategories = Array.from(new Set(products.map(p => p.category)))
        .filter(cat => cat.toLowerCase() !== 'uncategorized') // Remove Uncategorized
        .sort((a, b) => {
            // Put "Signature Collection" first
            if (a === 'Signature Collection') return -1;
            if (b === 'Signature Collection') return 1;
            // Then alphabetically
            return a.localeCompare(b);
        });

    const categories = ["All", ...allCategories];

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category === activeCategory)

    return (
        <div className="relative min-h-screen bg-[#F3E8E2]">
            <NavbarRefined />

            <main className="pt-40 pb-32 px-6 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D98C8C]/5 blur-[120px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E5D5CB]/20 blur-[100px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Back Button - Top Left */}
                    <div className="absolute top-0 left-0">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 text-[#1A0F0A]/60 hover:text-[#1A0F0A] transition-all duration-300"
                        >
                            <div className="p-1.5 rounded-full border border-[#1A0F0A]/10 group-hover:bg-[#1A0F0A] group-hover:text-white transition-all">
                                <ArrowLeft size={16} />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Back</span>
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-16 space-y-6 pt-8 md:pt-0">
                        <div className="space-y-3">
                            <div className="flex items-center justify-center gap-4">
                                <span className="w-8 h-[1px] bg-[#D98C8C]" />
                                <span className="text-[#D98C8C] font-bold tracking-[0.4em] uppercase text-[10px]">The Collection</span>
                                <span className="w-8 h-[1px] bg-[#D98C8C]" />
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-serif text-[#1A0F0A] leading-tight">
                                Our Full <span className="italic text-[#8B4C4C]">Menu</span>
                            </h1>
                            <p className="text-[#4A3728]/70 font-serif text-xl italic max-w-2xl mx-auto">
                                "Handcrafted with passion, served with grace. Explore our complete selection of artisanal cupcake curiosities."
                            </p>
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-20">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 border ${activeCategory === cat
                                    ? "bg-[#1A0F0A] text-white border-[#1A0F0A] shadow-xl"
                                    : "bg-white/50 text-[#1A0F0A]/60 border-white/20 hover:border-[#1A0F0A]/20 hover:bg-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                        {filteredProducts.map((product, index) => (
                            <div key={product.id} className="relative animate-in fade-in slide-in-from-bottom-10 duration-700" style={{ animationDelay: `${index * 50}ms` }}>
                                {/* Background Number */}
                                <span className="absolute -top-12 -left-6 font-serif text-9xl text-[#1A0F0A]/[0.02] leading-none pointer-events-none select-none">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <ProductCardRefined product={product} />
                            </div>
                        ))}
                    </div>

                    {/* Order Note */}
                    <div className="mt-32 p-12 bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white/40 flex flex-col items-center text-center space-y-6">
                        <div className="w-16 h-16 bg-[#1A0F0A] rounded-full flex items-center justify-center text-[#D98C8C]">
                            <Sparkles size={28} />
                        </div>
                        <h2 className="text-3xl font-serif text-[#1A0F0A]">Need something bespoke?</h2>
                        <p className="text-[#4A3728]/70 font-serif italic max-w-xl">
                            Our master artisans are ready to create a custom masterpiece for your most precious moments. Contact our concierge for private commissions.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn-premium"
                        >
                            Request Private Commission
                        </button>
                    </div>

                    {/* Commission Modal */}
                    <CommissionModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                    />
                </div>
            </main>

            <footer className="py-20 border-t border-[#4A3728]/5 text-center bg-white/20">
                <p className="font-script text-5xl text-[#1A0F0A] mb-4">Flabbergaster Bakes</p>
                <p className="text-[#D98C8C] text-sm font-bold tracking-[0.4em] uppercase">Artisan Patisserie Atelier</p>
                <div className="flex items-center justify-center gap-10 mt-12 text-[10px] font-bold uppercase tracking-widest text-[#4A3728]/40">
                    <Link href="/" className="hover:text-[#1A0F0A] transition-colors">Home</Link>
                    <Link href="/menu" className="text-[#1A0F0A]">Menu</Link>
                    <Link href="/about" className="hover:text-[#1A0F0A] transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-[#1A0F0A] transition-colors">Contact</Link>
                </div>
            </footer>
        </div>
    )
}
