import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowRight, Star, Instagram, Facebook, ArrowUp, ArrowUpRight, Check, Phone, Mail, Users, PenTool, Wrench, Sparkles, Plus, Minus, X } from "lucide-react";

import heroImg from "./assets/images/hero_interior_1780552179749.png";
import kitchenImg from "./assets/images/portfolio_kitchen_1780552193924.png";
import livingImg from "./assets/images/portfolio_living_1780552208600.png";
import bedroomImg from "./assets/images/portfolio_bedroom_1780552222961.png";
import commercialImg from "./assets/images/commercial_space_1780559251486.png";
import decorImg from "./assets/images/custom_decor_1780559269654.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 py-4 md:py-6 px-6 sm:px-12 flex flex-col justify-center bg-brand-bg/95 backdrop-blur-lg">
        <div className="flex justify-between items-center w-full">
          <div className="font-serif font-bold text-xl md:text-2xl tracking-tighter">Bhavenue Design Studio</div>
          <div className="hidden md:flex justify-end gap-8 items-center">
             {navItems.map((item) => (
               <a 
                 key={item.name} 
                 href={item.href} 
                 onClick={(e) => handleScroll(e, item.href)}
                 className="font-medium text-sm text-gray-700 hover:text-brand-orange transition-colors"
               >
                  {item.name}
               </a>
             ))}
          </div>
          {/* Mobile Menu Icon */}
          <div 
             className="md:hidden space-y-1.5 w-6 cursor-pointer group"
             onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
             <div className={`h-[2px] w-full transition-all duration-300 ${isMenuOpen ? "bg-brand-orange rotate-45 translate-y-[8px]" : "bg-brand-text"}`}></div>
             <div className={`h-[2px] w-full transition-all duration-300 ${isMenuOpen ? "opacity-0" : "bg-brand-text"}`}></div>
             <div className={`h-[2px] w-full transition-all duration-300 ${isMenuOpen ? "bg-brand-orange -rotate-45 -translate-y-[8px]" : "bg-brand-text"}`}></div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-brand-bg flex flex-col py-4 px-6 shadow-xl border-t border-gray-100"
          >
             {navItems.map((item) => (
               <a 
                 key={item.name} 
                 href={item.href} 
                 onClick={(e) => { setIsMenuOpen(false); handleScroll(e, item.href); }}
                 className="font-medium text-lg text-gray-800 py-4 border-b border-gray-100 last:border-0 hover:text-brand-orange transition-colors"
               >
                  {item.name}
               </a>
             ))}
          </motion.div>
        )}

        {/* Scroll Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-orange origin-left"
          style={{ scaleX }}
        />
      </nav>
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
      <div className="relative z-10 w-full max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-[clamp(4rem,10vw,8rem)] leading-[0.9] tracking-tight uppercase"
        >
          We
        </motion.h1>
        
        <div className="flex items-center gap-6 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-[clamp(4rem,10vw,8rem)] leading-[0.9] tracking-tight uppercase z-10 bg-brand-bg pr-4"
          >
            Design
          </motion.h1>
           <motion.svg 
             initial={{ scale: 0, rotate: -90 }}
             animate={{ scale: 1, rotate: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="w-12 h-12 text-[#fcd03b]" 
             viewBox="0 0 100 100" fill="currentColor"
           >
              <polygon points="50,0 60,35 95,35 65,55 75,90 50,70 25,90 35,55 5,35 40,35" />
           </motion.svg>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-[clamp(4rem,10vw,8rem)] leading-[0.9] tracking-tight uppercase"
        >
          Interiors
        </motion.h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute right-6 sm:right-12 top-40 sm:top-24 w-[35vw] max-w-md aspect-[3/4] hidden md:block"
      >
        <img src={heroImg} alt="Hero Interior" className="w-full h-full object-cover rounded-t-full rounded-b-[40px] shadow-2xl" />
        
        {/* Decorative Orange Semi Circle */}
        <div className="absolute -bottom-10 -left-20 w-40 h-20 bg-brand-orange rounded-b-full rotate-45 -z-10"></div>
        
        {/* Badge */}
        <div className="absolute top-1/2 -left-12 bg-white rounded-full p-4 shadow-xl flex flex-col items-center justify-center space-y-1 z-20 aspect-square w-24">
          <Star className="w-6 h-6 text-[#fcd03b] fill-[#fcd03b]" />
          <span className="font-bold text-lg leading-none">4.9</span>
          <span className="text-[10px] text-gray-500 font-medium uppercase">Excellent</span>
        </div>
      </motion.div>
      
      {/* Mobile Image */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-12 w-full max-w-[320px] mx-auto aspect-[4/5] md:hidden relative"
      >
        <img src={heroImg} alt="Hero Interior" className="w-full h-full object-cover rounded-t-full rounded-b-[40px] shadow-2xl" />
        <div className="absolute -bottom-6 -right-4 w-24 h-12 bg-brand-orange rounded-b-full -rotate-45 -z-10"></div>
      </motion.div>

      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: 0.5 }}
         className="mt-12 md:mt-24 max-w-sm md:max-w-md flex flex-col gap-6"
      >
        <p className="text-gray-600 leading-relaxed text-lg sm:text-xl font-medium">
          We create iconic homes through relationships formed over time with architects and craftsmen.
        </p>
        <div className="flex items-center gap-4">
           {/* Stamp-like circle */}
           <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 flex items-center justify-center animate-[spin_10s_linear_infinite] relative">
             <svg viewBox="0 0 100 100" className="w-full h-full text-brand-orange overflow-visible absolute top-0 left-0">
               <path id="curve" fill="transparent" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
               <text width="100" className="text-[12px] font-bold tracking-[0.25em] uppercase fill-current">
                 <textPath href="#curve">
                   Bhavenue Design Studio Contact
                 </textPath>
               </text>
             </svg>
           </div>
           <div className="w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center absolute ml-5">
             <ArrowRight className="w-5 h-5 -rotate-45" />
           </div>
        </div>
      </motion.div>

    </section>
  )
}

function AboutStats() {
  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col items-center">
      <div className="text-center max-w-2xl mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6"
        >
          Explore Our<br />Company About
        </motion.h2>
        <motion.p 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.1 }}
           className="text-gray-600 text-lg"
        >
          Is an architectural design studio specializing in residential, commercial and hospitality projects with a focus on minimalism.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.2 }}
          className="mt-8 bg-brand-text text-white px-6 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-800 transition-colors"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-16 w-full">
         <div className="flex flex-col items-center justify-center w-40 h-40 rounded-full border border-gray-200 bg-white">
           <span className="font-bold text-3xl font-serif">120+</span>
           <span className="text-sm text-gray-500 mt-2">Projects</span>
         </div>
         <div className="flex flex-col items-center justify-center w-48 h-48 rounded-full border border-gray-200 bg-white md:-mt-8 shadow-sm">
           <span className="font-bold text-4xl font-serif">350+</span>
           <span className="text-sm text-gray-500 mt-2">Happy Clients</span>
         </div>
         <div className="flex flex-col items-center justify-center w-40 h-40 rounded-full border border-gray-200 bg-white">
           <span className="font-bold text-3xl font-serif">2025</span>
           <span className="text-sm text-gray-500 mt-2">Founded</span>
         </div>
      </div>
    </section>
  )
}

function Services() {
  const [activeServiceId, setActiveServiceId] = useState('3d-design');

  const servicesData = [
    {
      id: '3d-design',
      title: '3D Design & Consultation',
      img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      desc: (
        <>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At <span className="font-bold text-brand-text">Bhavenue Design Studio</span>, our <span className="font-bold text-brand-text">3D Design & Consultation</span> service helps you visualize your space before it comes to life. We transform your ideas into realistic 3D designs, ensuring clarity, confidence, and perfection at every stage.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our expert designers work closely with you to understand your lifestyle, preferences, and functional needs. From layout planning to material selection, every detail is thoughtfully crafted to reflect your taste and maximize space efficiency.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            With high-quality 3D views, you can explore different design options, color palettes, furniture placements, and lighting concepts—making informed decisions without guesswork.
          </p>
          <h3 className="font-serif font-bold text-2xl text-brand-text mb-6">What You Get:</h3>
          <ul className="space-y-4 mb-8">
            {[
              "Realistic 3D Interior Views Of Your Space",
              "Personalized Design Consultation",
              "Space Planning & Layout Optimization",
              "Material, Color & Finish Guidance",
              "Design Revisions Based On Your Feedback"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-700">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange text-white shrink-0 mt-1">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span className="text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether it's a <span className="font-bold text-brand-text">home, office, or commercial space</span>, our 3D design process ensures a smooth, transparent, and satisfying interior journey—before execution even begins.
          </p>
        </>
      )
    },
    {
      id: 'residential',
      title: 'Residential Interior Design',
      img: livingImg,
      desc: (
        <>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At <span className="font-bold text-brand-text">Bhavenue Design Studio</span>, we create homes that reflect your personality, lifestyle, and comfort. Our <span className="font-bold text-brand-text">Residential Interior Design</span> services focus on blending aesthetics with functionality to deliver spaces that feel warm, elegant, and truly yours.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            From compact apartments to luxury villas, we design every corner with thoughtful planning, premium materials, and modern design sensibilities. Our team works closely with you to understand your needs and translate them into beautiful, practical living spaces.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Whether it's your <span className="font-bold text-brand-text">living room, bedroom, kitchen, wardrobe, or complete home interior</span>, we ensure a seamless design experience—from concept to execution.
          </p>
          <h3 className="font-serif font-bold text-2xl text-brand-text mb-6">Our Residential Design Services Include:</h3>
          <ul className="space-y-4 mb-8">
            {[
              "Complete Home Interior Planning",
              "Modular Kitchen & Wardrobe Design",
              "Living Room & Bedroom Interiors",
              "Space-Saving And Smart Storage Solutions",
              "Material, Color & Lighting Consultation"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-700">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange text-white shrink-0 mt-1">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span className="text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            With a perfect balance of creativity and craftsmanship, <span className="font-bold text-brand-text">Bhavenue Design Studio</span> turns houses into homes you'll love to live in every day.
          </p>
        </>
      )
    },
    {
      id: 'commercial',
      title: 'Commercial Interior Design',
      img: commercialImg,
      desc: (
        <>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At <span className="font-bold text-brand-text">Bhavenue Design Studio</span>, we design commercial spaces that inspire productivity, enhance brand identity, and create lasting impressions. Our <span className="font-bold text-brand-text">Commercial Interior Design</span> solutions are tailored to meet the functional and aesthetic needs of modern businesses.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            From offices and retail stores to showrooms and hospitality spaces, we focus on smart layouts, efficient workflows, and visually impactful designs. Every project is carefully planned to reflect your brand values while ensuring comfort, durability, and optimal space utilization.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our experienced team manages the entire design process—from concept and 3D visualization to execution—delivering spaces that are both stylish and business-ready.
          </p>
          <h3 className="font-serif font-bold text-2xl text-brand-text mb-6">Our Commercial Design Expertise Includes:</h3>
          <ul className="space-y-4 mb-8">
            {[
              "Office & Corporate Interiors",
              "Retail Stores & Showrooms",
              "Cafés, Restaurants & Hospitality Spaces",
              "Space Planning & Workflow Optimization",
              "Brand-Focused Design & Material Selection"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-700">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange text-white shrink-0 mt-1">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span className="text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            With <span className="font-bold text-brand-text">Bhavenue Design Studio</span>, your commercial space becomes a powerful tool that supports growth, professionalism, and customer engagement.
          </p>
        </>
      )
    },
    {
      id: 'turnkey',
      title: 'Turnkey Interior Execution',
      img: heroImg,
      desc: (
        <>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At <span className="font-bold text-brand-text">Bhavenue Design Studio</span>, our <span className="font-bold text-brand-text">Turnkey Interior Execution</span> service offers a complete, hassle-free interior solution—from design to final handover. We take full responsibility for planning, coordination, execution, and delivery, so you can relax while we bring your vision to life.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our team manages every aspect of the project, including civil work, carpentry, electrical, plumbing, false ceiling, flooring, painting, and installations. With strict quality control, skilled workmanship, and timely execution, we ensure a smooth and transparent interior journey.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            From residential to commercial projects, we deliver ready-to-use spaces that meet design expectations, budget requirements, and timelines.
          </p>
          <h3 className="font-serif font-bold text-2xl text-brand-text mb-6">What Our Turnkey Service Covers:</h3>
          <ul className="space-y-4 mb-8">
            {[
              "End-To-End Project Management",
              "Civil, Electrical & Plumbing Work",
              "Custom Carpentry & Modular Installations",
              "False Ceiling, Flooring & Painting",
              "Quality Checks & On-Time Delivery"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-700">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange text-white shrink-0 mt-1">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span className="text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            With <span className="font-bold text-brand-text">Bhavenue Design Studio</span>, you get a single point of contact, consistent quality, and a beautifully finished space—executed to perfection.
          </p>
        </>
      )
    },
    {
      id: 'kitchen',
      title: 'Modular Kitchen Design',
      img: kitchenImg,
      desc: (
        <>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At <span className="font-bold text-brand-text">Bhavenue Design Studio</span>, we design <span className="font-bold text-brand-text">modular kitchens</span> that combine smart functionality, elegant aesthetics, and long-lasting quality. Our kitchens are thoughtfully planned to make cooking efficient, organized, and enjoyable.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We customize every kitchen based on your space, cooking habits, and style preferences—whether you prefer a modern, minimalist look or a warm, classic design. From layout planning to material selection, every detail is designed for maximum convenience and durability.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            With high-quality fittings, intelligent storage solutions, and precise execution, we create kitchens that are as beautiful as they are practical.
          </p>
          <h3 className="font-serif font-bold text-2xl text-brand-text mb-6">Our Modular Kitchen Solutions Include:</h3>
          <ul className="space-y-4 mb-8">
            {[
              "Customized Kitchen Layouts (L-Shape, U-Shape, Parallel, Island)",
              "Smart Storage & Space-Saving Solutions",
              "Premium Cabinets, Shutters & Hardware",
              "Countertop, Backsplash & Lighting Design",
              "Seamless Installation & Finishing"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-700">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange text-white shrink-0 mt-1">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span className="text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            With <span className="font-bold text-brand-text">Bhavenue Design Studio</span>, your kitchen becomes a perfect blend of style, efficiency, and comfort—designed for everyday living.
          </p>
        </>
      )
    },
    {
      id: 'wardrobe',
      title: 'Wardrobe & Storage Solutions',
      img: bedroomImg,
      desc: (
        <>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At <span className="font-bold text-brand-text">Bhavenue Design Studio</span>, we design <span className="font-bold text-brand-text">wardrobe and storage solutions</span> that bring order, elegance, and efficiency to your living spaces. Our designs are tailored to maximize storage while maintaining a clean, stylish look.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            From modular wardrobes to custom storage units, we create solutions that fit your space perfectly and suit your daily lifestyle. Thoughtful internal layouts, premium finishes, and smooth functionality ensure long-lasting comfort and convenience.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Whether it's a bedroom wardrobe, walk-in closet, or smart storage for compact homes, our designs blend aesthetics with practicality.
          </p>
          <h3 className="font-serif font-bold text-2xl text-brand-text mb-6">Our Wardrobe & Storage Services Include:</h3>
          <ul className="space-y-4 mb-8">
            {[
              "Modular & Custom-Built Wardrobes",
              "Walk-In Closets & Sliding Wardrobes",
              "Smart Internal Storage Accessories",
              "Loft, Cabinet & Utility Storage Solutions",
              "Premium Materials & Seamless Finishing"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-700">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange text-white shrink-0 mt-1">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span className="text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            With <span className="font-bold text-brand-text">Bhavenue Design Studio</span>, every inch of your space is used wisely—without compromising on design or quality.
          </p>
        </>
      )
    },
    {
      id: 'ceiling',
      title: 'False Ceiling & Lighting Design',
      img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      desc: (
        <>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At <span className="font-bold text-brand-text">Bhavenue Design Studio</span>, we create <span className="font-bold text-brand-text">false ceiling and lighting designs</span> that enhance the beauty, mood, and functionality of your space. Our designs are thoughtfully planned to add depth, elegance, and a refined finish to interiors.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We combine modern ceiling concepts with smart lighting solutions to highlight architectural features, improve illumination, and create the perfect ambiance. From subtle cove lighting to statement ceiling designs, every element is customized to suit your space and style.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Whether for homes or commercial spaces, our solutions balance aesthetics, efficiency, and durability.
          </p>
          <h3 className="font-serif font-bold text-2xl text-brand-text mb-6">Our False Ceiling & Lighting Services Include:</h3>
          <ul className="space-y-4 mb-8">
            {[
              "Gypsum & POP False Ceiling Designs",
              "Cove, Spot & Ambient Lighting Solutions",
              "Concealed Wiring & Clean Finishing",
              "Energy-Efficient LED Lighting Planning",
              "Customized Designs For Each Room"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-700">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange text-white shrink-0 mt-1">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span className="text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            With <span className="font-bold text-brand-text">Bhavenue Design Studio</span>, ceilings are no longer just structural elements—they become a defining design feature of your space.
          </p>
        </>
      )
    },
    {
      id: 'renovation',
      title: 'Renovation & Remodeling',
      img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80',
      desc: (
        <>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At <span className="font-bold text-brand-text">Bhavenue Design Studio</span>, we specialize in <span className="font-bold text-brand-text">renovation and remodeling</span> solutions that transform existing spaces into modern, functional, and visually appealing interiors. Whether it's a partial upgrade or a complete makeover, we breathe new life into your space with thoughtful design and precise execution.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We carefully assess your current layout, structure, and requirements to deliver solutions that improve space utilization, comfort, and aesthetics—without unnecessary disruption. Our team ensures smooth coordination, quality workmanship, and timely completion.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            From homes to commercial spaces, we upgrade interiors to match evolving lifestyles and business needs.
          </p>
          <h3 className="font-serif font-bold text-2xl text-brand-text mb-6">Our Renovation Services Include:</h3>
          <ul className="space-y-4 mb-8">
            {[
              "Home & Office Renovation Projects",
              "Layout Modifications & Space Optimization",
              "Electrical, Plumbing & Civil Upgrades",
              "Modern Material & Finish Enhancements",
              "Complete Interior Remodeling Solutions"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-700">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange text-white shrink-0 mt-1">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span className="text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            With <span className="font-bold text-brand-text">Bhavenue Design Studio</span>, renovation is not just about change—it's about creating spaces that feel new, refreshed, and perfectly suited to you.
          </p>
        </>
      )
    },
    {
      id: 'management',
      title: 'Project Management & Site Supervision',
      img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80',
      desc: (
        <>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At <span className="font-bold text-brand-text">Bhavenue Design Studio</span>, our <span className="font-bold text-brand-text">Project Management & Site Supervision</span> services ensure that every interior project is executed smoothly, efficiently, and exactly as planned. We coordinate all aspects of the project to maintain quality, timelines, and budgets.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our experienced project managers and site supervisors oversee daily site activities, manage vendors and contractors, and ensure adherence to approved designs and specifications. Regular monitoring and quality checks help eliminate errors and ensure flawless execution.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            From start to finish, we act as a single point of contact—providing transparency, accountability, and peace of mind.
          </p>
          <h3 className="font-serif font-bold text-2xl text-brand-text mb-6">Our Project Management Services Include:</h3>
          <ul className="space-y-4 mb-8">
            {[
              "End-To-End Project Management & Coordination",
              "On-Site Supervision & Quality Control",
              "Vendor, Material & Workforce Management",
              "Timeline Tracking & Budget Control",
              "Regular Progress Updates & Reporting"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-700">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange text-white shrink-0 mt-1">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span className="text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            With <span className="font-bold text-brand-text">Bhavenue Design Studio</span>, your project stays organized, on schedule, and stress-free—delivered with precision and professionalism.
          </p>
        </>
      )
    }
  ];

  const activeService = servicesData.find(s => s.id === activeServiceId) || servicesData[0];

  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto bg-brand-bg">
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">
        {/* Left Sidebar wrapper */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-28 z-10">
          {/* Services Selector Card */}
          <div className="bg-white border border-gray-100 rounded-[30px] p-8 md:p-10 shadow-sm">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-brand-text mb-4">
              Services
            </h2>
            <div className="border-b border-gray-200 mb-6 w-full"></div>
            
            <nav className="flex flex-col">
              {servicesData.map((service) => {
                const isActive = service.id === activeServiceId;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveServiceId(service.id)}
                    className={`group flex items-center justify-between w-full py-5 border-b border-gray-100 text-left transition-all duration-300 cursor-pointer outline-none ${
                      isActive 
                        ? 'text-brand-orange font-semibold pl-2 translate-x-1' 
                        : 'text-gray-600 hover:text-brand-orange hover:pl-2 hover:translate-x-1'
                    }`}
                  >
                    <span className="text-base md:text-lg tracking-tight transition-colors">
                      {service.title}
                    </span>
                    <ArrowUpRight 
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                        isActive 
                          ? 'text-brand-orange scale-110 translate-x-0.5 -translate-y-0.5' 
                          : 'text-gray-400 group-hover:text-brand-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                      }`}
                    />
                  </button>
                );
              })}
            </nav>
          </div>

          {/* How Can We Help Card */}
          <div className="bg-white border border-gray-100 rounded-[30px] p-8 md:p-10 shadow-sm">
            <h3 className="font-sans font-bold text-2xl text-brand-text mb-3">
              How Can We Help
            </h3>
            <p className="text-gray-500 text-base mb-6 leading-relaxed">
              If you need any helps, please feel free to contact us.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-50 border border-gray-100 text-gray-600 shrink-0">
                  <Phone className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <a href="tel:+919860919281" className="text-gray-800 font-semibold hover:text-brand-orange transition-colors text-lg">
                    +91 98609 19281
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-50 border border-gray-100 text-gray-600 shrink-0">
                  <Mail className="w-6 h-6 text-gray-500" />
                </div>
                <div className="min-w-0">
                  <a href="mailto:bhavenuedesignstudio@gmail.com" className="text-gray-800 font-semibold hover:text-brand-orange transition-colors text-base break-all block">
                    bhavenuedesignstudio@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="w-full">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Image Container */}
            <div className="aspect-[16/10] w-full rounded-[30px] overflow-hidden shadow-sm relative mb-8 md:mb-10 bg-gray-100">
              <img 
                src={activeService.img} 
                alt={activeService.title} 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Description Text */}
            <div className="prose max-w-none">
              {activeService.desc}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
              }

function HowWeWork() {
  const steps = [
    {
      id: "01",
      title: "Initial Consultation",
      desc: "We start with a one-on-one meeting to understand your vision, preferences, and requirements.",
      icon: Users,
    },
    {
      id: "02",
      title: "Design Planning",
      desc: "This involves selecting materials, layouts, and furnishings, as well as creating 3D renderings.",
      icon: PenTool,
    },
    {
      id: "03",
      title: "Project Execution",
      desc: "With the design plans in place, we manage and coordinate all aspects of the project.",
      icon: Wrench,
    },
    {
      id: "04",
      title: "Final Review",
      desc: "After completing the project, we conduct a thorough walkthrough with you to review the space.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-12 bg-[#FAF5F0] border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-brand-orange font-semibold tracking-wider text-sm mb-6 uppercase">
              <span className="inline-block w-8 h-[2px] bg-brand-orange"></span>
              How We Work
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-text leading-[1.15] tracking-tight">
              From concept to completion in <span className="text-brand-orange">our work</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pt-14"
          >
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Our comprehensive approach guides you through each phase of the design process, from initial brainstorming and conceptualization.
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-start"
              >
                {/* Icon row */}
                <div className="flex items-center gap-4 mb-6 w-full">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-50 text-brand-orange shrink-0">
                    <IconComponent className="w-7 h-7 stroke-[1.75]" />
                  </div>
                  {idx < 3 && (
                    <ArrowRight className="w-5 h-5 text-brand-orange shrink-0 hidden sm:block" />
                  )}
                </div>

                {/* Number & Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-text mb-3">
                  {step.id}. {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const projects = [
    { 
      title: 'Residential Interiors', 
      category: 'Interior Design', 
      img: livingImg,
      desc: 'At Bhavenue Design Studio, our residential interiors are designed to tell your unique story. We balance comfort, elegance, and spatial utility to craft warm, inviting homes that resonate with your personal style. From stunning living rooms that invite conversation to serene bedrooms that foster rest, our masterfully planned interiors combine high-end finishes, custom-curated furniture, and ambient lighting layouts. We supervise every detail of design and carpentry execution, transforming standard apartments and villas into exceptional residences that you\'ll love for years.'
    },
    { 
      title: 'Modular Kitchen', 
      category: 'Kitchen Design', 
      img: kitchenImg,
      desc: 'A perfect blend of utility and visual sophistication, our modular kitchens are designed around the golden work triangle principle to maximize efficiency and minimize movement. We leverage modern cabinetry designs, moisture-resistant premium laminates or acrylics, and heavy-duty soft-close hardware to deliver spaces that are as beautiful as they are practical. Complete with smart pull-out accessories, dedicated appliance zones, and elegant quartz countertops, each modular kitchen is customized to accommodate your specific culinary lifestyle and storage needs.'
    },
    { 
      title: 'Modular Furniture', 
      category: 'Furniture', 
      img: bedroomImg,
      desc: 'Maximize space efficiency and overall aesthetics with our collection of premium modular furniture. Engineered to integrate flawlessly into contemporary spaces, our collection includes bespoke wardrobe systems, TV units, space-saving study stations, and modular storage units. Each piece is crafted from superior moisture-resistant engineered wood, utilizing high-quality hardware and edge-banding to resist wear and tear over time. Choose from a variety of premium textures, colors, and matte or high-gloss finishes to match your home\'s color palette.'
    },
    { 
      title: 'Commercial Spaces', 
      category: 'Workspace & Retail', 
      img: commercialImg,
      desc: 'Make a lasting impression on clients and motivate your team with high-impact corporate office interiors, retail showrooms, salons, and restaurants. We study your brand\'s core values, target demographic, and functional workflows to plan optimized spatial layouts, productive employee workstations, and highly engaging welcoming zones. By integrating strategic branding colors, acoustical paneling, and customizable false ceiling concepts, we create commercial spaces that elevate brand value and maximize productivity.'
    },
    { 
      title: 'Custom Design & Décor', 
      category: 'Décor & Styling', 
      img: decorImg,
      desc: 'The final touches are what truly define the personality of a space. Our custom design and styling services help you select and arrange exquisite decor pieces, wall moldings, wallpaper designs, bespoke fabrics, and curated wall art that tie the entire room together. We also plan tailored lighting designs, balcony setups, and window dressings to elevate the visual warmth and coziness of your space, ensuring a seamless, high-end design language throughout your interior layout.'
    },
    { 
      title: 'Turnkey Execution', 
      category: 'Project Management', 
      img: heroImg,
      desc: 'Experience a completely worry-free design journey with our absolute turnkey execution service. We take full, end-to-end responsibility for your design project—from the initial empty site walkthrough, detailed layout sketches, and 3D visualization, to civil modifications, electrical work, plumbing, painting, custom carpentry, and deep cleaning. Our professional project managers supervise all site tasks and verify material standards, ensuring impeccable finishing and timely delivery while saving you from the hassle of coordinating multiple vendors.'
    },
  ];

  const activeProject = projects[activeProjectIdx] || projects[0];

  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto bg-brand-bg">
      {/* Meet Our Recent Projects Header - Kept Unchanged above the layout */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-brand-text"
        >
          Meet Our Recent<br />Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.1 }}
          className="text-gray-600 max-w-sm text-left md:text-right text-base sm:text-lg"
        >
          Explore our diverse range of projects showcasing our expertise in creating stunning and functional spaces.
        </motion.p>
      </div>

      {/* Two Column Grid layout matching the Services section */}
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">
        {/* Left Sidebar wrapper */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-28 z-10">
          <div className="bg-white border border-gray-100 rounded-[30px] p-8 md:p-10 shadow-sm">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-brand-text mb-4">
              Projects
            </h2>
            <div className="border-b border-gray-200 mb-6 w-full"></div>
            
            <nav className="flex flex-col">
              {projects.map((proj, idx) => {
                const isActive = idx === activeProjectIdx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveProjectIdx(idx)}
                    className={`group flex items-center justify-between w-full py-5 border-b border-gray-100 text-left transition-all duration-300 cursor-pointer outline-none ${
                      isActive 
                        ? 'text-brand-orange font-semibold pl-2 translate-x-1' 
                        : 'text-gray-600 hover:text-brand-orange hover:pl-2 hover:translate-x-1'
                    }`}
                  >
                    <span className="text-base md:text-lg tracking-tight transition-colors">
                      {proj.title}
                    </span>
                    <ArrowUpRight 
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                        isActive 
                          ? 'text-brand-orange scale-110 translate-x-0.5 -translate-y-0.5' 
                          : 'text-gray-400 group-hover:text-brand-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                      }`}
                    />
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="w-full">
          <motion.div
            key={activeProjectIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Image Container */}
            <div className="aspect-[16/10] w-full rounded-[30px] overflow-hidden shadow-sm relative mb-8 md:mb-10 bg-gray-100">
              <img 
                src={activeProject.img} 
                alt={activeProject.title} 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Description Text */}
            <div className="flex flex-col">
              <span className="text-brand-orange font-bold uppercase tracking-wider text-sm mb-3 block">
                {activeProject.category}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-text mb-4">
                {activeProject.title}
              </h3>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                {activeProject.desc}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 overflow-hidden min-h-[650px] relative">
       <div className="w-full md:w-5/12 relative z-10 flex flex-col items-start pt-10">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
           className="font-serif text-5xl md:text-6xl lg:text-[5rem] mb-6 leading-[1.05] text-brand-text tracking-tight"
         >
           Our Team<br />Members
         </motion.h2>
         <motion.p 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.1 }}
           className="text-gray-500 mb-8 max-w-sm text-sm md:text-base leading-relaxed font-medium"
         >
           The Bhavenue Design Studio Team understands the intricacies of designing places where people live, creating environments that enhance daily life.
         </motion.p>
         <motion.button 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.2 }}
           className="bg-brand-text text-white px-6 py-3 rounded-[50px] flex items-center gap-2 hover:bg-gray-800 transition-colors text-xs font-semibold uppercase tracking-wider"
         >
           See More <ArrowRight className="w-4 h-4 ml-1" />
         </motion.button>
         
         <motion.div initial={{ scale: 0, rotate: -45 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-16 ml-32 hidden md:block">
            <Star className="w-10 h-10 text-[#fcd03b] fill-[#fcd03b] opacity-90" />
         </motion.div>
       </div>
       
       <div className="w-full md:w-7/12 relative min-h-[500px] md:min-h-[700px] flex items-center justify-center md:justify-end">
          {/* Concentric circles container, pushed to right edge */}
          <div className="absolute top-1/2 left-1/2 md:left-auto md:-right-[20%] -translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-[550px] h-[550px] md:w-[850px] md:h-[850px] pointer-events-none">
             {/* Rings */}
             <div className="absolute inset-[0%] rounded-full border border-gray-200"></div>
             <div className="absolute inset-[13.5%] rounded-full border border-gray-200"></div>
             <div className="absolute inset-[27%] rounded-full border border-gray-200"></div>
             
             {/* Center Element (Dark Circle with Logo) */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-brand-text rounded-full flex items-center justify-center text-white z-10 shadow-2xl pointer-events-auto transition-transform cursor-pointer">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M4 11h6L9 22l11-13h-6l1-9L4 11z" />
                </svg>
             </div>
             
             {/* Avatars on the rings */}
             {/* Outer Ring: r=50% */}
             <motion.img initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.3}} src="https://i.pravatar.cc/150?img=11" className="absolute top-[15%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-[3px] border-white shadow-lg object-cover grayscale" alt="Team" />
             <motion.img initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.4}} src="https://i.pravatar.cc/150?img=12" className="absolute top-[85%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-[3px] border-white shadow-lg object-cover grayscale" alt="Team" />
             
             {/* Middle Ring: r=36.5% */}
             <motion.img initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.5}} src="https://i.pravatar.cc/150?img=33" className="absolute top-[28%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-[3px] border-white shadow-lg object-cover grayscale" alt="Team" />
             <motion.img initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.6}} src="https://i.pravatar.cc/150?img=14" className="absolute top-[80%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-[3px] border-white shadow-lg object-cover grayscale" alt="Team" />
             <motion.img initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.65}} src="https://res.cloudinary.com/dqtj9xtfw/image/upload/v1780555313/687809222_18599380780044627_1235559683684789992_n_r4arir.jpg" className="absolute top-[65%] left-[81%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-[4px] border-white shadow-lg object-cover pointer-events-auto" alt="Founder" />
             
             {/* Inner Ring: r=23% */}
             <motion.img initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.7}} src="https://i.pravatar.cc/150?img=15" className="absolute top-[34%] left-[64%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-[3px] border-white shadow-lg object-cover grayscale" alt="Team" />
             <motion.img initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.8}} src="https://i.pravatar.cc/150?img=16" className="absolute top-[71%] left-[65%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-[3px] border-white shadow-lg object-cover grayscale" alt="Team" />
             <motion.img initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.9}} src="https://i.pravatar.cc/150?img=47" className="absolute top-[65%] left-[32%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-[2px] border-white shadow-lg object-cover grayscale" alt="Team" />
          </div>
       </div>
    </section>
  )
}

function Awards() {
  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
        >
          Awards &<br />Recognition
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.1 }}
          className="text-gray-600 max-w-sm text-left md:text-right text-base sm:text-lg"
        >
          Celebrating our achievements and the recognition of our dedication to design.
        </motion.p>
      </div>

      <div className="flex flex-col gap-16 w-full">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-8 lg:gap-16 w-full group cursor-pointer"
         >
            <div className="w-full md:w-[45%] rounded-[30px] rounded-tl-[80px] overflow-hidden shadow-lg relative aspect-[4/3] md:aspect-auto md:h-[400px]">
               <img src="https://res.cloudinary.com/dqtj9xtfw/image/upload/v1780555312/626264888_18572164666044627_292801701601947204_n_ghifwd.jpg" alt="Awards Ceremony" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="w-full md:w-[55%] flex flex-col justify-center">
               <h3 className="text-brand-text font-serif text-3xl sm:text-4xl font-bold mb-4 leading-tight group-hover:text-brand-orange transition-colors">Top 100 Interior Designers & Architects of India 2025</h3>
               <p className="text-gray-600 text-lg leading-relaxed">Mr. Dev Jangid of Bhavenue Design Studio has been recognized among the Top 100 Interior Designers & Architects of India 2025 by Top Interiors India — a national honour celebrating the most outstanding design talent across the country.</p>
            </div>
         </motion.div>
         
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-8 lg:gap-16 w-full group cursor-pointer"
         >
             <div className="w-full md:w-[45%] rounded-[30px] overflow-hidden shadow-lg relative aspect-[4/3] md:aspect-auto md:h-[400px]">
               <img src="https://res.cloudinary.com/dqtj9xtfw/image/upload/v1780555313/625838456_18572164687044627_8549582784177621766_n_gqjvls.jpg" alt="Award Presentation" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="w-full md:w-[55%] flex flex-col justify-center">
               <h3 className="text-brand-text font-serif text-3xl sm:text-4xl font-bold mb-4 leading-tight group-hover:text-brand-orange transition-colors">Maharashtra Udyog Gaurav Puraskar 2026</h3>
               <p className="text-gray-600 text-lg leading-relaxed">Bhavenue Design Studio, founded by Mr. Dev Jangid, has been honoured with the prestigious Maharashtra Udyog Gaurav Puraskar 2026 in the category of Best Interior Design Studio — presented by Global Elite Media and Tech in recognition of exceptional professional excellence and significant contributions to the development of the nation.</p>
            </div>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center gap-8 lg:gap-16 w-full group cursor-pointer"
         >
            <div className="w-full md:w-[45%] rounded-[30px] rounded-br-[80px] overflow-hidden shadow-lg relative aspect-[4/3] md:aspect-auto md:h-[400px]">
               <img src="https://res.cloudinary.com/dqtj9xtfw/image/upload/v1780557462/625891827_18570879745044627_1975554622902483291_n_cdkfkb.jpg" alt="Award Ceremony" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="w-full md:w-[55%] flex flex-col justify-center">
               <h3 className="text-brand-text font-serif text-3xl sm:text-4xl font-bold mb-4 leading-tight group-hover:text-brand-orange transition-colors">Team Bhavenue Design Studio</h3>
               <p className="text-gray-600 text-lg leading-relaxed">Team Bhavenue Design Studio receiving the Maharashtra Udyog Gaurav Puraskar 2026 for Best Interior Design Studio — presented by Global Elite Media and Tech.</p>
            </div>
         </motion.div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Homeowner",
      content: "Bhavenue Design Studio completely transformed our living space. Their attention to detail and understanding of our vision were exceptional. The result exceeded our expectations in every way.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Business Owner",
      content: "Dev and his team brought a fresh, innovative approach to our office redesign. They managed to create a space that is not only visually stunning but also highly functional for our team.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Desai",
      role: "Real Estate Developer",
      content: "Working with Bhavenue has been an absolute pleasure. Their professionalism, timely execution, and impeccable design sense make them our go-to partner for all premium projects.",
      rating: 5,
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Restaurant Owner",
      content: "The aesthetic appeal of our new restaurant is all thanks to Bhavenue. They perfectly balanced ambiance with functional dining space. Customers constantly compliment the interiors.",
      rating: 5,
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "IT Consultant",
      content: "I wanted a minimalist, modern home and Dev delivered exactly that. The creative use of space and lighting has completely elevated our daily living experience.",
      rating: 5,
    },
    {
      id: 6,
      name: "Anjali Gupta",
      role: "Boutique Owner",
      content: "Bhavenue Design Studio helped us set up our flagship store. Their material selection and spatial planning created a premium and welcoming environment for our customers.",
      rating: 5,
    }
  ];

  return (
    <section className="py-24 max-w-[100vw] overflow-hidden bg-brand-bg relative">
      <div className="px-6 sm:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
        >
          Client<br />Stories
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.1 }}
          className="text-gray-600 max-w-sm text-left md:text-right text-base sm:text-lg"
        >
          Hear what our clients have to say about their experience working with us.
        </motion.p>
      </div>

      <div className="relative w-full overflow-hidden flex pt-4 pb-8 group">
        <motion.div
           className="flex flex-nowrap w-max"
           animate={{ x: ["0%", "-50%"] }}
           transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
           {[...testimonials, ...testimonials].map((testimonial, idx) => (
             <div
               key={`${testimonial.id}-${idx}`}
               className="bg-white p-8 mx-4 rounded-[30px] shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow w-[320px] shrink-0 whitespace-normal"
             >
               <div>
                 <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#fcd03b] text-[#fcd03b]" />
                    ))}
                 </div>
                 <p className="text-gray-600 leading-relaxed mb-8 italic">"{testimonial.content}"</p>
               </div>
               <div>
                 <h4 className="font-serif font-bold text-xl text-brand-text mb-1">{testimonial.name}</h4>
                 <p className="text-sm text-brand-orange font-medium uppercase tracking-wider">{testimonial.role}</p>
               </div>
             </div>
           ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "How does Bhavenue Design Studio approach a new project from start to finish?",
      answer: "We follow a comprehensive four-step journey: Initial Consultation to align on your vision and style preferences; Design Planning involving material selection and realistic 3D visualizations; Project Execution to handle all civil, carpentry, and site work; and a meticulous Final Review to ensure perfect delivery."
    },
    {
      question: "Do you offer both residential and commercial design services?",
      answer: "Yes, we specialize in both sectors. Our residential expertise includes complete homes, modular kitchens, wardrobes, and living spaces. Our commercial services focus on high-impact office spaces, retail showrooms, salons, restaurants, and brand-focused environments."
    },
    {
      question: "How long does it usually take to complete a project?",
      answer: "Timeline depends on scope and complexity. Typically, individual space designs (like modular kitchens or wardrobes) take 30 to 45 days, complete home interior execution takes 45 to 60 days, and commercial projects range from 60 to 90 days. We commit to a clear timeline before starting."
    },
    {
      question: "Do you offer both interior and exterior design services?",
      answer: "Our primary expertise lies in end-to-end interior design and turnkey execution. However, we also provide facade design suggestions, balcony styling, and terrace garden setups to ensure a seamless aesthetic flow between your interiors and exterior areas."
    },
    {
      question: "How involved will I be in the design process?",
      answer: "You are closely involved in the conceptualization, 3D visualization, and material selection phases to make sure the design matches your dream. Once the designs and materials are finalized, our turnkey execution team takes over completely, giving you a smooth, worry-free experience."
    },
    {
      question: "What makes Bhavenue Design Studio different from other design studios?",
      answer: "We stand out by providing end-to-end turnkey execution with a single point of responsibility. We combine realistic 3D views, premium moisture-resistant materials, strict adherence to timelines, professional site supervision, and transparent pricing with no hidden charges."
    }
  ];

  return (
    <section className="py-24 px-6 sm:px-12 bg-white border-t border-b border-gray-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
        {/* Left Column - Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-28"
        >
          {/* FAQ Badge */}
          <div className="flex items-center gap-2 text-brand-orange font-bold tracking-wider text-sm uppercase mb-6">
            <span className="w-3.5 h-3.5 bg-brand-orange rounded-sm shrink-0"></span>
            FAQ
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-text leading-[1.15] tracking-tight">
            Questions, Perfectly Designed Solutions
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-normal mt-6 leading-relaxed max-w-md">
            Need more details? Our team is ready to help.
          </p>
        </motion.div>

        {/* Right Column - Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-0 divide-y divide-gray-100"
        >
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 first:pt-0 last:pb-0">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex items-start gap-4 sm:gap-6 w-full text-left focus:outline-none group cursor-pointer"
                >
                  <span className="mt-1 shrink-0 text-gray-400 group-hover:text-brand-orange transition-colors">
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[2.5]" />
                    )}
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-brand-text group-hover:text-brand-orange transition-colors leading-snug">
                    {item.question}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-4 pl-9 sm:pl-[44px] pr-4">
                    {item.answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section className="pt-24 px-6 sm:px-12 max-w-7xl mx-auto relative">
       {/* Contact Pill */}
       <div className="bg-[#fcd03b] rounded-[100px] sm:rounded-[100px] rounded-3xl py-12 px-6 sm:px-20 mx-auto max-w-4xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
         <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-text mb-2">
              Let's Connect<span className="text-brand-orange">*</span>
            </h2>
            <p className="text-brand-text/80 text-sm md:text-base font-medium max-w-md">
               Pls fill up this form and submit we will connect you soon
            </p>
         </div>
         <div className="w-full md:w-auto flex justify-center">
           <a 
              href="https://forms.gle/dFDww4qVRgMC5CHp8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-text text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-black transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
           >
              Fill up Form <ArrowRight className="w-4 h-4" />
           </a>
         </div>
       </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="pb-12 pt-16 px-6 sm:px-12 max-w-7xl mx-auto relative overflow-hidden">
       
       <div className="flex flex-col md:flex-row justify-between items-center gap-16 overflow-hidden">
         
         {/* Left Side */}
         <div className="max-w-xs text-center md:text-left z-10 w-full sm:ml-12 mt-12 sm:mt-0">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
               <svg className="w-8 h-8 rotate-45 text-brand-text" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               <h3 className="font-serif font-bold text-2xl tracking-tight leading-none">Bhavenue Design Studio</h3>
            </div>
            <p className="text-sm text-gray-500 mb-6 font-medium leading-relaxed">
              Is an architectural design studio specializing in residential projects.
            </p>
           <div className="flex gap-3 justify-center md:justify-start text-gray-800">
               <a href="https://www.instagram.com/bhavenue_design_studio_bd?igsh=MWZsZWFqNGJsOGd5dA==" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-gray-200/60 rounded-md hover:bg-black hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
               <a href="https://www.facebook.com/profile.php?id=61588173592520#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-gray-200/60 rounded-md hover:bg-black hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
            </div>
            {/* Decorative yellow star */}
            <div className="flex justify-center md:justify-end pr-4 mt-4">
               <Star className="w-6 h-6 text-[#fcd03b] fill-[#fcd03b] opacity-90 relative right-12" />
            </div>
         </div>

         {/* Right Side - Contact Info & Map */}
         <div className="relative w-full md:w-auto mt-8 md:mt-0 flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start text-center md:text-left md:pr-4">
            <div className="flex flex-col items-center md:items-start">
               <h4 className="font-sans font-bold text-lg mb-6 text-brand-text uppercase tracking-wider">Contact Us</h4>
               <div className="space-y-5 text-sm text-gray-500">
                  <div>
                     <p className="font-bold text-gray-800 mb-1">Email</p>
                     <a href="mailto:bhavenuedesignstudio@gmail.com" className="block hover:text-brand-orange transition-colors">bhavenuedesignstudio@gmail.com</a>
                     <a href="mailto:devajangid1@gmail.com" className="block hover:text-brand-orange transition-colors mt-0.5">devajangid1@gmail.com</a>
                  </div>
                  <div>
                     <p className="font-bold text-gray-800 mb-1">WhatsApp</p>
                     <a href="https://wa.me/919860919281" target="_blank" rel="noopener noreferrer" className="block hover:text-brand-orange transition-colors">+91 98609 19281</a>
                  </div>
                  <div>
                     <p className="font-bold text-gray-800 mb-1">Office Address</p>
                     <a href="https://maps.app.goo.gl/fsDSXifmZYx3EcMa8" target="_blank" rel="noopener noreferrer" className="block hover:text-brand-orange transition-colors leading-relaxed max-w-[280px]">
                       Office No. 310, 3rd Floor, Maruti Millennium Tower, Mumbai Highway, Baner Annex, Baner, Pune, Maharashtra 411045.
                     </a>
                  </div>
               </div>
            </div>

            {/* Small Embedded Map */}
            <div className="w-full sm:w-[280px] h-[220px] rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-shrink-0 relative">
               <iframe 
                 src="https://maps.google.com/maps?q=Maruti%20Millennium%20Tower,%20Baner,%20Pune&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Office Location"
                 className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1] opacity-90"
               ></iframe>
            </div>
         </div>
         
       </div>
    </footer>
  )
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[100] p-3 bg-brand-text text-white rounded-full shadow-xl hover:bg-brand-orange hover:-translate-y-1 transition-all ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button>
  );
}

function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    location: "",
    budget: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Check if user already completed/closed the enquiry in this session
    const isDismissed = sessionStorage.getItem("enquiry_now_dismissed");
    if (isDismissed === "true") return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000); // 20 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("enquiry_now_dismissed", "true");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "E-mail Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid e-mail address";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile Number is required";
    } else if (!/^\+?[0-9\s\-()]{8,18}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid mobile number";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location/ Area is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Prepare WhatsApp message
    const waMessage = `*ENQUIRY NOW - Bhavenue Design Studio*

*First Name:* ${formData.firstName.trim()}
*Last Name:* ${formData.lastName.trim()}
*E-mail Address:* ${formData.email.trim()}
*Mobile Number:* ${formData.mobile.trim()}
*Location/ Area:* ${formData.location.trim()}
*Budget:* ${formData.budget.trim() ? formData.budget.trim() + " Lakh" : "Not specified"}
*Message:* ${formData.message.trim() ? formData.message.trim() : "Not specified"}`;

    const encodedText = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/919860919281?text=${encodedText}`;

    // Mark as dismissed and close
    handleClose();

    // Directly open WhatsApp url
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white rounded-[24px] shadow-2xl w-full max-w-[480px] overflow-hidden max-h-[92vh] flex flex-col border border-gray-100"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-brand-orange hover:bg-gray-100 p-1.5 rounded-full transition-all cursor-pointer outline-none z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Scrollable container for short screen safety */}
        <div className="overflow-y-auto p-6 sm:p-10">
          <h2 className="text-3xl font-sans font-extrabold text-brand-text text-center tracking-wide mb-8 uppercase">
            ENQUIRY NOW
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name *"
                  className={`w-full px-4 py-3 border rounded-xl text-base outline-none bg-white transition-all ${
                    errors.firstName ? "border-red-400 focus:border-red-400 ring-1 ring-red-100" : "border-gray-250 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/20"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name *"
                  className={`w-full px-4 py-3 border rounded-xl text-base outline-none bg-white transition-all ${
                    errors.lastName ? "border-red-400 focus:border-red-400 ring-1 ring-red-100" : "border-gray-250 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/20"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E-mail Address *"
                className={`w-full px-4 py-3 border rounded-xl text-base outline-none bg-white transition-all ${
                  errors.email ? "border-red-400 focus:border-red-400 ring-1 ring-red-100" : "border-gray-250 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/20"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Mobile Number *"
                className={`w-full px-4 py-3 border rounded-xl text-base outline-none bg-white transition-all ${
                  errors.mobile ? "border-red-400 focus:border-red-400 ring-1 ring-red-100" : "border-gray-250 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/20"
                }`}
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1 font-medium">{errors.mobile}</p>
              )}
            </div>

            {/* Location / Area */}
            <div>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Location/ Area *"
                className={`w-full px-4 py-3 border rounded-xl text-base outline-none bg-white transition-all ${
                  errors.location ? "border-red-400 focus:border-red-400 ring-1 ring-red-100" : "border-gray-250 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/20"
                }`}
              />
              {errors.location && (
                <p className="text-red-500 text-xs mt-1 font-medium">{errors.location}</p>
              )}
            </div>

            {/* Budget */}
            <div>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                placeholder="Enter Budget in Lakh"
                className="w-full px-4 py-3 border border-gray-250 rounded-xl text-base outline-none bg-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/20 transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows={3}
                className="w-full px-4 py-3 border border-gray-250 rounded-xl text-base outline-none bg-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/20 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#fcd03b] hover:bg-[#fcd03b]/95 text-brand-text font-bold tracking-wider rounded-xl transition-all shadow-md active:scale-[0.99] cursor-pointer outline-none uppercase"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-orange selection:text-white overflow-x-hidden">
      <ScrollToTop />
      <EnquiryPopup />
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <AboutStats />
      </div>
      <div id="services">
        <Services />
      </div>
      <HowWeWork />
      <div id="projects">
        <Portfolio />
      </div>
      <div id="team">
        <Team />
      </div>
      <Awards />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <div id="contact">
        <Footer />
      </div>
    </div>
);
}

    
