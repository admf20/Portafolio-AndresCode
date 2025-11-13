"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  activeSection: string
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Sobre Mi" },
    { href: "#skills", label: "Habilidades" },
    { href: "#work", label: "Portafolio" },
    { href: "#contact", label: "Contacto" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div>
          <a href="#" className="text-xl font-bold text-slate-800">
            Andres<span className="text-blue-600">Code</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`relative font-semibold transition-colors hover:text-blue-600 ${
                    activeSection === item.href.slice(1)
                      ? "text-blue-600 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                      : "text-slate-800"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 w-full bg-slate-800 md:hidden shadow-lg">
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-6 py-4 text-white hover:text-blue-400 hover:bg-slate-700 transition-colors border-b border-slate-700 last:border-b-0"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
