import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          Andres<span className="text-blue-400">Code</span>
        </h3>

        <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            <Twitter size={20} />
          </a>
        </div>

        <p className="text-gray-400 text-sm sm:text-base">© 2025 AndresCode. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
