import { Github, Linkedin, Twitter } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Hola,
            <br />
            soy <span className="text-blue-600">Andrés</span>
            <br />
            Backend Developer
          </h1>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors hover:shadow-lg text-sm sm:text-base"
          >
            Contacto
          </a>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="hidden lg:flex flex-col space-y-4 absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <a href="https://twitter.com" className="text-slate-800 hover:text-blue-600 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://github.com/admf20" className="text-slate-800 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/andres-felipe-monsalve-franco-a69741119/" className="text-slate-800 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>

          {/* Social icons for mobile */}
          <div className="flex lg:hidden justify-center space-x-6 mb-8">
            <a href="https://twitter.com" className="text-slate-800 hover:text-blue-600 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://github.com/admf20" className="text-slate-800 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/andres-felipe-monsalve-franco-a69741119/" className="text-slate-800 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/undraw_feeling_proud_qne1.svg"
              alt="Developer illustration"
              className="w-full max-w-xs sm:max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
