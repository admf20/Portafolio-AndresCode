import { ExternalLink, Github } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "API REST E-commerce",
      description: "Sistema completo de e-commerce con Spring Boot, JWT y MySQL",
      image: "/images/ecommerce-api.png",
      github: "#",
      demo: "#",
    },
    {
      title: "Arquitectura de Microservicios con Spring Boot",
      description: "Desarrollé un sistema distribuido de microservicios con comunicación vía Feign y descubrimiento de servicios con Eureka",
      image: "/images/banking-microservices.png",
      github: "#",
      demo: "#",
    },
    {
      title: "Sistema de Inventario",
      description: "API REST para gestión de inventario con Spring Security",
      image: "/images/inventory-system.png",
      github: "#",
      demo: "#",
    },
    {
      title: "Chat en Tiempo Real",
      description: "Aplicación de chat con WebSockets y Spring Boot",
      image: "/images/chat-realtime.png",
      github: "#",
      demo: "#",
    },
    {
      title: "Sistema de Autenticación",
      description: "Servicio de autenticación con JWT y OAuth2",
      image: "/images/auth-system.png",
      github: "#",
      demo: "#",
    },
    {
      title: "API de Gestión de Tareas",
      description: "Sistema de gestión de tareas con Spring Boot y PostgreSQL",
      image: "/images/task-management.png",
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="work" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-12 sm:mb-16 relative">
          Portafolio
          <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600"></div>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform group-hover:scale-105"/>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Github size={18}/>
                  </a>
                  <a
                    href={project.demo}
                    className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
