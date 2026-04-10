// src/pages/Gallery.tsx
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/images/main_door/img1.jpg";
import img2 from "../assets/images/main_door/img2.jpg";
import img3 from "../assets/images/main_door/img3.jpg";
import img4 from "../assets/images/main_door/img4.jpg";
import img5 from "../assets/images/main_door/img5.jpg";
import img6 from "../assets/images/main_door/img6.jpg";
import img7 from "../assets/images/main_door/img7.jpg";
import img8 from "../assets/images/main_door/img8.jpg";
import img9 from "../assets/images/main_door/img9.jpg";
import img10 from "../assets/images/main_door/img10.jpg";
import img11 from "../assets/images/main_door/img2.jpg";
import img12 from "../assets/images/main_door/img3.jpg";
import img13 from "../assets/images/main_door/img12.jpg";
import img14 from "../assets/images/main_door/img1.jpg";
import img15 from "../assets/images/main_door/img13.jpg";
import img16 from "../assets/images/main_door/img3.jpg";
interface GalleryProps {
  onNavigate: (page: string) => void;
  initialCategory?: string;
}

const categories = [
  {
    id: "gates",
    name: "Royal Gates",
    description: "Majestic entrance gates crafted with precision",
    images: [
      {
        src: img1,
        title: "Grand Palace Gate",
        location: "Hyderabad",
      },
      {
        src: img2,
        title: "Heritage Mansion Entry",
        location: "Bangalore",
      },
      {
        src: img3,
        title: "Victorian Style Gate",
        location: "Chennai",
      },
      {
        src: img4,
        title: "Modern Royal Gate",
        location: "Mumbai",
      },
    ],
  },
  {
    id: "railings",
    name: "Elegant Railings",
    description: "Sophisticated railings for staircases and balconies",
    images: [
      {
        src: img5,
        title: "Spiral Staircase Railing",
        location: "Vizag",
      },
      {
        src: img6,
        title: "Balcony Ornamental Railing",
        location: "Delhi",
      },
      {
        src: img7,
        title: "Classic Wrought Iron",
        location: "Kolkata",
      },
      {
        src: img8,
        title: "Art Deco Balustrade",
        location: "Pune",
      },
    ],
  },
  {
    id: "sculptures",
    name: "Metal Sculptures",
    description: "Artistic metal sculptures for interiors and gardens",
    images: [
      {
        src: img9,
        title: "Abstract Garden Sculpture",
        location: "Jaipur",
      },
      {
        src: img10,
        title: "Contemporary Art Piece",
        location: "Ahmedabad",
      },
      {
        src: img11,
        title: "Heritage Bronze Work",
        location: "Lucknow",
      },
      {
        src: img12,
        title: "Modern Steel Installation",
        location: "Kochi",
      },
    ],
  },
  {
    id: "chandeliers",
    name: "Grand Chandeliers",
    description: "Luxurious lighting masterpieces",
    images: [
      {
        src: img13,
        title: "Crystal Metal Chandelier",
        location: "Mysore Palace",
      },
      {
        src: img14,
        title: "Contemporary Pendant",
        location: "Taj Hotel",
      },
      {
        src: img15,
        title: "Vintage Brass Chandelier",
        location: "Heritage Haveli",
      },
      {
        src: img16,
        title: "Modern Ring Light",
        location: "IT Park Lobby",
      },
    ],
  },
  {
    id: "doors",
    name: "Designer Doors",
    description: "Statement entrance doors that command attention",
    images: [
      {
        src: img12,
        title: "Carved Metal Door",
        location: "Royal Residence",
      },
      {
        src: img13,
        title: "Pivot Door Design",
        location: "Corporate HQ",
      },
      {
        src: img11,
        title: "Heritage Bronze Door",
        location: "Temple Complex",
      },
      {
        src: img2,
        title: "Contemporary Steel Entry",
        location: "Villa Project",
      },
    ],
  },
  {
    id: "furniture",
    name: "Metal Furniture",
    description: "Bespoke metal furniture pieces",
    images: [
      {
        src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
        title: "Wrought Iron Table",
        location: "Boutique Hotel",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
        title: "Metal Console Design",
        location: "Penthouse",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
        title: "Outdoor Seating",
        location: "Resort Garden",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
        title: "Decorative Shelf Unit",
        location: "Luxury Store",
      },
    ],
  },
];

export default function Gallery({ onNavigate, initialCategory }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory || "gates");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % currentCategory.images.length);
  };

  const prevImage = () => {
    setLightboxIndex(
      (prev) => (prev - 1 + currentCategory.images.length) % currentCategory.images.length
    );
  };

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
          <h1 className="text-white font-serif text-5xl md:text-7xl lg:text-8xl font-normal mb-6">
            Royal Gallery
          </h1>
          <p className="text-white/70 text-lg max-w-2xl font-sans font-light">
            Explore our curated collection of handcrafted metal masterpieces,
            each piece telling a story of timeless elegance and superior craftsmanship
          </p>
        </div>
        {/* Decorative Elements */}
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
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-primary-navy mb-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <h3 className="text-white font-serif text-2xl">
                    {image.title}
                  </h3>
                </div>
                {/* Corner Decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/0 group-hover:border-primary-gold transition-all duration-500" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/0 group-hover:border-primary-gold transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-navy">
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
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-primary-gold text-sm uppercase tracking-[0.4em] mb-6 font-sans">
            Commission Your Masterpiece
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-navy mb-6">
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

          {/* Thumbnails */}
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
