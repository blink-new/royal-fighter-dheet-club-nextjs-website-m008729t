import { Award, Target, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="stagger-item">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Coach{' '}
              <span className="gradient-text">Teekam Chand</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              With over 15 years of dedicated experience in arm wrestling, Coach Teekam Chand 
              has transformed Royal Fighter Dheet Club into the premier training destination 
              for aspiring arm wrestlers. His expertise has guided students to national 
              championships and Pro Panja League competitions.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="stagger-item achievement-card p-4 rounded-lg">
                <Award className="text-amber-500 mb-2" size={32} />
                <h3 className="text-white font-semibold mb-1">Expert Training</h3>
                <p className="text-gray-400 text-sm">Professional techniques and strategies</p>
              </div>
              
              <div className="stagger-item achievement-card p-4 rounded-lg">
                <Target className="text-amber-500 mb-2" size={32} />
                <h3 className="text-white font-semibold mb-1">Goal Oriented</h3>
                <p className="text-gray-400 text-sm">Focused on championship success</p>
              </div>
              
              <div className="stagger-item achievement-card p-4 rounded-lg">
                <Users className="text-amber-500 mb-2" size={32} />
                <h3 className="text-white font-semibold mb-1">Community</h3>
                <p className="text-gray-400 text-sm">Building strong wrestling family</p>
              </div>
              
              <div className="stagger-item achievement-card p-4 rounded-lg">
                <Zap className="text-amber-500 mb-2" size={32} />
                <h3 className="text-white font-semibold mb-1">Power Training</h3>
                <p className="text-gray-400 text-sm">Strength and technique development</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary px-6 py-3 rounded-full text-white font-semibold magnetic">
                Start Your Journey
              </button>
              <button 
                onClick={() => window.open('https://www.instagram.com/mr.teekamchand72', '_blank')}
                className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-6 py-3 rounded-full font-semibold transition-all magnetic"
              >
                Follow Coach
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="stagger-item relative">
            <div className="parallax relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Coach Teekam Chand"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 glass p-4 rounded-full float-element">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500">15+</div>
                <div className="text-xs text-white">Years</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="stagger-item max-w-3xl mx-auto glass p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              "To train and develop world-class arm wrestlers who compete at national and 
              international levels, while building a strong community of dedicated athletes 
              who embody the spirit of Royal Fighter Dheet Club."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;