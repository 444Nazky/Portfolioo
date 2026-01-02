import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- Header --- */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center text-white font-bold text-xl shadow-sm">
            B
          </div>

          {/* Status Indicator */}
          <div className="hidden md:flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <span className="text-sm font-medium text-gray-600">Available For Work</span>
          </div>

          {/* Menu Icon */}
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        
        {/* --- Hero Section --- */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Hi, I'm <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-xl inline-block transform hover:-rotate-2 transition-transform duration-300">Saputra</span>
          </h1>
          <p className="text-xl text-gray-500 font-medium">
            Frontend Developer | Creative Coder
          </p>
        </div>

        {/* --- Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          
          {/* Featured Project (Large Card) */}
          <div className="md:col-span-2 bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-bold mb-4">Featured Project</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Showcasing my work and ideas through a modern stack || Playground for my portfolio and experiments || Build with Next.js, Tailwind CSS, Framer Motion, and more.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Badge text="Next.js" color="bg-black text-white" />
              <Badge text="Tailwind CSS" color="bg-blue-100 text-blue-600" />
              <Badge text="Supabase" color="bg-yellow-100 text-yellow-700" />
              <Badge text="GSAP" color="bg-green-100 text-green-700" />
              <Badge text="Framer Motion" color="bg-cyan-100 text-cyan-700" />
              <Badge text="Postman" color="bg-orange-100 text-orange-700" />
              <Badge text="Vercel" color="bg-gray-100 text-gray-700" />
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="flex flex-col gap-6">
            
            {/* About Me */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow h-full">
              <h3 className="text-lg font-bold mb-2">About Me ?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Turning coffee into code and ideas into slick web experiences.
              </p>
            </div>

            {/* Some Fact */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow h-full">
              <h3 className="text-lg font-bold mb-2">Some Fact</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Always learning even strugling and stressed out about frontend engineering and dev lifestyle.
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* --- Sliding Logo Marquee (Replaces "Perfection is a Lie") --- */}
      <LogoMarquee />

    </div>
  );
}

// --- Sub-Components ---

function Badge({ text, color }) {
  return (
    <span className={`px-3 py-1 rounded-md text-xs font-semibold ${color}`}>
      {text}
    </span>
  );
}

function LogoMarquee() {
  // We duplicate the logos to create a seamless infinite loop
  const logos = [
    { name: "SOLOLEARN", type: "solo" },
    { name: "Skilvul", type: "skilvul" },
    { name: "Red Hat Academy", type: "redhat" },
    { name: "dicoding", type: "dicoding" },
    { name: "SOLOLEARN", type: "solo" }, // Repeat for seamless feel
    { name: "Skilvul", type: "skilvul" },
    { name: "Red Hat Academy", type: "redhat" },
    { name: "dicoding", type: "dicoding" },
  ];

  return (
    <div className="w-full overflow-hidden bg-white py-16 border-t border-gray-50">
      <motion.div 
        className="flex items-center gap-20 w-max"
        animate={{ x: "-50%" }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 20 // Adjust speed here
        }}
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-pointer">
            <LogoPlaceholder type={logo.type} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Visual approximation of the logos using CSS since we don't have the image files
function LogoPlaceholder({ type }) {
  switch (type) {
    case 'solo':
      return (
        <div className="flex items-center gap-2 font-sans text-2xl font-bold text-gray-500">
          <span className="text-blue-500">SOLO</span>
          <div className="w-6 h-6 rounded-full border-4 border-t-red-400 border-r-yellow-400 border-b-green-400 border-l-blue-400" />
          <span>LEARN</span>
        </div>
      );
    case 'skilvul':
      return (
        <div className="flex items-center gap-3 font-bold text-2xl text-gray-900">
          <div className="w-8 h-8 bg-red-900 rounded-sm relative overflow-hidden flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-red-400 transform rotate-45"></div>
          </div>
          Skilvul
        </div>
      );
    case 'redhat':
      return (
        <div className="flex items-center gap-3">
           {/* Simple Hat Shape */}
           <div className="w-10 h-6 bg-red-600 rounded-t-full relative">
             <div className="absolute -bottom-1 w-12 -left-1 h-2 bg-red-600 rounded-full"></div>
           </div>
           <div className="flex flex-col leading-none font-bold text-red-600">
             <span>Red Hat</span>
             <span>Academy</span>
           </div>
        </div>
      );
    case 'dicoding':
      return (
        <div className="text-3xl font-bold text-slate-700 tracking-tight flex items-center">
          dicodin<span className="border-2 border-slate-700 w-6 h-6 flex items-center justify-center rounded-sm text-sm">g</span>
        </div>
      );
    default:
      return null;
  }
}