import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Hero from "../components/Hero";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {

const collections = [
"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
];

const projects = [
{
image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
title:"Hyderabad | Telangana"
},
{
image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
title:"Andhra Pradesh"
},
{
image:"https://images.unsplash.com/photo-1600573472591-ee6c8e695481?w=800&q=80",
title:"Bangalore | Karnataka"
},
{
image:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
title:"Chennai | Tamil Nadu"
},
{
image:"https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
title:"Vizag | Andhra Pradesh"
}
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
autoplay={{
delay:0,
disableOnInteraction:false
}}
>

{collections.map((img,index)=>(
<SwiperSlide key={index}>

<div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">

<img
src={img}
className="h-[320px] w-full object-cover hover:scale-110 transition duration-700"
/>

</div>

</SwiperSlide>
))}

</Swiper>

<div className="text-center mt-14">

<button
onClick={()=>onNavigate("products")}
className="border border-black px-10 py-4 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition"
>
View More Products
</button>

</div>

</div>

</section>


{/* ABOUT SECTION */}

<section className="py-24 bg-[#1E2A38] text-white">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<img
src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
className="rounded-lg shadow-xl"
/>

<div>

<h2 className="text-5xl font-serif mb-6">
Craftsmanship Since 1989
</h2>

<p className="text-gray-300 text-lg mb-6">
With decades of experience, we specialize in creating bespoke
metal sculptures, architectural installations, and luxury design
elements for premium spaces.
</p>

<p className="text-gray-300 text-lg">
Our artisans combine traditional craftsmanship with modern
engineering to create timeless metal masterpieces.
</p>

</div>

</div>

</section>


{/* PROJECTS */}

<section className="py-24 bg-[#F5F6F7]">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-center text-4xl font-serif mb-16">
PROJECTS
</h2>

<Swiper
modules={[Autoplay, Navigation, Pagination]}
spaceBetween={40}
slidesPerView={4}
loop={true}
speed={9000}

autoplay={{
delay:0,
disableOnInteraction:false
}}

navigation
pagination={{ clickable:true }}

breakpoints={{
0:{slidesPerView:1},
640:{slidesPerView:2},
1024:{slidesPerView:3},
1280:{slidesPerView:4}
}}
>

{projects.map((project,index)=>(
<SwiperSlide key={index}>

<div className="text-center">

<div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">

<img
src={project.image}
className="h-[300px] w-full object-cover hover:scale-110 transition duration-700"
/>

</div>

<p className="mt-4 text-sm text-gray-700">
{project.title}
</p>

</div>

</SwiperSlide>
))}

</Swiper>

</div>

</section>


{/* VIDEO SECTION */}

<section className="py-24 text-center">

<h2 className="text-4xl font-serif mb-12">
Signature Project
</h2>

<div className="max-w-5xl mx-auto px-6">

<iframe
className="w-full h-[500px] rounded-xl shadow-xl"
src="https://www.youtube.com/embed/dQw4w9WgXcQ"
title="Project Video"
allowFullScreen
/>

</div>

</section>


{/* CTA */}

<section className="py-32 bg-[#1E2A38] text-white text-center">

<h2 className="text-5xl font-serif mb-6">
Start Your Custom Project
</h2>

<p className="text-xl text-gray-300 mb-10">
Collaborate with us to create extraordinary metal designs.
</p>

<button
onClick={()=>onNavigate("contact")}
className="bg-[#C9A45C] px-10 py-5 uppercase tracking-widest text-sm"
>
Contact Us
</button>

</section>

</div>
);
}
