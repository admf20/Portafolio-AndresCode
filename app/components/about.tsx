export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-12 sm:mb-16 relative">
          Sobre Mi
          <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <img
              src="/images/undraw_hacker_mindset_gjwq.svg"
              alt="Backend Developer"
              className="w-full max-w-xs sm:max-w-sm rounded-lg"
            />
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Backend Developer</h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              Soy desarrollador backend con experiencia en Java y Spring Boot, especializado en el diseño e
              implementación de APIs REST, microservicios y soluciones orientadas al entorno empresarial. A lo largo de
              mi trayectoria, he aplicado principios sólidos de diseño de software, priorizando la claridad, la
              organización modular y la facilidad de mantenimiento.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Cuento además con conocimientos en React y me mantengo en formación continua, con el objetivo de
              desarrollar soluciones escalables, eficientes y alineadas a las necesidades del negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
