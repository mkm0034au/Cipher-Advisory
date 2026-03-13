import React, { useState, useEffect } from ‘react’;
import { ArrowRight, Code, BarChart3, Briefcase, Zap, Users, CheckCircle } from ‘lucide-react’;

export default function CipherAdvisoryGroup() {
const [isScrolled, setIsScrolled] = useState(false);
const [activeTab, setActiveTab] = useState(‘coe’);

useEffect(() => {
const handleScroll = () => {
setIsScrolled(window.scrollY > 50);
};
window.addEventListener(‘scroll’, handleScroll);
return () => window.removeEventListener(‘scroll’, handleScroll);
}, []);

return (
<div className="min-h-screen bg-white text-black">
{/* Navigation */}
<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white border-b border-black/10' : 'bg-white'}`}>
<div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
<div className="text-xl font-bold tracking-tight">
CIPHER
</div>
<div className="hidden md:flex gap-12 text-sm font-medium">
<a href="#services" className="hover:text-gray-600 transition">Services</a>
<a href="#about" className="hover:text-gray-600 transition">About</a>
<a href="#contact" className="hover:text-gray-600 transition">Contact</a>
</div>
<button className="px-6 py-2.5 bg-black text-white hover:bg-gray-800 transition text-sm font-medium rounded">
Get Started
</button>
</div>
</nav>

```
  {/* Hero Section */}
  <section className="pt-40 pb-32 px-8">
    <div className="max-w-6xl mx-auto">
      <div className="max-w-3xl">
        <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
          Strategy meets execution.
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-10 font-light max-w-2xl">
          Two ways we help: fractional supply chain consulting for Fortune 500 retail and CPG leaders. Custom software solutions for businesses ready to scale.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition font-medium flex items-center gap-2 rounded">
            Explore Our Work <ArrowRight size={18} />
          </button>
          <button className="px-8 py-3 border border-black hover:bg-black hover:text-white transition font-medium rounded">
            Schedule Call
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-12 mt-24 border-t border-black/10 pt-12">
        <div>
          <p className="text-4xl font-bold mb-2">15+</p>
          <p className="text-gray-700 text-sm font-light">Years in supply chain strategy</p>
        </div>
        <div>
          <p className="text-4xl font-bold mb-2">$20M+</p>
          <p className="text-gray-700 text-sm font-light">Quantified customer value delivered</p>
        </div>
        <div>
          <p className="text-4xl font-bold mb-2">50+</p>
          <p className="text-gray-700 text-sm font-light">Enterprise transformations led</p>
        </div>
      </div>
    </div>
  </section>

  {/* Services Tabs */}
  <section id="services" className="py-24 px-8 border-t border-black/10">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold mb-16 tracking-tight">How we work</h2>

      {/* Tab Navigation */}
      <div className="flex gap-8 mb-16 border-b border-black/10 pb-8">
        <button
          onClick={() => setActiveTab('coe')}
          className={`text-lg font-semibold pb-4 border-b-2 transition ${
            activeTab === 'coe' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'
          }`}
        >
          Fractional COE
        </button>
        <button
          onClick={() => setActiveTab('software')}
          className={`text-lg font-semibold pb-4 border-b-2 transition ${
            activeTab === 'software' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'
          }`}
        >
          Custom Software
        </button>
      </div>

      {/* COE Tab */}
      {activeTab === 'coe' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start animate-fadeIn">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Center of Excellence for Hire</h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6">
                Deep supply chain expertise without the overhead. We partner with Fortune 500 retail and CPG leaders as fractional advisors—decoding process inefficiencies, designing transformation roadmaps, and unlocking hidden margin.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Process Intelligence', desc: 'Celonis deployments that reveal supply chain complexity and drive transformation.' },
                { title: 'Never Outs Strategy', desc: 'Inventory optimization and availability planning to maximize service and margin.' },
                { title: 'Cost & Margin Recovery', desc: 'Identify and capture procurement, logistics, and operational inefficiencies.' },
                { title: 'Operating Model Design', desc: 'Redesign planning, fulfillment, and execution to reflect efficient operations.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle size={20} className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">{item.title}</p>
                    <p className="text-gray-600 text-sm font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black text-white p-12 rounded-lg space-y-6">
            <h4 className="text-xl font-bold">Typical Engagements</h4>
            <div className="space-y-6 border-t border-white/20 pt-6">
              <div>
                <p className="font-semibold mb-2">Supply Chain Visibility & Optimization</p>
                <p className="text-sm text-gray-300 font-light">Process intelligence deployment to unlock inventory positioning, demand planning, and network efficiency improvements.</p>
              </div>
              <div className="border-t border-white/20 pt-6">
                <p className="font-semibold mb-2">Procurement & Cost Recovery</p>
                <p className="text-sm text-gray-300 font-light">End-to-end procurement redesign identifying structural savings across vendor management, logistics, and operations.</p>
              </div>
            </div>
            <button className="w-full mt-6 border border-white text-white hover:bg-white hover:text-black transition font-medium py-2.5 rounded">
              Discuss Your Challenge
            </button>
          </div>
        </div>
      )}

      {/* Software Tab */}
      {activeTab === 'software' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start animate-fadeIn">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bespoke Software Solutions</h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6">
                Custom applications designed for businesses ready to scale. From scheduling systems to operational dashboards, we build software that solves real problems and grows with your business.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Scheduling & Dispatch', desc: 'Smart scheduling systems for service businesses (cleaning, dog walking, etc).' },
                { title: 'Operational Dashboards', desc: 'Real-time visibility into your business operations and key metrics.' },
                { title: 'Customer Platforms', desc: 'Direct-to-consumer applications that delight customers and drive retention.' },
                { title: 'Process Automation', desc: 'Eliminate manual work with automated workflows and integrations.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle size={20} className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">{item.title}</p>
                    <p className="text-gray-600 text-sm font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black text-white p-12 rounded-lg space-y-6">
            <h4 className="text-xl font-bold">Example: Dog Walking Scheduler</h4>
            <div className="space-y-4 text-sm text-gray-300 font-light">
              <p>A scheduling application built for a premium dog walking service. Features include:</p>
              <ul className="space-y-2 ml-4">
                <li>• Real-time availability and route optimization</li>
                <li>• Customer portal for booking and updates</li>
                <li>• Walker management and payment processing</li>
                <li>• GPS tracking and safety alerts</li>
              </ul>
              <p className="pt-4">This could be your custom solution—built to your exact specifications and ready to scale.</p>
            </div>
            <button className="w-full mt-6 border border-white text-white hover:bg-white hover:text-black transition font-medium py-2.5 rounded">
              Discuss Your Project
            </button>
          </div>
        </div>
      )}
    </div>
  </section>

  {/* About Section */}
  <section id="about" className="py-24 px-8 border-t border-black/10 bg-black text-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Built on real experience</h2>
          <div className="space-y-6 font-light leading-relaxed text-gray-300">
            <p>
              Senior Value Engineer at Celonis leading enterprise transformation for Fortune 500 retail and CPG clients. Deep expertise in supply chain strategy, process intelligence, and enterprise software go-to-market.
            </p>
            <p>
              Also a builder. Passionate about creating custom software solutions that solve real business problems and generate measurable value.
            </p>
            <p>
              When not working on supply chain or software, you'll find me on my Ducati, working through another home project, or analyzing market trends.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Experience</h3>
            <div className="space-y-4 text-sm">
              <div className="border-l border-white/30 pl-4 py-2">
                <p className="font-semibold">Senior Value Engineer – Celonis</p>
                <p className="text-gray-400 text-xs">July 2022 – Present</p>
                <p className="text-gray-300 mt-2 font-light">Global supply chain transformation for Fortune 500 clients</p>
              </div>
              <div className="border-l border-white/30 pl-4 py-2">
                <p className="font-semibold">Senior Operations Analyst – PerchHQ</p>
                <p className="text-gray-400 text-xs">March 2021 – July 2022</p>
                <p className="text-gray-300 mt-2 font-light">Supply chain scale and optimization for consumer goods</p>
              </div>
              <div className="border-l border-white/30 pl-4 py-2">
                <p className="font-semibold">EDI/Logistics Analyst – TJX Companies</p>
                <p className="text-gray-400 text-xs">September 2018 – March 2021</p>
                <p className="text-gray-300 mt-2 font-light">Enterprise logistics and vendor enablement</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-2">Strategy</p>
                <p className="text-gray-400 text-xs font-light">Enterprise transformation, operating model design, value case development</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Analytics</p>
                <p className="text-gray-400 text-xs font-light">Advanced analytics, predictive modeling, forecasting</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Systems</p>
                <p className="text-gray-400 text-xs font-light">Celonis, SAP, NetSuite, Cognos, AS400</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Building</p>
                <p className="text-gray-400 text-xs font-light">React, Node, databases, full-stack development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section id="contact" className="py-32 px-8">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <h2 className="text-5xl font-bold tracking-tight">Ready to work together?</h2>
      <p className="text-xl text-gray-600 font-light">
        Whether you need fractional supply chain expertise or a custom software solution, let's explore what's possible.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition font-medium rounded">
          Schedule Consultation
        </button>
        <button className="px-8 py-3 border border-black hover:bg-black hover:text-white transition font-medium rounded">
          hello@cipheradvisorygroup.com
        </button>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="border-t border-black/10 py-16 px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <p className="font-bold mb-2">CIPHER</p>
          <p className="text-gray-600 text-sm">Advisory & Software</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-semibold mb-3">Services</p>
          <p className="text-gray-600 hover:text-black transition cursor-pointer">Fractional COE</p>
          <p className="text-gray-600 hover:text-black transition cursor-pointer">Custom Software</p>
          <p className="text-gray-600 hover:text-black transition cursor-pointer">Advisory</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-semibold mb-3">Expertise</p>
          <p className="text-gray-600 hover:text-black transition cursor-pointer">Supply Chain</p>
          <p className="text-gray-600 hover:text-black transition cursor-pointer">Operations</p>
          <p className="text-gray-600 hover:text-black transition cursor-pointer">Technology</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-semibold mb-3">Connect</p>
          <p className="text-gray-600 hover:text-black transition cursor-pointer">LinkedIn</p>
          <p className="text-gray-600 hover:text-black transition cursor-pointer">Twitter</p>
          <p className="text-gray-600 hover:text-black transition cursor-pointer">Email</p>
        </div>
      </div>

      <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
        <p>&copy; 2024 Cipher Advisory Group. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-black transition">Privacy</a>
          <a href="#" className="hover:text-black transition">Terms</a>
        </div>
      </div>
    </div>
  </footer>

  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    
    * {
      font-family: 'Poppins', sans-serif;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .animate-fadeIn {
      animation: fadeIn 0.5s ease-out;
    }

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #f5f5f5;
    }

    ::-webkit-scrollbar-thumb {
      background: #000;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #333;
    }
  `}</style>
</div>
```

);
}
