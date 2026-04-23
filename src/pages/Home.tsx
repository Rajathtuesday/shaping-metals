import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Hero from "../components/Hero";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slide1 from "../assets/images/gates/gate1.jpg";
import slide2 from "../assets/images/gates/gate4.jpg";
import slide3 from "../assets/images/murals/mural1.jpg";
import slide4 from "../assets/images/railings/railing1.jpg";
import slide5 from "../assets/images/accessories/acc1.jpg";

import proj1 from "../assets/images/projects/proj1.jpg";
import proj2 from "../assets/images/projects/proj2.jpg";
import proj3 from "../assets/images/projects/proj3.jpg";
import proj4 from "../assets/images/projects/proj4.jpg";
import proj5 from "../assets/images/projects/proj5.jpg";

import aboutImg from "../assets/images/about/about1.jpg";

interface HomeProps {
  onNavigate?: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {

const collections = [slide1, slide2, slide3, slide4, slide5];

const projects = [
  { image: proj1, title: "Hyderabad | Telangana" },
  { image: proj2, title: "Bangalore | Karnataka" },
  { image: proj3, title: "Chennai | Tamil Nadu" },
  { image: proj4, title: "Mumbai | Maharashtra" },
  { image: proj5, title: "Vizag | Andhra Pradesh" },
];

return (
<div className="bg-white text-primary-navy">

{/* HERO SECTION */}
<Hero onNavigate={onNavigate} />

{/* PREMIUM METAL COLLECTIONS */}
<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl font-serif text-center mb-16">
  Premium Metal Collections
</h2>

<Swiper
  modules={[Autoplay]}
  spaceBetween={40}
  slidesPerView={3}
  loop={true}
  speed={9000}
  autoplay={{ delay: 0, disableOnInteraction: false }}
  breakpoints={{
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  {collections.map((img, index) => (
    <SwiperSlide key={index}>
      <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
        <img
          src={img}
          className="h-[320px] w-full object-cover hover:scale-110 transition duration-700"
          alt="Metal collection"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

<div className="text-center mt-14">
  <button
    onClick={() => onNavigate("gallery")}
    className="border border-black px-10 py-4 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition"
  >
    View Full Gallery
  </button>
</div>
</div>
</section>

{/* ABOUT SECTION */}
<section className="py-24 bg-[#1E2A38] text-white">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

  <img
    src={aboutImg}
    className="rounded-lg shadow-xl w-full h-[450px] object-cover"
    alt="Shaping Metals craftsmanship"
  />

  <div>
    <h2 className="text-5xl font-serif mb-6">
      Craftsmanship Since 2010
    </h2>
    <p className="text-gray-300 text-lg mb-6">
      With over a decade of experience, we specialize in creating bespoke
      metal gates, railings, wall murals, and luxury design elements for
      premium residential and commercial spaces across South India.
    </p>
    <p className="text-gray-300 text-lg mb-8">
      Our skilled artisans combine traditional craftsmanship with modern
      engineering to create timeless metal masterpieces that stand the test
      of time.
    </p>
    <button
      onClick={() => onNavigate("about")}
      className="border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-[#1E2A38] transition"
    >
      Learn More About Us
    </button>
  </div>

</div>
</section>

{/* RECENT PROJECTS */}
<section className="py-24 bg-[#F5F6F7]">
<div className="max-w-7xl mx-auto px-6">
  <h2 className="text-center text-4xl font-serif mb-16">Recent Projects</h2>

  <Swiper
    modules={[Autoplay]}
    spaceBetween={24}
    slidesPerView={3}
    loop={true}
    speed={6000}
    autoplay={{ delay: 0, disableOnInteraction: false }}
    breakpoints={{
      0: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
  >
    {projects.map((project, index) => (
      <SwiperSlide key={index}>
        <div className="text-center">
          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            <img
              src={project.image}
              className="h-[300px] w-full object-cover hover:scale-110 transition duration-700"
              alt={project.title}
            />
          </div>
          <p className="mt-4 text-sm text-gray-700 font-medium">{project.title}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
</section>

{/* CATALOG SECTION */}
<section className="py-24 bg-white text-primary-navy">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
  <div>
    <h2 className="text-5xl font-serif mb-6">
      Download Our Catalog
    </h2>
    <p className="text-gray-600 text-lg mb-8">
      Explore our exclusive collection of bespoke metal designs. Request our comprehensive catalog to discover the perfect piece for your space.
    </p>
  </div>
  <div className="bg-[#F5F6F7] p-8 rounded-xl shadow-lg border border-gray-100">
    <form onSubmit={(e) => { e.preventDefault(); alert('Catalog requested successfully!'); }} className="space-y-4 text-left">
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Name *</label>
        <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none" placeholder="Your Name" required />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Phone Number *</label>
        <input type="tel" className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none" placeholder="Your Phone Number" required />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Area *</label>
        <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none" placeholder="Your Area / City" required />
      </div>
      <button type="submit" className="w-full bg-[#1E2A38] text-white py-4 mt-4 hover:bg-[#C9A45C] transition-colors uppercase tracking-widest text-sm font-semibold">
        Request Catalog
      </button>
    </form>
  </div>
</div>
</section>

{/* CTA */}
<section className="py-32 bg-[#1E2A38] text-white text-center">
<h2 className="text-5xl font-serif mb-6">
  Start Your Custom Project
</h2>
<p className="text-xl text-gray-300 mb-10">
  Collaborate with us to create extraordinary metal designs for your space.
</p>
<button
  onClick={() => onNavigate("contact")}
  className="bg-[#C9A45C] px-10 py-5 uppercase tracking-widest text-sm"
>
  Contact Us
</button>
</section>

</div>
);
}
