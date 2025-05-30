"use client"
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import curso from '@/app/assets/site/allan 1920x1080.png'
import advocacia from '@/app/assets/site/site advocacia.png'
import sleepStore from '@/app/assets/site/sleepStore.png'
import agencia from '@/app/assets/site/agencia-allan.png'
import tikLoveyuu from '@/app/assets/site/tikloveyuu.png'
import teologia from '@/app/assets/site/teologiIa.png'
import Image from "next/image";
export const Projects = () => {
  const projects = [
    {
      type: "site",
      title: "Site - Curso Gestor de tráfego - Allan Belli",
      tech: ["Wordpress"],
      image: curso,
      demo: "https://abxmidias.com.br/curso/"
    },
    {
      type: "site",
      title: "Site - Advogado trabalhista - Caio Pereira",
      tech: ["Wordpress"],
      image: advocacia,
      demo: "https://drcaiopereira.com/meuadvogadotrabalhista/"
    },
    {
      type: "site",
      title: "Site - Loja de colchões Sleep Store - Curitiba/PR",
      tech: ["Wordpress"],
      image: sleepStore,
      github: "",
    },
    {
      type: "site",
      title: "Site - Agência de tráfego pago ABX Mídia ",
      tech: ["Wordpress"],
      image: agencia,
      demo: "https://abxmidias.com.br/"
    },
    {
      type: "saas",
      title: "Micro-Saas - Venda de produto digital para casais",
      description: "",
      tech: ["Next.js", "TypeScript", "Prisma", "MongoDb", "Tailwind" ,"Shadcn"],
      image: tikLoveyuu,
      demo: "https://www.tikloveyuu.com/"
    },
    {
      type: "saas",
      title: "Micro-Saas - Para estudo da palavra de Deus",
      description: "",
      tech: ["Next.js", "TypeScript", "Prisma", "MongoDb", "Tailwind", "Redis", "Grok(IA)","Shadcn"],
      image: teologia,
      demo: "https://www.teolog-ia.com/"
    }
  ];
  const [isActive, setisActive] = useState<"site" | "saas" | "todos">("todos")
  const [filteredProject, setFilteredProject] = useState(projects)

  function filterProjects(type: "site" | "saas" | "todos") {
    setisActive(type)
    const items = projects.filter((e) => e.type === type)
    setFilteredProject(items)

    if (type === "todos") {
      setFilteredProject(projects)
    }
  }
  return (
    <section id="projetos" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Meus Projetos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, incluindo micro-SaaS e websites
          </p>
        </div>
        <div className="flex justify-between max-w-[450px] w-full m-auto gap-3 pb-10">
          <Button onClick={() => filterProjects("todos")} className={`${isActive === "todos" && "border-2 border-blue-500"} max-w-[400px] duration-500 cursor-pointer w-full bg-gradient-to-r from-slate-900 to-blue-950 text-white`}>Todos</Button>
          <Button onClick={() => filterProjects("site")} className={`${isActive === "site" && "border-2 border-blue-500"} max-w-[400px] duration-500 cursor-pointer w-full bg-gradient-to-r from-slate-900 to-blue-950 text-white`}>Sites</Button>
          <Button onClick={() => filterProjects("saas")} className={`${isActive === "saas" && "border-2 border-blue-500"} max-w-[400px] duration-500 cursor-pointer w-full bg-gradient-to-r from-slate-900 to-blue-950 text-white`}>Micro-Saas</Button>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProject.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  width={800}
                  height={600}
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span className="font-medium">Código</span>
                  </a>}
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    <span className="font-medium">Link</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
