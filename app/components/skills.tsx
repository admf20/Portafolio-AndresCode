import { Coffee, Database, Server, Code, Cloud, GitBranch, Layers, Shield } from "lucide-react"
import { CodepenIcon as ReactIcon } from "lucide-react" // Importing React icon specifically

export default function Skills() {
  const backendSkills = [
    { name: "Java", icon: Coffee },
    { name: "Spring Boot", icon: Server },
    { name: "APIs REST", icon: Code },
    { name: "Microservicios", icon: Cloud },
  ]

  const frontendSkills = [
    { name: "React", icon: ReactIcon },
    { name: "JavaScript", icon: Code },
    { name: "HTML5", icon: Code },
    { name: "CSS3", icon: Code },
  ]

  const databaseSkills = [
    { name: "MySQL", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "MongoDB", icon: Database },
  ]

  const toolsSkills = [
    { name: "Git & GitHub", icon: GitBranch },
    { name: "Docker", icon: Layers },
    { name: "Spring Security", icon: Shield },
  ]

  const SkillIcon = ({ skill }: { skill: any }) => (
    <div className="flex flex-col items-center group">
      <div className="w-16 h-16 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center border-2 border-gray-100 group-hover:border-blue-600">
        <skill.icon className="text-blue-600" size={28} />
      </div>
      <span className="text-xs font-medium text-gray-700 mt-2 text-center">{skill.name}</span>
    </div>
  )

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-12 sm:mb-16 relative">
          Habilidades
          <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600"></div>
        </h2>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center">Stack Tecnológico</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Backend Section */}
            <div className="text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-6 uppercase tracking-wide">Backend</h4>
              <div className="grid grid-cols-2 gap-6 justify-items-center">
                {backendSkills.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Frontend Section */}
            <div className="text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-6 uppercase tracking-wide">Frontend</h4>
              <div className="grid grid-cols-2 gap-6 justify-items-center">
                {frontendSkills.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Database Section */}
            <div className="text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-6 uppercase tracking-wide">Bases de Datos</h4>
              <div className="grid grid-cols-2 gap-6 justify-items-center">
                {databaseSkills.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Tools Section */}
            <div className="text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-6 uppercase tracking-wide">Herramientas</h4>
              <div className="grid grid-cols-2 gap-6 justify-items-center">
                {toolsSkills.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
