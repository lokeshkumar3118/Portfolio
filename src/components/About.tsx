
import { Award, Code2, GraduationCap, Rocket, Users, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Python", level: 70 },
    { name: "C++", level: 65 },
    { name: "Machine Learning", level: 60 },
    { name: "PowerBI", level: 55 },
    { name: "Data Science", level: 65 },
    { name: "SQL", level: 60 },
  ];

  const highlights = [
    { icon: GraduationCap, title: "MCA Student", subtitle: "Data Science" },
    { icon: Code2, title: "8+ Projects", subtitle: "Completed" },
    { icon: Users, title: "5+ Certificates", subtitle: "Earned" },
    { icon: Award, title: "Research Paper", subtitle: "Presented" },
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      field: "Data Science",
      institution: "Aurora's Technological & Research Institute, Hyderabad",
      year: "2023 - Present"
    },
    {
      degree: "Bachelor of Science (BSc)",
      field: "Aviation",
      institution: "Hindustan Institute of Engineering Technology, Chennai",
      year: "2022"
    },
    {
      degree: "Intermediate",
      field: "General",
      institution: "Sri Chaitanya Junior College, Hyderabad",
      year: "2019"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate MCA student specializing in Data Science with a keen interest in 
            programming and technology, continuously learning and building projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img
                  src="/lovable-uploads/c8d0b0e8-b562-421f-ae9b-c55da8c07565.png"
                  alt="Uppu Lokesh Kumar"
                  className="w-48 h-48 rounded-full object-cover border-4 border-purple-500 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20"></div>
              </div>
            </div>

            <div className="prose prose-lg text-gray-300">
              <p className="text-lg leading-relaxed text-justify mb-4">
                I'm a dedicated MCA Data Science student with a strong foundation in programming 
                and a passion for technology. My journey began with learning Python and C++, 
                and I've been exploring various domains including machine learning, data visualization, 
                and software development.
              </p>
              <p className="text-lg leading-relaxed text-justify">
                Currently pursuing my Master's in Computer Applications with a specialization in 
                Data Science from Aurora's Technological & Research Institute. I enjoy building 
                practical projects that solve real-world problems and continuously strive to 
                improve my programming skills.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <highlight.icon className="mx-auto mb-3 text-purple-400" size={32} />
                  <div className="text-2xl font-bold text-white">{highlight.title}</div>
                  <div className="text-gray-400">{highlight.subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-2 md:mb-0">
                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                    <p className="text-purple-400 font-medium">{edu.field}</p>
                    <p className="text-gray-300">{edu.institution}</p>
                  </div>
                  <div className="text-gray-400 font-medium">{edu.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Languages</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {["English", "Telugu", "Hindi"].map((language, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
