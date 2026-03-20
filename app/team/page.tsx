import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function TeamPage() {
  const leadership = [
    {
      name: "Samir Gupta",
      role: "Revenue, Growth & Ops",
      desc: "Entrepreneur | ex-Paytm, ex-Bzinga, ex-Solv",
      image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e50d8f8eb88abaaf2dbbb5_1695013342712.jpeg",
      linkedin: "https://www.linkedin.com/in/samirgupta1/"
    },
    {
      name: "Amar Daing",
      role: "Product, CX & GTM",
      desc: "Entrepreneur | ex-Google x Tata, ex-Oyo, ex-Grofers",
      image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e50d8f17573e0fcd4ec3c1_1663569415671.jpeg",
      linkedin: "https://www.linkedin.com/in/amar-daing/"
    },
    {
      name: "Parool Duggal",
      role: "People & Org Dev",
      desc: "Entrepreneur | ex-Bijnis, ex-EcomXpress, ex-AuthBridge",
      image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e50d8fb58f0e244a2a4d31_1635223380712.jpeg",
      linkedin: "https://www.linkedin.com/in/parool-duggal-1b651713/"
    },
    {
      name: "Alok Kumar",
      role: "AI & Tech",
      desc: "Entrepreneur | Ex Zee, Ex StanChart, Ex Fidelity, Ex Oracle",
      image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b29541adceb2f4cf8144ad_79c886e0-fd1f-49a4-bfed-f481d5bb1f38.jpg",
      linkedin: "https://www.linkedin.com/in/alok02/"
    },
    {
      name: "Rajesh Ramanathan",
      role: "Fintech",
      desc: "Entrepreneur | Ex Accenture, Ex Wipro, Ex Mastek",
      image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b299cedd0e417ecb1e2533_WhatsApp%20Image%202026-03-12%20at%204.11.45%20PM.jpeg",
      linkedin: "https://www.linkedin.com/in/rajeshramanathan/"
    }
  ];

  const programTeam = [
    {
      name: "Saniya Fathima",
      role: "Research Associate, Founder's Office",
      desc: "Postgrad in Biotechnology",
      image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b295fc064e36e1c0266a56_WhatsApp%20Image%202026-03-12%20at%203.59.29%20PM.jpeg",
      linkedin: "https://www.linkedin.com/in/saniya-f-369a98213/"
    },
    {
      name: "Snoopster",
      role: "Chief Happiness Associate",
      desc: "ex-Busybody now Calmfluencer",
      image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e4de10bf5c464cee8590af_camylla-battani-zSCoQkrLMOE-unsplash.webp",
      linkedin: "https://www.linkedin.com/company/maxinor/?viewAsMember=true"
    }
  ];

  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32">
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-6">
            Meet the <span className="text-brand">Operator Team</span>
          </h1>
          <p className="text-xl text-grey max-w-2xl font-light">
            Experienced operators and entrepreneurs driving founder success through hands-on execution.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-32">
          <h2 className="text-3xl font-display font-medium tracking-tight mb-12 flex items-center gap-4">
            <span className="w-8 h-1 bg-brand"></span> Leadership
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {leadership.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8 overflow-hidden rounded-full border-4 border-grey/30 group-hover:border-brand/50 transition-colors duration-500">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-display font-medium mb-2">{member.name}</h3>
                <p className="text-brand font-medium mb-4">{member.role}</p>
                <p className="text-grey leading-relaxed mb-6 h-16 font-light">{member.desc}</p>
                <Link href={member.linkedin} target="_blank" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-grey/30 hover:bg-brand hover:border-brand hover:text-warm-white transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Program Team Section */}
        <div className="mb-32">
          <h2 className="text-3xl font-display font-medium tracking-tight mb-12 flex items-center gap-4">
            <span className="w-8 h-1 bg-brand"></span> Program Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {programTeam.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8 overflow-hidden rounded-full border-4 border-grey/30 group-hover:border-brand/50 transition-colors duration-500">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-display font-medium mb-2">{member.name}</h3>
                <p className="text-brand font-medium mb-4">{member.role}</p>
                <p className="text-grey leading-relaxed mb-6 h-16 font-light">{member.desc}</p>
                <Link href={member.linkedin} target="_blank" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-grey/30 hover:bg-brand hover:border-brand hover:text-warm-white transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div>
          <h2 className="text-3xl font-display font-medium tracking-tight mb-12 flex items-center gap-4">
            <span className="w-8 h-1 bg-brand"></span> Our Partners
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {[
              { name: "Hygriv", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e8f57198b4be76b7685ef_Logo%20with%20Capital.png", url: "https://www.hygriv.com/" },
              { name: "Saptharushi", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b3cd584c566a57e84d3aae_saptharushi7_logo.jpg", url: "https://saptharushi.com/" },
            ].map((partner, idx) => (
              <Link 
                key={idx} 
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full md:w-[300px] h-32 bg-white rounded-[2rem] border border-grey/30 flex items-center justify-center p-6 group hover:border-brand/30 hover:bg-white transition-all duration-500"
              >
                 <Image 
                   src={partner.image} 
                   alt={partner.name} 
                   fill 
                   className="object-contain p-6 opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                   referrerPolicy="no-referrer" 
                 />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
