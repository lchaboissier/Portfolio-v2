import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from "./components/sections/About";
import { Footer } from "./components/layout/Footer";
import { Experience } from "./components/sections/Experience";
import { Formation } from "./components/sections/Formation";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f14] text-white">
      <Navigation />

      <main>
        <Hero />
        <About />
        <Experience />
        <Formation />
        <Skills />
        <Projects />
        <Contact />

      </main>

      <Footer />
    </div>
  );
}

export default App;