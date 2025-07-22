import { useEffect } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = () => {
  useEffect(() => {
    // Loading animation
    gsap.fromTo('.loading-logo', 
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    gsap.to('.loading-logo', {
      scale: 1.1,
      duration: 1.5,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-logo">
        Royal Fighter Dheet Club
      </div>
      <div className="mt-4 text-sm text-gray-400">
        Loading...
      </div>
    </div>
  );
};

export default LoadingScreen;