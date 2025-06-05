
import { Code, Database, Brain, BarChart } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Python", level: 70, icon: Code, color: "bg-blue-500" },
    { name: "C++", level: 65, icon: Code, color: "bg-green-500" },
    { name: "Machine Learning", level: 60, icon: Brain, color: "bg-purple-500" },
    { name: "PowerBI", level: 55, icon: BarChart, color: "bg-orange-500" },
    { name: "Data Science", level: 65, icon: BarChart, color: "bg-pink-500" },
    { name: "SQL", level: 60, icon: Database, color: "bg-yellow-500" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Continuously learning and improving my technical expertise across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <skill.icon className="text-purple-400 mr-3" size={24} />
                <span className="text-white font-semibold text-lg">{skill.name}</span>
                <span className="ml-auto text-purple-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`${skill.color} h-full rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: `${skill.level}%`,
                    animation: `slideIn 1.5s ease-out ${index * 0.2}s both`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
