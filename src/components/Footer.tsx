import React from 'react';
import { Heart, Code, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Dilhara Jayawardhana</h3>
            <p className="text-slate-400 leading-relaxed">
              Data Science Undergraduate passionate about innovation, 
              technology, and visual storytelling.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-slate-400 hover:text-white transition-colors duration-200">About</a>
              <a href="#skills" className="block text-slate-400 hover:text-white transition-colors duration-200">Skills</a>
              <a href="#projects" className="block text-slate-400 hover:text-white transition-colors duration-200">Projects</a>
              <a href="#contact" className="block text-slate-400 hover:text-white transition-colors duration-200">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Expertise</h4>
            <div className="flex space-x-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Code className="w-5 h-5 text-blue-400" />
              </div>
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <Code className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="p-2 bg-amber-500/20 rounded-lg">
                <Camera className="w-5 h-5 text-amber-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-slate-400 text-sm">
            © 2025 Dilhara Jayawardhana. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-slate-400 text-sm mt-4 sm:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;