import { useState } from 'react';
<link rel="icon" type="image/png" href="/logo.png" />

import proj1 from '../assets/images/projects/proj1.jpg';
import proj2 from '../assets/images/projects/proj2.jpg';
import proj3 from '../assets/images/projects/proj3.jpg';
import proj4 from '../assets/images/projects/proj4.jpg';
import proj5 from '../assets/images/projects/proj5.jpg';
import proj6 from '../assets/images/projects/proj6.jpg';
import proj7 from '../assets/images/projects/proj7.jpg';
import proj8 from '../assets/images/projects/proj8.jpg';
import proj9 from '../assets/images/projects/proj9.jpg';
import proj10 from '../assets/images/projects/proj10.jpg';
import proj11 from '../assets/images/projects/proj11.jpg';
import proj12 from '../assets/images/projects/proj12.jpg';

import gate1 from '../assets/images/gates/gate1.jpg';
import gate2 from '../assets/images/gates/gate2.jpg';
import gate3 from '../assets/images/gates/gate3.jpg';
import gate5 from '../assets/images/gates/gate5.jpg';
import gate6 from '../assets/images/gates/gate6.jpg';
import gate7 from '../assets/images/gates/gate7.jpg';

import railing1 from '../assets/images/railings/railing1.jpg';
import railing3 from '../assets/images/railings/railing3.jpg';
import railing4 from '../assets/images/railings/railing4.jpg';
import railing5 from '../assets/images/railings/railing5.jpg';

import mural1 from '../assets/images/murals/mural1.jpg';
import mural2 from '../assets/images/murals/mural2.jpg';
import mural3 from '../assets/images/murals/mural3.jpg';
import mural4 from '../assets/images/murals/mural4.jpg';

import acc1 from '../assets/images/accessories/acc1.jpg';
import acc2 from '../assets/images/accessories/acc2.jpg';
import acc5 from '../assets/images/accessories/acc5.jpg';

import { useSEO } from '../hooks/useSEO';

interface ProjectsProps {
  onNavigate: (page: string) => void;
}

export default function Projects({ onNavigate }: ProjectsProps) {
  useSEO({
    title: "Our Metalwork Portfolio",
    description: "Explore our collection of bespoke metalwork projects including gates, railings, murals, and architectural installations across India."
  });
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'gates', 'railings', 'murals', 'accessories', 'installations'];

  const projects = [
    { id: 1, image: gate1, title: 'Grand Main Door', category: 'gates', description: 'Premium steel main door with ornamental detailing' },
    { id: 2, image: gate2, title: 'Heritage Entrance Gate', category: 'gates', description: 'Classic wrought iron gate with custom panels' },
    { id: 3, image: gate3, title: 'Steel Entry Gate', category: 'gates', description: 'Precision-crafted steel gate for a luxury villa ' },
    { id: 4, image: gate5, title: 'Ornamental Main Door', category: 'gates', description: 'Hand-forged ornamental main door ' },
    { id: 5, image: gate6, title: 'Designer Entry Gate', category: 'gates', description: 'Contemporary designer gate for a modern home' },
    { id: 6, image: gate7, title: 'Premium Wrought Gate', category: 'gates', description: 'Premium wrought iron gate with gold finish trims' },
    { id: 7, image: railing1, title: 'Ornamental Staircase Railing', category: 'railings', description: 'Elegant ornamental railing for a grand staircase ' },
    { id: 8, image: railing3, title: 'Classic Wrought Iron Railing', category: 'railings', description: 'Traditional wrought iron balustrade' },
    { id: 9, image: railing4, title: 'Premium Steel Balustrade', category: 'railings', description: 'Modern steel balustrade for a duplex apartment' },
    { id: 10, image: railing5, title: 'Designer Handle Collection', category: 'railings', description: 'Custom-designed handle collection ' },
    { id: 11, image: mural1, title: 'Nature Inspired Wall Mural', category: 'murals', description: 'Hand-crafted metal mural with nature motifs ' },
    { id: 12, image: mural2, title: 'Heritage Metal Artwork', category: 'murals', description: 'Intricate heritage artwork panel ' },
    { id: 13, image: mural3, title: 'Abstract Metal Mural', category: 'murals', description: 'Contemporary abstract mural for a corporate lobby ' },
    { id: 14, image: mural4, title: 'Textured Bronze Mural', category: 'murals', description: 'Textured bronze feature wall ' },
    { id: 15, image: acc1, title: 'Designer Metal Accessory', category: 'accessories', description: 'Statement metal accessory for interior spaces' },
    { id: 16, image: acc2, title: 'Premium Metal Accent', category: 'accessories', description: 'Premium metal accent piece ' },
    { id: 17, image: acc5, title: 'Statement Metal Piece', category: 'accessories', description: 'Bespoke statement metalwork piece ' },
    { id: 18, image: proj1, title: 'Residential Villa Gate', category: 'installations', description: 'Complete gate installation for a luxury villa ' },
    { id: 19, image: proj2, title: 'Heritage Bungalow Entry', category: 'installations', description: 'Heritage-style entry work for a classic bungalow ' },
    { id: 20, image: proj3, title: 'Estate Installation', category: 'installations', description: 'Full estate metalwork installation ' },
    { id: 21, image: proj4, title: 'Corporate Feature Work', category: 'installations', description: 'Metal feature work for a corporate campus ' },
    { id: 22, image: proj5, title: 'Premium Residence', category: 'installations', description: 'End-to-end metalwork for a premium residence' },
    { id: 23, image: proj6, title: 'Luxury Apartment', category: 'installations', description: 'Custom metalwork for a luxury high-rise apartment ' },
    { id: 24, image: proj7, title: 'Commercial Installation', category: 'installations', description: 'Commercial space metal installation ' },
    { id: 25, image: proj8, title: 'Site Metalwork', category: 'installations', description: 'On-site premium metalwork project ' },
    { id: 26, image: proj9, title: 'Bespoke Project', category: 'installations', description: 'Fully bespoke metal fabrication ' },
    { id: 27, image: proj10, title: 'Landmark Installation', category: 'installations', description: 'Landmark metalwork piece for a prestigious client' },
    { id: 28, image: proj11, title: 'Signature Work', category: 'installations', description: 'Signature project completed with master craftsmen' },
    { id: 29, image: proj12, title: 'Architectural Metal Feature', category: 'installations', description: 'Architectural metal feature for a boutique hotel' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 bg-[#F5F6F7]">
      <section className="py-10 md:py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-6xl font-serif font-bold text-[#1E2A38] mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600">
              Discover our collection of bespoke metalwork projects crafted across India
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

      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
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
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 md:py-24 bg-[#1E2A38]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can bring your vision to life with exceptional metalwork craftsmanship.
          </p>
          {onNavigate && (
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#C9A45C] text-white px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#B8934B] transition-colors"
            >
              Get In Touch
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
