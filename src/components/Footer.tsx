
import { Heart, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/uppu-lokesh-kumar-703411305", label: "LinkedIn" },
    { icon: Mail, href: "mailto:uppulokeshkumar@gmail.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Uppu Lokesh Kumar
            </h3>
            <p className="text-gray-400">
              MCA Data Science Student & Aspiring Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="p-3 rounded-full bg-white/10 text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="flex justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white/10 text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Uppu Lokesh Kumar. Made with 
            <Heart size={16} className="text-red-500" /> 
            and passion for coding.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
