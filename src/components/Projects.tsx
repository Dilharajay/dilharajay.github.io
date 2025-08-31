import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Traffic Analysis',
      category: 'Data Science',
      description: 'Machine learning model to analyze traffic patterns and optimize signal timing using computer vision and real-time data processing.',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'OpenCV', 'TensorFlow', 'Data Analysis'],
      type: 'data-science'
    },
    {
      title: 'Autonomous Drone Navigation',
      category: 'Electronics & Robotics',
      description: 'Developed an autonomous navigation system for drones using sensor fusion and path planning algorithms.',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Arduino', 'Sensors', 'Flight Control', 'Embedded C'],
      type: 'robotics'
    },
    {
      title: 'Urban Photography Series',
      category: 'Photography',
      description: 'A compelling visual narrative exploring the intersection of modern architecture and human connection in urban environments.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Street Photography', 'Architecture', 'Light & Shadow'],
      type: 'photography'
    },
    {
      title: 'IoT Home Automation',
      category: 'Electronics & Robotics',
      description: 'Complete smart home system with voice control, energy monitoring, and mobile app integration.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Raspberry Pi', 'IoT', 'Mobile App', 'Voice Control'],
      type: 'robotics'
    },
    {
      title: 'Documentary Film Project',
      category: 'Videography',
      description: 'Short documentary exploring the impact of technology on traditional craftsmanship in local communities.',
      image: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Documentary', 'Storytelling', 'Color Grading', 'Sound Design'],
      type: 'videography'
    },
    {
      title: 'Predictive Analytics Dashboard',
      category: 'Data Science',
      description: 'Interactive dashboard for retail sales forecasting using time series analysis and machine learning models.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'D3.js', 'Time Series', 'Forecasting'],
      type: 'data-science'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my work across data science, robotics, and visual storytelling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                    <ExternalLink size={16} />
                  </button>
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                    {project.type === 'videography' ? <Play size={16} /> : <Github size={16} />}
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.type === 'data-science' ? 'bg-blue-100 text-blue-600' :
                    project.type === 'robotics' ? 'bg-emerald-100 text-emerald-600' :
                    'bg-amber-100 text-amber-600'
                  }`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;