import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAnimations = () => {
      // Hero animations
      gsap.fromTo('.hero-title', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      );

      gsap.fromTo('.hero-subtitle', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
      );

      gsap.fromTo('.hero-cta', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: 'power3.out' }
      );

      // Stagger animations for sections
      gsap.utils.toArray('.stagger-item').forEach((item: any, index) => {
        gsap.fromTo(item,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Parallax effects
      gsap.utils.toArray('.parallax').forEach((element: any) => {
        gsap.to(element, {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });

      // Floating elements
      gsap.utils.toArray('.float-element').forEach((element: any) => {
        gsap.to(element, {
          y: -20,
          duration: 2,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1
        });
      });

      // Counter animations
      gsap.utils.toArray('.counter').forEach((counter: any) => {
        const target = parseInt(counter.dataset.target);
        gsap.fromTo(counter, 
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    };

    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Loading screen animation
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Initialize GSAP animations after loading
      setTimeout(() => {
        initializeAnimations();
      }, 100);
    }, 2000);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;