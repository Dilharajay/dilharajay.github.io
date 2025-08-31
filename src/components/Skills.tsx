import React from 'react';
import { BarChart3, Cpu, Camera, Brain, Zap, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Data Science',
      icon: BarChart3,
      color: 'from-blue-500 to-blue-600',
      skills: ['Python', 'R', 'Machine Learning', 'Statistical Analysis', 'Data Visualization', 'SQL'],
      description: 'Transforming raw data into actionable insights through advanced analytics and modeling.'
    },
    {
      title: 'Electronics & Robotics',
      icon: Cpu,
      color: 'from-emerald-500 to-emerald-600',
      skills: ['Arduino', 'Raspberry Pi', 'Circuit Design', 'IoT', 'Automation', 'Embedded Systems'],
      description: 'Designing and building intelligent systems that bridge the digital and physical worlds.'
    },
    {
      title: 'Photography & Videography',
      icon: Camera,
      color: 'from-amber-500 to-amber-600',
      skills: ['Portrait Photography', 'Landscape', 'Video Editing', 'Color Grading', 'Storytelling', 'Adobe Creative Suite'],
      description: 'Creating compelling visual narratives that capture emotions and tell meaningful stories.'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Expertise & Passion
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A unique blend of analytical thinking, technical innovation, and creative expression
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {category.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} opacity-10 rounded-2xl transform rotate-45 translate-x-10 -translate-y-10`}></div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Icons */}
        <div className="mt-16 flex justify-center space-x-12 opacity-60">
          <Brain className="w-8 h-8 text-slate-400 hover:text-blue-500 transition-colors duration-300" />
          <Zap className="w-8 h-8 text-slate-400 hover:text-emerald-500 transition-colors duration-300" />
          <Palette className="w-8 h-8 text-slate-400 hover:text-amber-500 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Skills;