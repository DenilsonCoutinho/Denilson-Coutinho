
import { Hero } from "../app/components/Hero";
import { About } from "../app/components/About";
import { Projects } from "../app/components/Projects";
import { Skills } from "../app/components/Skills";
import { Contact } from "../app/components/Contact";
import { Navigation } from "../app/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* <Navigation /> */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;