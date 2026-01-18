import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from "./components/sections/About";
import { Footer } from "./components/layout/Footer";
import { Experience } from "./components/sections/Experience";
import { Formation } from "./components/sections/Formation";

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f14] text-white">
      <Navigation />

      <main>
        <Hero />
        <About />
        <Experience />
        <Formation />

      </main>

      <Footer />
    </div>
  );
}

export default App;