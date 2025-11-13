"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Form submitted:", formData)
    alert("¡Mensaje enviado! Te contactaré pronto.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-12 sm:mb-16 relative">
          Contacto
          <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">¡Hablemos!</h3>
            <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
              Estoy disponible para nuevos proyectos y oportunidades. No dudes en contactarme si tienes alguna pregunta
              o propuesta.
            </p>

            <div className="space-y-4 mb-8 lg:mb-0">
              <div className="flex items-center justify-center lg:justify-start">
                <Mail className="text-blue-600 mr-3 sm:mr-4" size={20} />
                <span className="text-sm sm:text-base">felipe20001monsalve@gmail.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Phone className="text-blue-600 mr-3 sm:mr-4" size={20} />
                <span className="text-sm sm:text-base">+ (57) 350-213-8238</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <MapPin className="text-blue-600 mr-3 sm:mr-4" size={20} />
                <span className="text-sm sm:text-base">Colombia, Pereira</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Mensaje"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none text-sm sm:text-base"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
