import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Play } from "lucide-react";

import img1 from "../assets/images/gates/gate1.jpg";
import img2 from "../assets/images/railings/railing4.jpg";
import img3 from "../assets/images/murals/mural2.jpg";
interface HeroProps {
  onNavigate: (page: string) => void;
}

const featuredCategories = [
  {
    id: "gates",
    name: "Royal Gates",
    image: img1,
  },
  {
    id: "railings",
    name: "Elegant Railings",
    image: img2,
  },
  {
    id: "murals",
    name: "Wall Murals",
    image: img3,
  },
  {
    id: "accessories",
    name: "Metal Accessories",
    image: img1,
  },
];

export default function Hero({ onNavigate }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const heroSlides = [
    {
      image: img1,
      title: "Artistry in Metal",
      subtitle: "Bespoke Creations",
      description: "Where timeless craftsmanship meets contemporary design",
    },
    {
      image: img2,
      title: "Timeless Elegance",
      subtitle: "Architectural Excellence",
      description: "Transforming spaces with sculptural metal masterpieces",
    },
    {
      image: img3,
      title: "Sculpted Luxury",
      subtitle: "Masterful Craftsmanship",
      description: "Heritage techniques refined for modern sophistication",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <>
      {/* Main Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Images */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${
              index === current
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
            {/* Subtitle */}
            <div
              className={`overflow-hidden mb-4 transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <p
                className={`text-primary-gold text-sm uppercase tracking-[0.4em] font-sans font-light transition-transform duration-1000 ${
                  isLoaded ? "translate-y-0" : "translate-y-full"
                }`}
              >
                {heroSlides[current].subtitle}
              </p>
            </div>

            {/* Main Title */}
            <div className="overflow-hidden">
              <h1
                key={current}
                className="text-white font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal leading-none tracking-tight animate-slide-up"
              >
                {heroSlides[current].title.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </h1>
            </div>

            {/* Description */}
            <div
              className={`mt-8 max-w-lg transition-all duration-1000 delay-400 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-white/70 text-lg font-sans font-light leading-relaxed">
                {heroSlides[current].description}
              </p>
            </div>

            {/* Decorative Line */}
            <div
              className={`mt-10 mb-8 transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="h-px w-24 bg-gradient-to-r from-primary-gold to-transparent" />
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-6 transition-all duration-1000 delay-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <button
                onClick={() => onNavigate("gallery")}
                className="group flex items-center gap-4 bg-primary-gold text-primary-navy px-8 py-4 hover:bg-white transition-colors duration-500"
              >
                <span className="text-sm uppercase tracking-[0.2em] font-sans font-medium">
                  View Gallery
                </span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => onNavigate("projects")}
                className="group flex items-center gap-4 text-white hover:text-primary-gold transition-colors duration-500 border border-white/30 px-8 py-4 hover:border-primary-gold"
              >
                <span className="text-sm uppercase tracking-[0.2em] font-sans font-light">
                  Our Projects
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-32 left-8 lg:left-16 z-20 flex flex-col gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className="group flex items-center gap-4"
            >
              <span
                className={`block h-px transition-all duration-500 ${
                  index === current
                    ? "w-12 bg-primary-gold"
                    : "w-6 bg-white/40 group-hover:bg-white/70"
                }`}
              />
              <span
                className={`text-xs font-sans tracking-wider transition-all duration-500 ${
                  index === current
                    ? "text-primary-gold opacity-100"
                    : "text-white/40 opacity-0 group-hover:opacity-100"
                }`}
              >
                0{index + 1}
              </span>
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 hover:text-primary-gold transition-colors duration-500 group"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans">
            Scroll
          </span>
          <ChevronDown
            size={20}
            className="animate-bounce group-hover:text-primary-gold"
          />
        </button>

        {/* Side Text */}
        <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
          <p className="text-white/40 text-xs uppercase tracking-[0.4em] font-sans rotate-90 origin-center whitespace-nowrap">
            Shaping Metals Since 1989
          </p>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-24 left-8 lg:left-16 w-16 h-16 border-l border-t border-white/10" />
        <div className="absolute bottom-24 right-8 lg:right-16 w-16 h-16 border-r border-b border-white/10" />
      </section>

      {/* Featured Categories - Clickable Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary-gold text-sm uppercase tracking-[0.4em] mb-4 font-sans">
              Explore Our Collections
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-navy mb-6">
              Royal Categories
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-sans font-light">
              Discover our curated categories of handcrafted metal masterpieces, 
              each collection representing decades of artisanal excellence
            </p>
          </div>

          {/* Category Grid - Clickable */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category, index) => (
              <div
                key={category.id}
                onClick={() => onNavigate("gallery")}
                className="group relative overflow-hidden cursor-pointer aspect-[3/4]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-primary-navy/0 group-hover:bg-primary-navy/40 transition-colors duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-px w-8 bg-primary-gold" />
                    <span className="text-primary-gold text-xs uppercase tracking-[0.2em] font-sans">
                      Collection
                    </span>
                  </div>
                  <h3 className="text-white font-serif text-xl md:text-2xl group-hover:text-primary-gold transition-colors duration-500">
                    {category.name}
                  </h3>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:bg-primary-gold group-hover:border-primary-gold">
                  <ArrowRight size={16} className="text-white group-hover:text-primary-navy" />
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-white/0 group-hover:border-primary-gold transition-all duration-500" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-white/0 group-hover:border-primary-gold transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("gallery")}
              className="group inline-flex items-center gap-4 text-primary-navy hover:text-primary-gold transition-colors duration-500"
            >
              <span className="text-sm uppercase tracking-[0.3em] font-sans">
                View All Categories
              </span>
              <span className="flex items-center justify-center w-10 h-10 border border-primary-navy/30 rounded-full group-hover:border-primary-gold group-hover:bg-primary-gold/10 transition-all duration-500">
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Video/Showcase Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={img1}
            alt="Showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-navy/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary-gold text-sm uppercase tracking-[0.4em] mb-6 font-sans">
                Our Legacy
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
                Three Decades of Excellence
              </h2>
              <p className="text-white/70 text-lg font-sans font-light leading-relaxed mb-8">
                Since 1989, we have been the premier destination for luxury metal artistry. 
                Our master craftsmen combine traditional techniques with contemporary innovation 
                to create pieces that define spaces and inspire awe.
              </p>
              <div className="flex gap-12 mb-10">
                <div>
                  <p className="text-primary-gold font-serif text-4xl md:text-5xl">35+</p>
                  <p className="text-white/50 text-sm uppercase tracking-wider font-sans mt-1">Years</p>
                </div>
                <div>
                  <p className="text-primary-gold font-serif text-4xl md:text-5xl">500+</p>
                  <p className="text-white/50 text-sm uppercase tracking-wider font-sans mt-1">Projects</p>
                </div>
                <div>
                  <p className="text-primary-gold font-serif text-4xl md:text-5xl">50+</p>
                  <p className="text-white/50 text-sm uppercase tracking-wider font-sans mt-1">Artisans</p>
                </div>
              </div>
              <button
                onClick={() => onNavigate("about")}
                className="group flex items-center gap-4 text-white hover:text-primary-gold transition-colors duration-500"
              >
                <span className="text-sm uppercase tracking-[0.3em] font-sans font-light">
                  Discover Our Story
                </span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            {/* Video Play Button */}
            <div className="relative">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80"
                  alt="Craftsmanship Video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Play size={32} className="text-primary-navy ml-1" fill="currentColor" />
                  </div>
                </button>
              </div>
              {/* Corner Decorations */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-primary-gold" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-r-2 border-b-2 border-primary-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-primary-gold text-sm uppercase tracking-[0.4em] mb-4 font-sans">
                Featured Works
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-primary-navy">
                Signature Pieces
              </h2>
            </div>
            <button
              onClick={() => onNavigate("gallery")}
              className="mt-6 md:mt-0 group flex items-center gap-3 text-primary-navy hover:text-primary-gold transition-colors duration-500"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-sans">
                View Full Gallery
              </span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Bento Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Featured Image */}
            <div
              onClick={() => onNavigate("gallery")}
              className="md:col-span-2 md:row-span-2 group relative overflow-hidden cursor-pointer aspect-square md:aspect-auto"
            >
              <img
                src={img2}
                alt="Featured Work"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-primary-gold text-xs uppercase tracking-[0.3em] mb-2 font-sans">
                  Signature Collection
                </p>
                <h3 className="text-white font-serif text-2xl md:text-3xl group-hover:text-primary-gold transition-colors duration-500">
                  Royal Palace Gates
                </h3>
                <p className="text-white/60 mt-2 font-sans font-light">
                  Hyderabad, Telangana
                </p>
              </div>
            </div>

            {/* Smaller Images */}
            <div
              onClick={() => onNavigate("gallery")}
              className="group relative overflow-hidden cursor-pointer aspect-square"
            >
              <img
                src={img3}
                alt="Staircase Railing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary-gold text-xs uppercase tracking-[0.2em] mb-1 font-sans">
                  Railings
                </p>
                <h3 className="text-white font-serif text-lg group-hover:text-primary-gold transition-colors duration-500">
                  Spiral Staircase
                </h3>
              </div>
            </div>

            <div
              onClick={() => onNavigate("gallery")}
              className="group relative overflow-hidden cursor-pointer aspect-square"
            >
              <img
                src={img1}
                alt="Metal Sculpture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary-gold text-xs uppercase tracking-[0.2em] mb-1 font-sans">
                  Sculptures
                </p>
                <h3 className="text-white font-serif text-lg group-hover:text-primary-gold transition-colors duration-500">
                  Garden Art Piece
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
}
