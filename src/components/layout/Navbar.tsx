"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products", hasMegaMenu: true },
  { name: "Gallery", href: "/gallery" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-sm border-b border-ashma-grey/20 dark:border-white/10"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 z-50">
            <div className="relative w-48 h-16">
              <Image 
                src="/images/logo.png" 
                alt="Ashma India"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasMegaMenu && setActiveMegaMenu(link.name)}
                onMouseLeave={() => link.hasMegaMenu && setActiveMegaMenu(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-ashma-blue",
                    "text-ashma-text dark:text-gray-200"
                  )}
                >
                  {link.name}
                  {link.hasMegaMenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Mega Menu Dropdown */}
                {link.hasMegaMenu && (
                  <AnimatePresence>
                    {activeMegaMenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px]"
                      >
                        <div className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 shadow-2xl rounded-2xl p-6 grid grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-heading font-semibold text-ashma-dark mb-4 border-b pb-2">Home Appliances</h4>
                            <ul className="space-y-3">
                              <li><Link href="/products/ro-purifiers" className="text-sm text-gray-600 dark:text-gray-400 hover:text-ashma-blue transition-colors">RO Water Purifiers</Link></li>
                              <li><Link href="/products/dispensers" className="text-sm text-gray-600 dark:text-gray-400 hover:text-ashma-blue transition-colors">Water Dispensers</Link></li>
                              <li><Link href="/products/chimneys" className="text-sm text-gray-600 dark:text-gray-400 hover:text-ashma-blue transition-colors">Kitchen Chimneys</Link></li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-heading font-semibold text-ashma-dark mb-4 border-b pb-2">Industrial</h4>
                            <ul className="space-y-3">
                              <li><Link href="/products/commercial-ro" className="text-sm text-gray-600 dark:text-gray-400 hover:text-ashma-blue transition-colors">Commercial & Industrial RO</Link></li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-ashma-blue hover:bg-ashma-dark text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-ashma-blue/30 hover:shadow-ashma-blue/50"
            >
              Request Service
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-ashma-text dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-ashma-text dark:text-white" />
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
            className="md:hidden fixed inset-0 bg-white dark:bg-black z-40 flex flex-col pt-24 px-6"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-heading font-medium text-ashma-text dark:text-white border-b border-gray-100 dark:border-gray-800 pb-4"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto mb-12 flex flex-col gap-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-ashma-blue text-white text-center py-4 rounded-xl font-medium"
              >
                Request Service
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
