
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LatestProjects = () => {
  const projects = [
    {
      title: "AI Chatbot",
      description: "Intelligent conversational AI using natural language processing",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      tags: ["Python", "NLP", "AI"],
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for complex data analysis and insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["Python", "Plotly", "Pandas"],
    },
    {
      title: "ML Prediction Model",
      description: "Machine learning model for predictive analytics",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=250&fit=crop",
      tags: ["Python", "Scikit-learn", "TensorFlow"],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-blue-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Latest Projects
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 group"
          >
            View All Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
