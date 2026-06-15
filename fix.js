const fs = require('fs');

const path = 'src/pages/centers/SanjivaniAyurvedicResearchInstitute.tsx';
const lines = fs.readFileSync(path, 'utf8').split('\n');

const newContent = [];
for (let i = 0; i < lines.length; i++) {
    newContent.push(lines[i]);
    if (lines[i].includes('document.querySelector(\'meta[name="description"]\');')) {
        newContent.push(`    if (metaDesc) metaDesc.setAttribute("content", "Experience authentic Precision Ayurveda, stroke rehabilitation, and joint care under senior Ayurvedic researchers at the NABH-accredited, 40-bed Sanjivani Ayurvedic Institute in Dwarka Sector 13, New Delhi.");

    if (!isReviewAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isReviewAutoPlaying, testimonials.length]);

  return (
    <div className="min-h-screen bg-background font-poppins selection:bg-[#2C4E5A]/20">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Breadcrumb Navigation */}
      <nav className="bg-[#FCFBF7] border-b border-[#EDE8D0] py-3">
        <div className="container mx-auto px-4 max-w-6xl">
          <ol ref={breadcrumbRef} className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] overflow-x-auto whitespace-nowrap pb-1 -mb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <li className="flex items-center gap-2 shrink-0">
              <a href="/" className="text-primary/50 hover:text-primary transition-colors flex items-center gap-1">
                Home
              </a>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="flex items-center gap-2 shrink-0">
              <a href="/centers" className="text-primary/50 hover:text-primary transition-colors">
                Centers
              </a>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="text-primary/90 font-black shrink-0">
              Sanjeevani Ayurveda Centre in Delhi NCR
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="overview" className="bg-[#2C4E5A] text-white py-10 md:py-14">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ lineHeight: '1.3' }}>Sanjivani Ayurvedic Research Institute</h1>
                <p className="text-xl mb-4 opacity-90">Evidence-Based Ayurveda & Advanced Clinical Research Center</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Dwarka Sector 13, Delhi, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.7</span>
                  <span className="opacity-90">(400+ Reviews)</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">`);
        
        for (let j = i + 1; j < lines.length; j++) {
            newContent.push(lines[j]);
        }
        break;
    }
}

fs.writeFileSync(path, newContent.join('\n'));
console.log('File repaired!');
