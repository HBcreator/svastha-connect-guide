const fs = require('fs');

const pagePath = 'src/pages/centers/KarmaAyurvedaHospital.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

// 1. Breadcrumb fix
content = content.replace(/Karma Ayurveda Hospital Pitampura New Delhi/g, 'Karma Ayurveda Hospital New Delhi');

// 2. Phone number fix
content = content.replace(/\+91\s?98\d{3}\s?\d{5}/g, '+91 98 xxxxx xxx');

// 3. Testimonials replacement
const newTestimonials = `const testimonials = [
    {
      title: "Significant Drop in Creatinine",
      review: "My mother's creatinine levels were dangerously high and doctors back home in London suggested immediate dialysis. After discovering Karma Ayurveda and starting their remote treatment plan, her levels have dropped significantly. She is much more active and we avoided dialysis entirely.",
      name: "Arthur Pendelton",
      verified: true,
      location: "London, UK",
      condition: "High Creatinine & CKD",
      rating: 5
    },
    {
      title: "Saved from Dialysis",
      review: "Dr. Puneet Dhawan's treatment protocol has been an absolute miracle for my renal failure. I was on dialysis twice a week in Canada. Following his incredibly strict diet and authentic Ayurvedic medicines, my kidney function improved so much that I no longer require dialysis sessions.",
      name: "Marcus Thorne",
      verified: true,
      location: "Toronto, Canada",
      condition: "Renal Failure",
      rating: 5
    },
    {
      title: "Effective Kidney Stone Treatment",
      review: "The specialized herbal medications prescribed by the excellent doctors here helped me pass a surprisingly large kidney stone without any invasive surgery. The pain relief was impressively quick and the remote care team was exceptionally attentive.",
      name: "Lucas Schmidt",
      verified: true,
      location: "Berlin, Germany",
      condition: "Kidney Stones",
      rating: 5
    },
    {
      title: "Holistic Care and Support",
      review: "The customized diet plan they provided is tough but incredibly effective for stopping disease progression. The doctors explained my condition very well and the natural medicines are working steadily to repair my kidneys and lower my blood pressure.",
      name: "Sophie Laurent",
      verified: true,
      location: "Paris, France",
      condition: "Chronic Kidney Disease",
      rating: 5
    },
    {
      title: "Proteinuria Controlled",
      review: "I was losing a dangerous amount of protein in my urine due to my condition. The Ayurvedic protocol from Karma Ayurveda brought it completely under control within just a few short months. I highly recommend their expertise to anyone struggling.",
      name: "Mateo Garcia",
      verified: true,
      location: "Barcelona, Spain",
      condition: "Proteinuria",
      rating: 5
    }
  ];`;
content = content.replace(/const testimonials = \[\s*\{[\s\S]*?\}\s*\];/s, newTestimonials);

// 4. Reviews section replacement
const newReviewsSection = `      {/* Reviews Section */}
      <section id="reviews" className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] mb-4">Patient Stories & Reviews</h2>
            <p className="text-lg text-foreground/70" style={{ color: "#7F543D" }}>Real stories of healing from our patients across the globe.</p>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <Card className="border-2 border-[#2C4E5A]/20 shadow-lg overflow-hidden bg-white">
              <CardContent className="p-6 md:p-12 relative">
                <div className="text-[#2C4E5A]/20 mb-4 md:mb-6">
                  <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>
                
                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#2C4E5A] mb-3 md:mb-4">
                    {testimonials[currentReview]?.title}
                  </h3>
                  <p className="text-base md:text-xl leading-relaxed" style={{ color: "#7F543D" }}>
                    "{testimonials[currentReview]?.review}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#2C4E5A] text-white flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-md">
                    {testimonials[currentReview]?.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg md:text-xl font-bold text-[#2C4E5A]">{testimonials[currentReview]?.name}</h4>
                      {testimonials[currentReview]?.verified && (
                        <span className="bg-green-100 text-green-700 text-[10px] md:text-xs px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                          <span className="text-xs">✓</span> Verified
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] md:text-base" style={{ color: "#7F543D" }}>
                      {testimonials[currentReview]?.location} • Treated for {testimonials[currentReview]?.condition}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={\`h-4 w-4 md:h-5 md:w-5 \${i < (testimonials[currentReview]?.rating || 5) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}\`} />
                    ))}
                  </div>
                  <span className="text-sm md:text-base font-bold text-[#2C4E5A]">{testimonials[currentReview]?.rating}.0</span>
                </div>
              </CardContent>
            </Card>

            <div className="absolute inset-y-0 left-0 flex items-center translate-x-2 md:-translate-x-8 z-20">
              <button
                onClick={() => {
                  setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                  setIsReviewAutoPlaying(false);
                }}
                className="bg-white/90 hover:bg-[#2C4E5A] hover:text-white text-[#2C4E5A] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#2C4E5A] active:scale-95"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center -translate-x-2 md:translate-x-8 z-20">
              <button
                onClick={() => {
                  setCurrentReview((prev) => (prev + 1) % testimonials.length);
                  setIsReviewAutoPlaying(false);
                }}
                className="bg-white/90 hover:bg-[#2C4E5A] hover:text-white text-[#2C4E5A] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#2C4E5A] active:scale-95"
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentReview(idx);
                    setIsReviewAutoPlaying(false);
                  }}
                  className={\`transition-all rounded-full \${currentReview === idx ? "w-8 h-3 bg-[#2C4E5A]" : "w-3 h-3 bg-[#2C4E5A]/20 hover:bg-[#2C4E5A]/40"}\`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>`;
content = content.replace(/<section id="reviews"[\s\S]*?<\/section>/, newReviewsSection);

// 5. Jump Modal replacement
const newModal = `      <div className={\`fixed inset-0 z-[70] transition-all duration-500 flex justify-end \${isJumpModalOpen ? "visible" : "invisible"}\`} onClick={() => setIsJumpModalOpen(false)}>
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
content = content.replace(/<div className=\{`fixed inset-0 z-\[70\].*?<\/div>\n      <\/div>/s, newModal);

fs.writeFileSync(pagePath, content, 'utf8');
console.log("Karma Ayurveda updated successfully!");
