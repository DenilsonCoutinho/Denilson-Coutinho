"use client";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { SendEmail } from "../../../action/nodemailer";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      await SendEmail(formData.name, formData.email, formData.message);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // limpa o form após sucesso
    } catch (err) {
      console.error(err);
      setErrorMsg("Erro ao enviar a mensagem. Tente novamente mais tarde.");
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Vamos Conversar?
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Tem um projeto em mente? Estou sempre aberto para discutir novas oportunidades e colaborações
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de contato (sem alterações) */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-blue-200">contact.denilsoncoutinho@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-blue-200">+55 (48) 9 9110-9700</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-600 p-3 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-blue-200">Joinville-SC, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-semibold mb-4">Disponibilidade</h4>
              <p className="text-blue-100 mb-4">
                Atualmente disponível para novos projetos freelance e colaborações.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-medium">Disponível agora</span>
              </div>
            </div>
          </div>

          {/* Formulário ajustado */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/70"
                  placeholder="Seu nome"
                  required
                  disabled={status === "sending"}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/70"
                  placeholder="seu@email.com"
                  required
                  disabled={status === "sending"}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/70 resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                  required
                  disabled={status === "sending"}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group ${status === "sending" ? "cursor-not-allowed opacity-70" : ""
                  }`}
              >
                {status === "sending" ? (
                  <>
                    <span>Enviando...</span>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>

            {status === "success" && (
              <p className="mt-4 text-green-400 font-semibold animate-fadeIn">
                Mensagem enviada com sucesso! Obrigado pelo contato.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-red-400 font-semibold animate-fadeIn">
                {errorMsg}
              </p>
            )}
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-blue-200">
            © 2024 Desenvolvido com ❤️ usando React e Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};
