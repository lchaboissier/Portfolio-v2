import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f14] text-white">
      <Navigation />

      <main>
        <Hero />

      </main>

      <Footer />
    </div>
  );
}

export default App;