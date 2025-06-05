
import { Award, Code, Star } from "lucide-react";

const QuickStats = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "15+", color: "text-blue-400" },
    { icon: Award, label: "Certifications", value: "5", color: "text-green-400" },
    { icon: Star, label: "GitHub Stars", value: "25+", color: "text-purple-400" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <stat.icon className={stat.color} size={32} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
