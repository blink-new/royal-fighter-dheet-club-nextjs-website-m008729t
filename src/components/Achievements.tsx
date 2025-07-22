import { Trophy, Medal, Star, Users, Target, Crown } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'National Championships',
      description: 'Multiple Gold & Silver medals at national level competitions',
      count: '25+',
      color: 'text-yellow-500'
    },
    {
      icon: Medal,
      title: 'Pro Panja League',
      description: 'Students competing in India\'s premier arm wrestling league',
      count: '10+',
      color: 'text-amber-500'
    },
    {
      icon: Star,
      title: 'State Champions',
      description: 'Dominating state-level competitions year after year',
      count: '50+',
      color: 'text-red-500'
    },
    {
      icon: Users,
      title: 'Students Trained',
      description: 'Dedicated athletes trained to championship level',
      count: '200+',
      color: 'text-blue-500'
    },
    {
      icon: Target,
      title: 'Success Rate',
      description: 'Students achieving competitive success',
      count: '85%',
      color: 'text-green-500'
    },
    {
      icon: Crown,
      title: 'Years of Excellence',
      description: 'Consistent training and championship results',
      count: '15+',
      color: 'text-purple-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="stagger-item text-4xl md:text-5xl font-bold text-white mb-6">
            Our{' '}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="stagger-item text-gray-300 text-lg max-w-2xl mx-auto">
            Years of dedication, training, and excellence have led to remarkable 
            achievements in the world of arm wrestling.
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div 
                key={index}
                className="stagger-item achievement-card p-6 rounded-lg text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4">
                  <IconComponent 
                    className={`${achievement.color} mx-auto group-hover:scale-110 transition-transform`} 
                    size={48} 
                  />
                </div>
                <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
                  {achievement.count}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Featured Achievements */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="stagger-item">
            <h3 className="text-3xl font-bold text-white mb-6">
              Championship{' '}
              <span className="gradient-text">Legacy</span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-amber-500 rounded-full flex items-center justify-center">
                  <Trophy className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">National Gold Medalists</h4>
                  <p className="text-gray-400 text-sm">Our students have won multiple gold medals at national championships, representing the highest level of arm wrestling excellence in India.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <Star className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Pro Panja League Competitors</h4>
                  <p className="text-gray-400 text-sm">Multiple students competing in India's premier professional arm wrestling league, showcasing world-class skills.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Community Impact</h4>
                  <p className="text-gray-400 text-sm">Building a strong community of arm wrestlers in Rohini and surrounding areas, promoting the sport at grassroots level.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="stagger-item">
            <div className="parallax relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Championship Trophy"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
              
              {/* Floating Achievement Badge */}
              <div className="absolute top-4 right-4 glass p-3 rounded-lg float-element">
                <div className="text-center">
                  <Trophy className="text-amber-500 mx-auto mb-1" size={24} />
                  <div className="text-xs text-white font-semibold">Champions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="stagger-item">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Legacy?
            </h3>
            <p className="text-gray-300 mb-6">
              Train with champions and become the next success story
            </p>
            <button className="btn-primary px-8 py-3 rounded-full text-white font-semibold magnetic pulse-glow">
              Start Training Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;