import React from 'react';

export default function BentoGrid() {
  return (
    <section id="telemetry" className="w-full container mx-auto px-6 py-32">
      <div className="mb-16">
        <h2 className="text-3xl font-bold font-mono tracking-tighter">&gt; SYSTEM_TELEMETRY</h2>
        <div className="w-20 h-1 bg-tech-accent mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 auto-rows-[250px]">
        {/* Card 1: Terminal Aesthetic */}
        <div className="glass tech-border rounded-xl p-10 flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tech-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h3 className="text-sm font-mono text-gray-400 mb-2">NETWORK.THROUGHPUT</h3>
          <div className="text-3xl font-bold text-white mb-4">200+ <span className="text-sm text-tech-accent">Conn/s</span></div>
          <p className="text-xs text-gray-500 mb-4">Max Tested Concurrent</p>
          
          <div className="flex-1 bg-black/50 rounded border border-[#222] p-3 font-mono text-[10px] text-green-500 overflow-hidden relative">
             <div className="absolute inset-0 p-3 animate-scroll-up flex flex-col gap-1 opacity-70">
                <p>Establishing WSS connection... OK</p>
                <p>Handshake complete [latency: 12ms]</p>
                <p>Incoming stream: frame_rate=60fps</p>
                <p className="text-tech-accent">Load balancing active...</p>
                <p>Establishing WSS connection... OK</p>
                <p>Handshake complete [latency: 11ms]</p>
             </div>
          </div>
        </div>

        {/* Card 2: Radial Tracker */}
        <div className="glass tech-border rounded-xl p-10 flex flex-col items-center justify-center relative group">
          <h3 className="text-sm font-mono text-gray-400 absolute top-8 left-8">LLM.INFERENCE</h3>
          
          <div className="relative w-32 h-32 mt-6">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#222" strokeWidth="8" />
              <circle 
                cx="50" cy="50" r="40" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="8" 
                className="text-tech-accent opacity-80"
                strokeDasharray="251.2" 
                strokeDashoffset="60" 
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-white">&lt;450</span>
              <span className="text-[10px] font-mono text-tech-accent">ms avg</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">Inference Latency Target</p>
        </div>

        {/* Card 3: PostGIS */}
        <div className="glass tech-border rounded-xl p-10 flex flex-col relative group md:col-span-1">
          <h3 className="text-sm font-mono text-gray-400 mb-2">SPATIAL.INDEXING</h3>
          <div className="text-4xl font-bold text-white mt-auto mb-2">85%</div>
          <div className="text-sm font-mono text-tech-accent mb-4">Speedup Achieved</div>
          
          <div className="w-full h-2 bg-[#222] rounded-full mb-4 overflow-hidden">
            <div className="h-full bg-tech-accent w-[85%] rounded-full shadow-[0_0_10px_#00ffcc]"></div>
          </div>
          <p className="text-xs text-gray-500 font-mono">PostGIS optimizations applied to dense coordinate mapping.</p>
        </div>
      </div>
    </section>
  );
}
