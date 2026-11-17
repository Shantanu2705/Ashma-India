"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products", hasMegaMenu: true },
  { name: "Gallery", href: "/gallery" },
  { name: "Services", href: "/services" },
  { name: "Brands", href: "/brands" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#FFFFFF]/98 backdrop-blur-md border-b border-[#DBD7D4] shadow-[0_4px_24px_rgba(29,21,16,0.08)] py-1"
          : "bg-[#FFFFFF]/90 backdrop-blur-sm border-b border-[#DBD7D4]/60 py-2"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Premium Water Blue & Brand Orange Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#008CE2] via-[#242E7F] to-[#FF6300]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Logo (Much Bigger, Bold, Prominent & Crystal Clear) */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 z-50 group">
            <div className="relative w-48 h-14 sm:w-64 sm:h-18 md:w-80 md:h-22 flex items-center justify-start transition-transform duration-300 group-hover:scale-[1.03]">
              <Image 
                src="/images/logo.png" 
                alt="Ashma India"
                fill
                className="object-contain object-left"
                priority
                sizes="(max-width: 640px) 240px, 340px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasMegaMenu && setActiveMegaMenu(link.name)}
                  onMouseLeave={() => link.hasMegaMenu && setActiveMegaMenu(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-bold transition-colors duration-200 py-2 relative",
                      isActive ? "text-[#FF6300]" : "text-[#1D1510] hover:text-[#FF6300]"
                    )}
                  >
                    {link.name}
                    {link.hasMegaMenu && (
                      <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", isActive ? "text-[#FF6300]" : "text-[#716B67]")} />
                    )}
                    {isActive && (
                      <motion.span 
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6300] rounded-full"
                      />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {link.hasMegaMenu && (
                    <AnimatePresence>
                      {activeMegaMenu === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[620px]"
                        >
                          <div className="bg-[#FFFFFF] border border-[#DBD7D4] shadow-[0_20px_50px_rgba(29,21,16,0.12)] rounded-xl p-8 grid grid-cols-2 gap-8">
                            <div>
                              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#DBD7D4]">
                                <span className="text-xs uppercase font-bold tracking-[0.18em] text-[#008CE2]">Home Appliances</span>
                              </div>
                              <ul className="space-y-3">
                                <li>
                                  <Link 
                                    href="/products/ro-purifiers" 
                                    className="group flex items-center justify-between text-sm text-[#716B67] hover:text-[#1D1510] transition-colors"
                                  >
                                    <span>RO Water Purifiers</span>
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#008CE2]" />
                                  </Link>
                                </li>
                                <li>
                                  <Link 
                                    href="/products/dispensers" 
                                    className="group flex items-center justify-between text-sm text-[#716B67] hover:text-[#1D1510] transition-colors"
                                  >
                                    <span>Water Dispensers & Softeners</span>
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#008CE2]" />
                                  </Link>
                                </li>
                                <li>
                                  <Link 
                                    href="/products/chimneys" 
                                    className="group flex items-center justify-between text-sm text-[#716B67] hover:text-[#1D1510] transition-colors"
                                  >
                                    <span>Kitchen Chimneys</span>
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#FF6300]" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#DBD7D4]">
                                <span className="text-xs uppercase font-bold tracking-[0.18em] text-[#242E7F]">Commercial</span>
                              </div>
                              <ul className="space-y-3">
                                <li>
                                  <Link 
                                    href="/products/commercial-ro" 
                                    className="group flex items-center justify-between text-sm text-[#716B67] hover:text-[#1D1510] transition-colors"
                                  >
                                    <span>Commercial & Industrial RO</span>
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#242E7F]" />
                                  </Link>
                                </li>
                                <li className="pt-4 border-t border-[#DBD7D4]">
                                  <Link 
                                    href="/products" 
                                    className="text-xs uppercase font-bold tracking-[0.12em] text-[#008CE2] hover:text-[#0070B8] transition-colors inline-flex items-center gap-1.5"
                                  >
                                    Browse All Products <ArrowRight className="w-3.5 h-3.5" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918101663132"
              className="hidden xl:inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#008CE2]/30 bg-[#F0F7FF] hover:bg-[#E0F2FE] text-[#008CE2] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 8101663132</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#FF6300] hover:bg-[#E05500] text-white font-bold uppercase tracking-[0.08em] text-xs px-6 py-3.5 transition-all duration-300 shadow-[0_4px_14px_rgba(255,99,0,0.25)] hover:shadow-[0_6px_20px_rgba(255,99,0,0.35)]"
            >
              Request Service
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 text-[#1D1510] hover:text-[#FF6300] transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 bg-[#FFFFFF] z-40 flex flex-col pt-24 px-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-xl font-bold uppercase tracking-wider border-b border-[#DBD7D4] pb-4 transition-colors flex items-center justify-between",
                      isActive ? "text-[#FF6300]" : "text-[#1D1510] hover:text-[#FF6300]"
                    )}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#FF6300]" />}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-8 mb-12 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-[#FF6300] hover:bg-[#E05500] text-white font-bold uppercase tracking-wider py-4 rounded-full text-sm transition-colors shadow-md"
              >
                Request Service
              </Link>
              <a
                href="tel:+918101663132"
                className="w-full text-center border-2 border-[#1D1510] hover:bg-[#1D1510] hover:text-white text-[#1D1510] font-bold uppercase tracking-wider py-3.5 rounded-full text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Call +91 8101663132</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
