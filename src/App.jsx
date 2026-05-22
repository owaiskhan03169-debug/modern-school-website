import { useState, useEffect } from 'react'; // state management add kiya
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import LogoPreloader from './components/ui/LogoPreloader'; // Preloader import

function App() {
  const [isLoading, setIsLoading] = useState(true); // Default loading

  useEffect(() => {
    // 2.5 second ke baad website load hogi (professional delay)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-brand-light font-sans text-slate-800">
      
      {/* Intro Showstopper (Preloader) */}
      <LogoPreloader isLoading={isLoading} />
      
      {/* Jab load ho jaye, tab baaki content dikhaye */}
      <main className={`${isLoading ? 'hidden' : 'block'}`}>
        <Navbar />
        <Hero />
        <About />
        <Features /> {/* Logo Watermark yahan rotate hoga */}
        <Gallery />
      </main>
      
      {/* Footer (Simplified) */}
      <footer className={`${isLoading ? 'hidden' : 'block'} bg-brand-blue text-white py-12 text-center`}>
          <p className="text-gray-400">© 2026 Johnson Co-Ed Public School. Bhopal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;