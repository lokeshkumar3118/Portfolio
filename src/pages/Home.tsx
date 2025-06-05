
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import QuickStats from "@/components/QuickStats";
import Skills from "@/components/Skills";
import LatestProjects from "@/components/LatestProjects";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <QuickStats />
      <Skills />
      <LatestProjects />
      <Footer />
    </div>
  );
};

export default Home;
