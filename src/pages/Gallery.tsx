import img1 from "../assets/images/gates/gate1.jpg";
import img2 from "../assets/images/gates/gate2.jpg";
import img3 from "../assets/images/gates/gate3.jpg";
import img4 from "../assets/images/gates/gate4.jpg";
import img5 from "../assets/images/gates/gate5.jpg";
import img6 from "../assets/images/gates/gate6.jpg";
import img7 from "../assets/images/gates/gate7.jpg";
import img8 from "../assets/images/gates/gate8.jpg";
import img9 from "../assets/images/gates/gate9.jpg";
import img10 from "../assets/images/gates/gate10.jpg";
import img11 from "../assets/images/gates/gate11.jpg";
import img12 from "../assets/images/gates/gate12.jpg";
import railing1 from "../assets/images/railings/railing1.jpg";
import railing2 from "../assets/images/railings/railing2.jpg";
import railing3 from "../assets/images/railings/railing3.jpg";
import railing4 from "../assets/images/railings/railing4.jpg";
import railing5 from "../assets/images/railings/railing5.jpg";
import railing6 from "../assets/images/railings/railing6.jpg";
import railing7 from "../assets/images/railings/railing7.jpg";
import railing8 from "../assets/images/railings/railing8.jpg";
import mural1 from "../assets/images/murals/mural1.jpg";
import mural2 from "../assets/images/murals/mural2.jpg";
import mural3 from "../assets/images/murals/mural3.jpg";
import mural4 from "../assets/images/murals/mural4.jpg";
import mural5 from "../assets/images/murals/mural5.jpg";
import mural6 from "../assets/images/murals/mural6.jpg";
import acc1 from "../assets/images/accessories/acc1.jpg";
import acc2 from "../assets/images/accessories/acc2.jpg";
import acc3 from "../assets/images/accessories/acc3.jpg";
import acc4 from "../assets/images/accessories/acc4.jpg";
import acc5 from "../assets/images/accessories/acc5.jpg";
import acc6 from "../assets/images/accessories/acc6.jpg";
import acc7 from "../assets/images/accessories/acc7.jpg";
import acc8 from "../assets/images/accessories/acc8.jpg";
import proj1 from "../assets/images/projects/proj1.jpg";
import proj2 from "../assets/images/projects/proj2.jpg";
import proj3 from "../assets/images/projects/proj3.jpg";
import proj4 from "../assets/images/projects/proj4.jpg";
import proj5 from "../assets/images/projects/proj5.jpg";
import proj6 from "../assets/images/projects/proj6.jpg";
import proj7 from "../assets/images/projects/proj7.jpg";
import proj8 from "../assets/images/projects/proj8.jpg";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryProps {
  onNavigate: (page: string) => void;
  initialCategory?: string;
}

const categories = [
  {
    id: "gates",
    name: "Royal Gates & Main Doors",
    description: "Majestic entrance gates and main doors crafted with precision metalwork",
    images: [
      { src: img1, title: "Grand Main Door", location: "Hyderabad" },
      { src: img2, title: "Heritage Entrance Door", location: "Bangalore" },
      { src: img3, title: "Classic Steel Gate", location: "Chennai" },
      { src: img4, title: "Full-Panel Royal Gate", location: "Mumbai" },
      { src: img5, title: "Ornamental Main Door", location: "Hyderabad" },
      { src: img6, title: "Designer Entry Gate", location: "Vizag" },
      { src: img7, title: "Premium Wrought Gate", location: "Pune" },
      { src: img8, title: "Steel Artisan Door", location: "Delhi" },
      { src: img9, title: "Arc Designed Entry", location: "Bangalore" },
      { src: img10, title: "Luxury Main Door", location: "Hyderabad" },
      { src: img11, title: "Heritage Gate Design", location: "Chennai" },
      { src: img12, title: "Premium Gate Series", location: "Mumbai" },
    ],
  },
  {
    id: "railings",
    name: "Elegant Railings & Handles",
    description: "Sophisticated railings, handles and balustrades for staircases and balconies",
    images: [
      { src: railing1, title: "Ornamental Staircase Railing", location: "Hyderabad" },
      { src: railing2, title: "Minimalist Handle Series", location: "Bangalore" },
      { src: railing3, title: "Classic Wrought Iron Railing", location: "Delhi" },
      { src: railing4, title: "Premium Steel Balustrade", location: "Mumbai" },
      { src: railing5, title: "Designer Handle Collection", location: "Chennai" },
      { src: railing6, title: "Ornate Balcony Railing", location: "Pune" },
      { src: railing7, title: "Modern Stair Railing", location: "Vizag" },
      { src: railing8, title: "Art Deco Railing", location: "Kolkata" },
    ],
  },
  {
    id: "murals",
    name: "Wall Murals",
    description: "Artistic metal wall murals that transform interiors into stunning art spaces",
    images: [
      { src: mural1, title: "Nature Inspired Wall Mural", location: "Hyderabad" },
      { src: mural2, title: "Heritage Metal Artwork", location: "Bangalore" },
      { src: mural3, title: "Abstract Metal Mural", location: "Mumbai" },
      { src: mural4, title: "Textured Bronze Mural", location: "Chennai" },
      { src: mural5, title: "Contemporary Relief Panel", location: "Delhi" },
      { src: mural6, title: "Copper Feature Wall", location: "Hyderabad" },
    ],
  },
  {
    id: "accessories",
    name: "Metal Accessories",
    description: "Bespoke decorative metal accessories and statement pieces",
    images: [
      { src: acc1, title: "Designer Metal Accessory", location: "Hyderabad" },
      { src: acc2, title: "Premium Metal Accent", location: "Bangalore" },
      { src: acc3, title: "Ornamental Piece", location: "Mumbai" },
      { src: acc4, title: "Handcrafted Accent", location: "Chennai" },
      { src: acc5, title: "Statement Metal Work", location: "Pune" },
      { src: acc6, title: "Decorative Element", location: "Delhi" },
      { src: acc7, title: "Metal Craft Piece", location: "Vizag" },
      { src: acc8, title: "Artisan Accessory", location: "Kolkata" },
    ],
  },
  {
    id: "projects",
    name: "Project Installations",
    description: "Premium completed installations across landmark residences and commercial spaces",
    images: [
      { src: proj1, title: "Residential Villa Gate", location: "Hyderabad" },
      { src: proj2, title: "Heritage Bungalow Entry", location: "Bangalore" },
      { src: proj3, title: "Estate Installation", location: "Chennai" },
      { src: proj4, title: "Corporate Lobby Feature", location: "Mumbai" },
      { src: proj5, title: "Premium Residence Project", location: "Hyderabad" },
      { src: proj6, title: "Luxury Apartment Work", location: "Pune" },
      { src: proj7, title: "Commercial Installation", location: "Delhi" },
      { src: proj8, title: "Site Metalwork", location: "Vizag" },
    ],
  },
];

import { useSEO } from "../hooks/useSEO";

export default function Gallery({ onNavigate, initialCategory }: GalleryProps) {
  useSEO({
    title: "Royal Gallery - Metal Masterpieces",
    description: "Explore our Royal Gallery featuring majestic entrance gates, elegant railings, wall murals, and bespoke metal accessories."
  });
  const [activeCategory, setActiveCategory] = useState(initialCategory || "gates");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % currentCategory.images.length);

  const prevImage = () =>
    setLightboxIndex(
      (prev) => (prev - 1 + currentCategory.images.length) % currentCategory.images.length
    );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={img8}
          alt="Royal Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-primary-gold text-sm uppercase tracking-[0.5em] mb-6 font-sans">
            Exclusive Collection
          </p>
          <h1 className="text-white font-serif text-3xl md:text-7xl lg:text-8xl font-normal mb-6">
            Royal Gallery
          </h1>
          <p className="text-white/70 text-lg max-w-2xl font-sans font-light">
            Explore our curated collection of handcrafted metal masterpieces,
            each piece telling a story of timeless elegance and superior craftsmanship
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Category Navigation */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 text-sm uppercase tracking-[0.15em] font-sans whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary-navy text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Header */}
      <section className="py-10 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-5xl text-primary-navy mb-4">
            {currentCategory.name}
          </h2>
          <p className="text-gray-500 text-lg font-sans font-light">
            {currentCategory.description}
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary-gold to-transparent" />
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory.images.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden cursor-pointer aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary-gold text-xs uppercase tracking-[0.3em] mb-2 font-sans">
                    {image.location}
                  </p>
                  <h3 className="text-white font-serif text-2xl">{image.title}</h3>
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/0 group-hover:border-primary-gold transition-all duration-500" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/0 group-hover:border-primary-gold transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-primary-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-primary-gold font-serif text-5xl md:text-6xl mb-2">35+</p>
              <p className="text-white/60 text-sm uppercase tracking-[0.2em] font-sans">Years Experience</p>
            </div>
            <div>
              <p className="text-primary-gold font-serif text-5xl md:text-6xl mb-2">500+</p>
              <p className="text-white/60 text-sm uppercase tracking-[0.2em] font-sans">Projects Completed</p>
            </div>
            <div>
              <p className="text-primary-gold font-serif text-5xl md:text-6xl mb-2">50+</p>
              <p className="text-white/60 text-sm uppercase tracking-[0.2em] font-sans">Master Artisans</p>
            </div>
            <div>
              <p className="text-primary-gold font-serif text-5xl md:text-6xl mb-2">12</p>
              <p className="text-white/60 text-sm uppercase tracking-[0.2em] font-sans">Design Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-primary-gold text-sm uppercase tracking-[0.4em] mb-6 font-sans">
            Commission Your Masterpiece
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-navy mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-500 text-lg mb-10 font-sans font-light">
            Our artisans are ready to bring your vision to life with bespoke metal creations
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-4 bg-primary-navy text-white px-10 py-5 text-sm uppercase tracking-[0.2em] hover:bg-primary-gold transition-colors duration-500"
          >
            Start Your Project
          </button>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors z-50"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
          >
            <ChevronLeft size={48} />
          </button>

          <div className="max-w-6xl max-h-[80vh] px-20">
            <img
              src={currentCategory.images[lightboxIndex].src}
              alt={currentCategory.images[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain mx-auto"
            />
            <div className="text-center mt-8">
              <p className="text-primary-gold text-sm uppercase tracking-[0.3em] mb-2">
                {currentCategory.images[lightboxIndex].location}
              </p>
              <h3 className="text-white font-serif text-2xl">
                {currentCategory.images[lightboxIndex].title}
              </h3>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
          >
            <ChevronRight size={48} />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {currentCategory.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setLightboxIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === lightboxIndex
                    ? "bg-primary-gold w-8"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
