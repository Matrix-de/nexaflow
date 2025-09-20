import React from 'react';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Features", id: "features" },
        { name: "Solutions", id: "solutions" },
        { name: "Technology", id: "technology" },
        { name: "Pricing", id: "pricing" },
        { name: "Documentation", id: "docs" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", id: "about" },
        { name: "Careers", id: "careers" },
        { name: "Blog", id: "blog" },
        { name: "Press", id: "press" },
        { name: "Partners", id: "partners" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", id: "help" },
        { name: "Contact", id: "contact" },
        { name: "Status", id: "status" },
        { name: "Security", id: "security" },
        { name: "Privacy", id: "privacy" }
      ]
    }
  ];

  return (
    <>
      <footer className="bg-slate-950 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <Zap className="w-10 h-10 text-blue-400" />
                  <div className="absolute inset-0 w-10 h-10 bg-blue-400/20 rounded-full blur-xl" />
                </div>
                <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  AUTOMATION
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Expert AI automation solutions by Alaeddine - Transforming businesses with cutting-edge technology and professional expertise.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-400">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:alaeddine@automationsolutions.bond" className="hover:text-blue-400 transition-colors">
                    alaeddine@automationsolutions.bond
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+4915560957826" className="hover:text-blue-400 transition-colors">
                    +49 15560 957826
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span>Germany & Global Operations</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-bold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-slate-400 hover:text-blue-400 transition-colors"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500/10 py-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-center md:text-left">
                &copy; 2025 NexaFlow by Alaeddine. All rights reserved. | Professional AI Automation Solutions - Germany & Global
              </p>
              <div className="flex gap-6">
                <button className="text-slate-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </button>
                <button className="text-slate-400 hover:text-blue-400 transition-colors">
                  Terms of Service
                </button>
                <button className="text-slate-400 hover:text-blue-400 transition-colors">
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button
        onClick={() => scrollToSection('contact')}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-blue-500/50 z-50 group"
        aria-label="Contact us"
      >
        <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
      </button>
    </>
  );
};

export default Footer;