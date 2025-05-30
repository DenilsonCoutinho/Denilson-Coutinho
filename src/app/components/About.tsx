"use client"
export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Sou um desenvolvedor full stack apaixonado por criar soluções digitais que fazem a diferença.
                Especializado no desenvolvimento de micro-SaaS e Websites.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Com experiência em tecnologias como React, Node.js, Wordpress, TypeScript e muito mais,
                transformo ideias complexas em produtos digitais simples e eficazes.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">+3 anos de experiência</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">15+ projetos entregues</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-pink-600 rounded-full"></div>
                  <span className="text-gray-700">Foco em micro-SaaS e Websites</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Minha Missão</h3>
                  <p className="text-gray-600">
                    Criar produtos digitais que geram valor real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
