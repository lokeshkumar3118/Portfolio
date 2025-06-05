
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import jsPDF from 'jspdf';

const Contact = () => {
  const downloadResume = () => {
    const doc = new jsPDF();
    
    // Set font
    doc.setFont("helvetica");
    
    // Add profile image
    const img = new Image();
    img.onload = () => {
      // Add image to PDF (positioned at top right)
      doc.addImage(img, 'PNG', 150, 10, 40, 40);
      
      // Header
      doc.setFontSize(20);
      doc.setTextColor(128, 0, 128); // Purple color
      doc.text("UPPU LOKESH KUMAR", 20, 20);
      
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text("uppulokeshkumar@gmail.com | 9440629595 | Hyderabad, Telangana", 20, 30);
      
      // Profile
      doc.setFontSize(16);
      doc.setTextColor(128, 0, 128);
      doc.text("Profile", 20, 60);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      const profileText = "I have a keen interest in programming and technology. I am familiar with the basics of Python and C++, which I have been exploring to build my foundation in coding.";
      const splitProfile = doc.splitTextToSize(profileText, 170);
      doc.text(splitProfile, 20, 67);
      
      // Education
      doc.setFontSize(16);
      doc.setTextColor(128, 0, 128);
      doc.text("Education", 20, 90);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text("• Pursuing MCA in Data Science from Aurora's Technological & Research Institute, Hyderabad (October 2023)", 20, 97);
      doc.text("• BSC - AVIATION from Hindustan institute of engineering technology – Chennai (2022)", 20, 104);
      doc.text("• Intermediate – from Sri Chaitanya junior college Hyderabad (2019)", 20, 111);
      
      // Skills
      doc.setFontSize(16);
      doc.setTextColor(128, 0, 128);
      doc.text("Skills", 20, 130);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text("Programming: Python, C++", 20, 137);
      doc.text("Tools: PowerBI, SQL, Machine Learning", 20, 144);
      doc.text("Languages: English, Telugu, Hindi", 20, 151);
      
      // Projects
      doc.setFontSize(16);
      doc.setTextColor(128, 0, 128);
      doc.text("Major Projects", 20, 170);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text("• YouTube Analytics Dashboard - Web Mining Application", 20, 177);
      doc.text("• Study Buddy: AI Assistant", 20, 184);
      doc.text("• Interactive CNN Model for Image Classification (CIFAR-10)", 20, 191);
      doc.text("• Student Grading System (SGS)", 20, 198);
      doc.text("• Sentiment Analysis of Product Reviews", 20, 205);
      doc.text("• Electricity Billing System (C++ & SQL)", 20, 212);
      doc.text("• Hunt The Wumpus Game (Python & Pygame)", 20, 219);
      doc.text("• Snake Game (Python & GUI)", 20, 226);
      
      // Certificates
      doc.setFontSize(16);
      doc.setTextColor(128, 0, 128);
      doc.text("Certificates", 20, 245);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text("• Internship from Tech Mind Sparc Innovations", 20, 252);
      doc.text("• National Level Multidisciplinary Young Research Student Paper Presentation Competition", 20, 259);
      doc.text("• CognoRise InfoTech Web Dev Hackathon", 20, 266);
      doc.text("• Machine Learning and GenAI - Aurora Deemed to be University", 20, 273);
      doc.text("• Data Visualization & Modeling using Orange software - AZ EduLearningHub LLP", 20, 280);
      
      // Save the PDF
      doc.save("Uppu_Lokesh_Kumar_Resume.pdf");
    };
    
    img.crossOrigin = "anonymous";
    img.src = "/lovable-uploads/c8d0b0e8-b562-421f-ae9b-c55da8c07565.png";
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi Lokesh! I found your portfolio and would like to connect with you.");
    window.open(`https://wa.me/919440629595?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "uppulokeshkumar@gmail.com",
      href: "mailto:uppulokeshkumar@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9440629595",
      href: "tel:+919440629595",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities in data science and software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <item.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      {item.href !== "#" ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-purple-400 transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="pt-6">
              <Button
                onClick={downloadResume}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2" size={20} />
                Download Resume (PDF)
              </Button>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
              <p className="text-gray-300 leading-relaxed">
                I'm always open to discussing new opportunities, collaborating on projects, or simply connecting with fellow developers and data science enthusiasts. Feel free to reach out!
              </p>
            </div>
          </div>

          {/* WhatsApp Message */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <div className="text-center space-y-6">
              <div className="mx-auto w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <MessageCircle className="text-white" size={40} />
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Message me on WhatsApp</h4>
                <p className="text-gray-300 mb-6">
                  Click the button below to send me a direct message on WhatsApp. I'll get back to you as soon as possible!
                </p>
              </div>

              <Button
                onClick={openWhatsApp}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2" size={20} />
                Message on WhatsApp
              </Button>

              <p className="text-sm text-gray-400">
                +91 9440629595
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
