
import { ChevronDown, Code, Palette, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const features = [
    { icon: Code, text: "Clean Code" },
    { icon: Palette, text: "Data Science" },
    { icon: Zap, text: "Machine Learning" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">Hello, I'm</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Uppu Lokesh Kumar
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            MCA Data Science Student & Aspiring Developer with expertise in Python, C++, 
            and Machine Learning
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover-scale"
              >
                <feature.icon size={20} className="text-purple-400" />
                <span className="text-white font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              View My Projects
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="/about">
          <ChevronDown className="text-white/60 hover:text-white transition-colors duration-300" size={32} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
