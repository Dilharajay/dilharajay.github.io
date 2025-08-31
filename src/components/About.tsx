import React from 'react';
import { BookOpen, Camera, Cpu, BarChart3 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a passionate Data Science undergraduate with a deep fascination for the intersection 
              of technology and creativity. My journey spans across analytical problem-solving, 
              innovative hardware development, and visual storytelling.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              When I'm not diving deep into datasets or building electronic circuits, you'll find me 
              behind a camera, capturing moments and creating visual narratives that tell compelling stories.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-300">
                <BarChart3 className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800">Data Science</h3>
                <p className="text-sm text-slate-600 mt-2">Analyzing patterns and extracting insights</p>
              </div>
              
              <div className="text-center p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-300">
                <Cpu className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800">Robotics</h3>
                <p className="text-sm text-slate-600 mt-2">Building intelligent systems</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <BookOpen className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Current Focus</h3>
                  <p className="text-blue-100">Data Science Studies</p>
                </div>
                
                <div className="text-center">
                  <Camera className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Creative Side</h3>
                  <p className="text-blue-100">Visual Storytelling</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Philosophy</h4>
                <p className="text-blue-100 text-sm">
                  "Innovation happens at the intersection of technology and creativity. 
                  I believe in using data-driven insights to build meaningful solutions 
                  while capturing the beauty of our world through visual media."
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;