import img1 from "./assets/images/gates/gate1.jpg";
import img2 from "./assets/images/gates/gate4.jpg";
import img3 from "./assets/images/murals/mural1.jpg";

export default function LandingDemo({ onNavigate }:any) {

return (
<div className="bg-black text-white font-body">

{/* HERO */}

<section className="h-screen flex items-center justify-center text-center px-6 bg-gradient-to-b from-black via-black/90 to-black">

<div className="max-w-3xl mx-auto">

<h1 className="text-5xl md:text-6xl font-heading mb-6">

Luxury Metal Art for Modern Interiors

</h1>

<p className="text-gray-400 mb-8">

Custom metal installations crafted for architects,
interior designers and premium spaces across India.

</p>

<button
  onClick={() => onNavigate("home")}
  className="bg-[#C6A46A] text-black px-8 py-4 font-semibold"
>
  Enter Website
</button>

</div>

</section>

{/* BRAND STATEMENT */}

<section className="py-24 max-w-6xl mx-auto px-6 text-center">

<h2 className="text-4xl font-heading mb-6">

Bespoke Metal Design Studio

</h2>

<p className="text-gray-400 max-w-2xl mx-auto">

We design and fabricate architectural metal pieces
for luxury residences, hotels and commercial interiors
across Hyderabad, Bangalore, Chennai, Mumbai and beyond.

</p>

</section>

{/* BENEFITS */}

<section className="py-24 bg-[#111]">

<h2 className="text-4xl font-heading text-center mb-16">

Why Work With Us

</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-6 text-center">

<div>

<h3 className="text-xl text-[#C6A46A] mb-3">

Custom Fabrication

</h3>

<p className="text-gray-400">

Each piece is designed specifically for your interior
concept and spatial layout.

</p>

</div>

<div>

<h3 className="text-xl text-[#C6A46A] mb-3">

Premium Materials

</h3>

<p className="text-gray-400">

We work with wrought iron, stainless steel, brass and
premium architectural metals.

</p>

</div>

<div>

<h3 className="text-xl text-[#C6A46A] mb-3">

Architect Collaboration

</h3>

<p className="text-gray-400">

We collaborate with interior designers and architects
across South India and beyond.

</p>

</div>

</div>

</section>

{/* PROJECT GALLERY */}

<section className="py-24 max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-heading text-center mb-16">

Recent Installations

</h2>

<div className="grid md:grid-cols-3 gap-6">

<img
src={img1}
alt="Premium Main Door"
className="w-full h-72 object-cover"
/>
<img
src={img2}
alt="Royal Gate Installation"
className="w-full h-72 object-cover"
/>
<img
src={img3}
alt="Wall Mural Artwork"
className="w-full h-72 object-cover"
/>

</div>

</section>

{/* CONTACT FORM */}

<section id="contact" className="py-24 bg-[#111]">

<h2 className="text-4xl font-heading text-center mb-12">

Start Your Project

</h2>

<div className="max-w-xl mx-auto px-6">

<form className="grid gap-6">

<input
type="text"
placeholder="Full Name"
className="p-4 bg-[#222]"
/>

<input
type="tel"
placeholder="Phone Number"
className="p-4 bg-[#222]"
/>

<select className="p-4 bg-[#222]">

<option>Select City</option>
<option>Hyderabad</option>
<option>Bangalore</option>
<option>Chennai</option>
<option>Mumbai</option>
<option>Delhi</option>
<option>Vizag</option>
<option>Pune</option>

</select>

<textarea
placeholder="Tell us about your project"
className="p-4 bg-[#222]"
></textarea>

<button
className="bg-[#C6A46A] text-black py-4 font-semibold"
>

Submit Enquiry

</button>

</form>

</div>

</section>

{/* FOOTER */}

<footer className="py-12 text-center text-gray-500">

© 2026 Shaping Metals. Hyderabad, India.

</footer>

</div>

)

}
