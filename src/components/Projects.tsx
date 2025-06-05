import { ExternalLink, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "YouTube Analytics Dashboard - Web Mining Application",
      description: "A comprehensive web mining application that extracts, processes, and analyzes YouTube data. Features video metadata extraction, sentiment analysis of comments, earnings estimation, and interactive dashboards with caching optimization using SQLite.",
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&h=600&fit=crop",
      technologies: ["Python", "YouTube Data API v3", "Recharts", "SQLite", "Sentiment Analysis"],
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Study Buddy: AI Assistant",
      description: "A comprehensive web-based learning companion that generates personalized study plans, conducts quizzes, tracks progress with Chart.js visualizations, and provides AI-powered chatbot assistance for students.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      technologies: ["Flask", "SQLite", "Chart.js", "SerpAPI", "YouTube API", "NLTK"],
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Interactive CNN Model for Image Classification (CIFAR-10)",
      description: "Educational web-based deep learning platform developed by Learning Group 12. Features real-time CNN training on CIFAR-10 dataset, model evaluation with 83.95% accuracy, and interactive image classification with modern UI and animations.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      technologies: ["Python", "TensorFlow/Keras", "Flask", "CIFAR-10", "Server-Sent Events", "AOS"],
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Student Grading System (SGS)",
      description: "Desktop application for academic record management with MySQL backend. Features secure authentication, predictive analytics, data visualization, multi-format reporting (PDF/Excel), and bulk CSV uploads for educational institutions.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      technologies: ["Python", "MySQL", "customtkinter", "bcrypt", "pandas", "matplotlib"],
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Sentiment Analysis of Product Reviews",
      description: "Robust system that automatically analyzes and classifies customer reviews into positive or negative sentiment categories using advanced machine learning techniques.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["Python", "Machine Learning", "NLP", "Scikit-learn"],
      liveUrl: "#",
    },
    {
      title: "Electricity Billing System",
      description: "Comprehensive billing management system developed using C++ and SQL on Visual Studio. Features customer management, bill generation, and payment tracking.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
      technologies: ["C++", "SQL", "Visual Studio"],
      liveUrl: "#",
    },
    {
      title: "Hunt The Wumpus Game",
      description: "Graphical adventure game created using Python and the Pygame library. Features interactive gameplay, sound effects, and engaging user interface.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
      technologies: ["Python", "Pygame", "Game Development"],
      liveUrl: "#",
    },
    {
      title: "Snake Game",
      description: "Classic Snake game implementation using Python with GUI and SQLite database integration. Developed on PyCharm with score tracking and game statistics.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
      technologies: ["Python", "Tkinter", "SQLite", "PyCharm"],
      liveUrl: "#",
    },
  ];

  const certificates = [
    {
      name: "Internship from Tech Mind Sparc Innovations",
      link: "https://drive.google.com/file/d/1rRJholh6jW5Ip1vUrkPT5iE0Pd7W6VQP/view"
    },
    {
      name: "National Level Multidisciplinary Young Research Student Paper Presentation Competition",
      link: "https://drive.google.com/file/d/1UdepWhUW3lBZ8JtwR1HdTO42J0bgxytr/view"
    },
    {
      name: "CognoRise InfoTech Web Dev Hackathon",
      link: "https://drive.google.com/file/d/1fZneop5YRIeZ_U7Y1nYhl4V8BOYXZmrD/view"
    },
    {
      name: "Machine Learning and GenAI - Aditya University",
      link: "https://drive.google.com/file/d/1X5zVC0dG1y4aILL3SQbgGLcF-umyVBfw/view"
    },
    {
      name: "Data Visualization & Modeling using Orange software - AZ EduLearningHub LLP",
      link: "https://drive.google.com/file/d/1JW-IPqw0cWx3jPXMe0MQLUkx39QxM4kE/view"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive showcase of my work in data science, machine learning, web development, and software engineering, 
            demonstrating practical applications of programming concepts and modern technologies.
          </p>
        </div>

        <div className="grid gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 ${
                project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''
              }`}
            >
              <div className={`${project.featured ? 'lg:order-1' : ''} p-6 lg:p-8 flex flex-col justify-center`}>
                <div className="mb-4">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-400 bg-purple-400/10 rounded-full mb-3">
                      Featured Project
                    </span>
                  )}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-white/10 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`${project.featured ? 'lg:order-2' : ''} relative overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Certificates & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Achievements</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <a
                key={index}
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <p className="text-white font-medium text-center">{certificate.name}</p>
                <div className="flex justify-center mt-3">
                  <ExternalLink className="text-purple-400" size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
