import { useState } from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'sculptures', 'murals', 'grills', 'gates', 'installations'];

  const projects = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Corporate Atrium Sculpture',
      category: 'sculptures',
      description: 'Sweeping stainless steel installation',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Estate Entry Gates',
      category: 'gates',
      description: 'Bronze and steel custom gates',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Modern Art Installation',
      category: 'installations',
      description: 'Geometric metal art piece',
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Architectural Wall Mural',
      category: 'murals',
      description: 'Textured copper wall feature',
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Security Grillwork',
      category: 'grills',
      description: 'Decorative steel security grills',
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Abstract Garden Sculpture',
      category: 'sculptures',
      description: 'Weathered steel outdoor art',
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Lobby Feature Wall',
      category: 'murals',
      description: 'Brushed aluminum relief panels',
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Heritage Gate Restoration',
      category: 'gates',
      description: 'Wrought iron restoration project',
    },
    {
      id: 9,
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Public Art Installation',
      category: 'installations',
      description: 'Large-scale civic sculpture',
    },
    {
      id: 10,
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Window Grills',
      category: 'grills',
      description: 'Contemporary security design',
    },
    {
      id: 11,
      image: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Kinetic Sculpture',
      category: 'sculptures',
      description: 'Moving metal art piece',
    },
    {
      id: 12,
      image: 'https://images.pexels.com/photos/2219023/pexels-photo-2219023.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Plaza Installation',
      category: 'installations',
      description: 'Interactive urban sculpture',
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 bg-[#F5F6F7]">
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#1E2A38] mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600">
              Discover our collection of bespoke metalwork projects
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === category
                    ? 'bg-[#C9A45C] text-white'
                    : 'bg-white text-[#1E2A38] border border-gray-300 hover:border-[#C9A45C] hover:text-[#C9A45C]'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <p className="text-[#C9A45C] text-xs font-semibold uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-serif font-bold text-[#1E2A38] mb-2 group-hover:text-[#C9A45C] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-[#1E2A38]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can bring your vision to life with exceptional metalwork craftsmanship.
          </p>
        </div>
      </section>
    </div>
  );
}
