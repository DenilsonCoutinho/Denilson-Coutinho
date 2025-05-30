"use client"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import eu from '@/app/assets/site/400x400.png'
export const Hero = () => {

  function toDiv(id:string) {
    const idElement = document.getElementById(id)
    idElement?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-64 h-64 mx-auto my-6 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center overflow-hidden justify-center text-4xl font-bold text-gray-600">
                  <Image src={eu} alt="eu" className="rounded-full object-cover" quality={100}/>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Desenvolvedor
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Full Stack
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Criando micro-SaaS inovadores e sites que transformam ideias em soluções digitais impactantes
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              onClick={() => toDiv("projetos")}
              className="bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Ver Meus Projetos
            </a>
            <a
            onClick={() => toDiv("contato")}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Entre em Contato
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/DenilsonCoutinho/"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/denilson-c-silva/"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            {/* <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a> */}
          </div>
        </div>
      </div>

    </section>
  );
};
