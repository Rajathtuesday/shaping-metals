import { motion } from "framer-motion"

export default function LandingDemo() {

return (

<div className="bg-black text-white font-body">

{/* HERO */}

<section className="h-screen flex items-center justify-center text-center px-6">

<div className="max-w-3xl">

<h1 className="text-5xl md:text-6xl font-heading mb-6">

Luxury Metal Art for Modern Interiors

</h1>

<p className="text-gray-400 mb-8">

Custom metal installations crafted for architects,
interior designers and premium spaces.

</p>

<a
href="#contact"
className="bg-[#C6A46A] text-black px-8 py-4 font-semibold"
>

Request Consultation

</a>

</div>

</section>

{/* BRAND STATEMENT */}

<section className="py-24 max-w-6xl mx-auto px-6 text-center">

<h2 className="text-4xl font-heading mb-6">

Bespoke Metal Design Studio

</h2>

<p className="text-gray-400 max-w-2xl mx-auto">

We design and fabricate architectural metal pieces
for luxury residences, hotels and commercial interiors.

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

We work with brass, stainless steel and
architectural metals.

</p>

</div>

<div>

<h3 className="text-xl text-[#C6A46A] mb-3">

Architect Collaboration

</h3>

<p className="text-gray-400">

We collaborate with interior designers and architects
across India.

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
src="https://imgs.search.brave.com/DQMU__8kYtcdQhfvc7c0sspHxx9u4oFcyZ2bxXkaR0E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90bGdk/b29ycy5jb20vd3At/Y29udGVudC91cGxv/YWRzL1MwMzMtMzMt/Q3VzdG9tLVN0ZWVs/LUlyb24tRG9vci1G/YXV4LUZpbmlzaC1D/bGF2b3MtU2Nyb2xs/aW5nLVRleHR1cmVk/LUdsYXNzLmpwZw"
alt="Metal Art Installation"
className="w-full h-72 object-cover"
/>
<img
src="https://imgs.search.brave.com/MXt45FJDkUSKvY-FwCNgkB5ndblh1bf2yxgAAMfdciI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kb29y/ZGVzaWdubGFiLmNv/bS9tZWRpYS9jYXRh/bG9nL3Byb2R1Y3Qv/Y2FjaGUvMS9zbWFs/bF9pbWFnZS8zNTB4/LzlkZjc4ZWFiMzM1/MjVkMDhkNmU1ZmI4/ZDI3MTM2ZTk1L2Ev/OS9hOV9ibGFja193/aGl0ZV9mcm9zdGVk/X3NpbHZlcl8yXzFf/ZnJvc3RlZF9saGku/anBn"
alt="Metal Art Installation"
className="w-full h-72 object-cover"
/>
<img
src="https://imgs.search.brave.com/PVf4EA855NCdW8_V6WNwMYqilq5cSlQjO64EjqMd_s8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzIwNDQwNTAxL3Iv/aWwvMzNkZjcyLzYy/NDIxMjgyODYvaWxf/MzAweDMwMC42MjQy/MTI4Mjg2X3JtOWIu/anBn"
alt="Metal Art Installation"
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
<option>Bangalore</option>
<option>Mumbai</option>
<option>Delhi</option>
<option>Hyderabad</option>

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

© 2026 Shaping Metals

</footer>

</div>

)

}