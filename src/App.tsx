import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from "./components/sections/About";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f14] text-white">
      <Navigation />

      <main>
        <Hero />
        <About />

      </main>

      <Footer />
    </div>
  );
}

export default App;