import { Play, Users, Trophy, Star } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="video-overlay absolute inset-0" />
      </div>

      {/* Floating Stats */}
      <div className="absolute top-20 right-10 float-element glass p-4 rounded-lg hidden lg:block">
        <div className="flex items-center space-x-2 text-white">
          <Users className="text-amber-500" size={20} />
          <span className="text-sm">200+ Students</span>
        </div>
      </div>

      <div className="absolute bottom-20 left-10 float-element glass p-4 rounded-lg hidden lg:block">
        <div className="flex items-center space-x-2 text-white">
          <Trophy className="text-amber-500" size={20} />
          <span className="text-sm">National Champions</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6">
          Welcome to{' '}
          <span className="gradient-text">Royal Fighter</span>
          <br />
          Dheet Club
        </h1>
        
        <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          The Premier Arm Wrestling Academy with Coach Teekam Chand's 15+ years of expertise
        </p>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg magnetic pulse-glow"
          >
            Join the Champions
          </button>
          
          <button 
            onClick={() => window.open('https://youtu.be/0wvWaNb1vT4?si=HlWpx_pC1QD3PfzM', '_blank')}
            className="flex items-center space-x-2 text-white hover:text-amber-500 transition-colors magnetic"
          >
            <Play size={24} />
            <span>Watch Our Story</span>
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="stagger-item text-center">
            <div className="counter text-3xl md:text-4xl font-bold text-amber-500" data-target="15">0</div>
            <div className="text-gray-300 text-sm">Years Experience</div>
          </div>
          <div className="stagger-item text-center">
            <div className="counter text-3xl md:text-4xl font-bold text-amber-500" data-target="200">0</div>
            <div className="text-gray-300 text-sm">Students Trained</div>
          </div>
          <div className="stagger-item text-center">
            <div className="counter text-3xl md:text-4xl font-bold text-amber-500" data-target="50">0</div>
            <div className="text-gray-300 text-sm">Championships Won</div>
          </div>
          <div className="stagger-item text-center">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-amber-500 fill-current" size={20} />
              ))}
            </div>
            <div className="text-gray-300 text-sm">Pro Panja League</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;