const fs = require('fs');

const pagePath = 'src/pages/centers/AashaAyurvedaCenter.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

const targetOld = `      <div className={\`fixed inset-0 z-[70] transition-all duration-500 flex justify-end \${isJumpModalOpen ? "visible" : "invisible"}\`} onClick={() => setIsJumpModalOpen(false)}>
        <div className={\`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 \${isJumpModalOpen ? "opacity-100" : "opacity-0"}\`} />
        <div className={\`relative w-full max-w-sm h-full bg-background shadow-2xl transition-transform duration-500 ease-out transform \${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col\`} onClick={(e) => e.stopPropagation()}>
          <div className="h-1.5 w-full bg-gradient-to-r from-[#2C4E5A]/20 via-[#2C4E5A] to-[#2C4E5A]/20" />
          <div className="p-4 pb-4 bg-[#2C4E5A] text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <div className="flex justify-between items-start mb-3 relative z-10">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span className="text-xs font-bold tracking-wider text-white/70 uppercase">Quick Jump</span>
                </div>
                <h3 className="text-2xl font-black tracking-tight">Browse Center</h3>
              </div>
              <button onClick={() => setIsJumpModalOpen(false)} className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"><X size={20} /></button>
            </div>
            <p className="text-sm text-white/80 relative z-10">Quickly navigate to sections</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {jumpSections.map((section, idx) => (
              <button key={idx} onClick={() => jumpToSection(section.id)} className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 rounded-xl shadow-sm border border-gray-100 transition-all group hover:-translate-y-0.5">
                <span className="font-bold text-[#2C4E5A] text-left">{section.title}</span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-orange-500 transition-colors" />
              </button>
            ))}
          </div>
          <div className="p-4 bg-gray-50 border-t border-gray-100">
            <Button onClick={() => { setIsJumpModalOpen(false); setTimeout(() => setQuoteModalOpen(true), 300); }} className="w-full bg-[#FF7A28] hover:bg-[#E6691F] text-white font-bold py-6 rounded-xl shadow-md">
              Book Consultation Now
            </Button>
          </div>
        </div>
      </div>`;

const targetNew = `      <div className={\`fixed inset-0 z-[70] transition-all duration-500 flex justify-end \${isJumpModalOpen ? "visible" : "invisible"}\`} onClick={() => setIsJumpModalOpen(false)}>
        <div className={\`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 \${isJumpModalOpen ? "opacity-100" : "opacity-0"}\`} />
        <div className={\`relative w-full max-w-sm h-full bg-background shadow-2xl transition-transform duration-500 ease-out transform \${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col\`} onClick={(e) => e.stopPropagation()}>
          <div className="h-1.5 w-full bg-gradient-to-r from-[#2C4E5A]/20 via-[#2C4E5A] to-[#2C4E5A]/20" />
          <div className="p-4 pb-4 bg-[#2C4E5A] text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <div className="flex justify-between items-start mb-3 relative z-10">
              <div className="space-y-0.5"><div className="flex items-center gap-2 mb-1"><div className="h-px w-6 bg-white/30" /><span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span></div><h2 className="text-[25px] font-extrabold leading-tight tracking-tight whitespace-nowrap text-white">Section Info</h2></div>
              <button onClick={() => setIsJumpModalOpen(false)} className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50"><X className="h-6 w-6 transition-transform" /></button>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm"><ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" /><p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">"Jump directly to any section."</p></div>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2.5">
            {jumpSections.map((section, idx) => (
              <button key={section.id || idx} onClick={() => jumpToSection(section.id)} className="w-full group relative bg-white hover:bg-[#2C4E5A] transition-all duration-300 p-3 rounded-xl border-2 border-[#2C4E5A]/20 hover:border-[#2C4E5A] flex items-center justify-between shadow-md hover:shadow-xl">
                <div className="flex items-center gap-4 relative z-10"><div className="w-9 h-9 rounded-lg bg-[#2C4E5A]/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-200"><span className="text-xs font-black text-[#2C4E5A] group-hover:text-white transition-all duration-200">{(idx + 1).toString().padStart(2, "0")}</span></div><span className="text-sm md:text-base font-bold text-[#2C4E5A] group-hover:text-white transition-all duration-200 text-left">{section.title}</span></div>
                <div className="w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-200 border border-[#2C4E5A]/10 group-hover:border-transparent"><ChevronRight size={14} className="text-[#2C4E5A] group-hover:text-white transition-colors" /></div>
              </button>
            ))}
          </div>
        </div>
      </div>`;

if (content.includes("Browse Center")) {
  // Regex to replace the exact modal
  const regex = /<div className=\{`fixed inset-0 z-\[70\].*?<\/div>\n      <\/div>/s;
  content = content.replace(regex, targetNew);
  fs.writeFileSync(pagePath, content, 'utf8');
  console.log("Modal updated successfully via regex!");
} else {
  console.log("Could not find the target string.");
}
