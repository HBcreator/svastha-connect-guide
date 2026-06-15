const fs = require('fs');

const extractReviews = () => {
    const markdownPath = 'public/Anchor pages/mumbai/savastha_mumbai_centers-updated.md';
    let markdown = fs.readFileSync(markdownPath, 'utf8');

    const appTsx = fs.readFileSync('src/App.tsx', 'utf8');
    const routeRegex = /<Route path="\/centers\/([^"]+)" element=\{<([^ ]+) \/>\} \/>/g;
    let match;
    const slugToComponent = {};
    while ((match = routeRegex.exec(appTsx)) !== null) {
        slugToComponent[match[1]] = match[2];
    }

    const seriesToSlug = {
        1: "swarayu-ayurveda-clinic-panchakarma-center-mumbai-india",
        2: "prof-kr-kohlis-ayurveda-panchakarma-center-mumbai-india",
        3: "ayushakti-ayurved-health-center-mumbai-india",
        4: "sharayu-ayurveda-best-ayurvedic-doctor-center-mumbai-india",
        5: "aushadhgyan-ayurveda-wellness-center-mumbai-india",
        6: "karma-ayurveda-clinic-mumbai-india",
        7: "sriaas-sr-institute-of-advanced-ayurvedic-sciences-hospital-mumbai-india",
        9: "aayushree-ayurvedic-polyclinic-panchakarma-center-mumbai-india",
        11: "thapovan-ayurveda-hospital-mumbai-india",
        12: "somaiya-ayurvihar-panchakarma-center-mumbai-india",
        13: "herbal-hills-ayurvedic-wellness-center-mumbai-india",
        14: "pravaayu-ayurveda-panchkarma-clinic-mumbai-india",
        15: "aradhana-ayurveda-clinic-panchakarma-center-mumbai-india",
        16: "divyamrut-ayurcare-hospital-mumbai-india",
        17: "kerala-ayurveda-multi-speciality-clinic-mumbai-india",
        18: "ayush-ayurved-panchakarma-center-mumbai-india",
        19: "bharati-ayurved-hospital-pune-india",
        20: "shree-ayurved-panchakarma-hospital-pune-india",
        21: "aatreya-ayurved-panchakarma-clinic-pune-india",
        22: "ashtang-ayurveda-super-multi-speciality-hospital-nashik-india",
        23: "ayushman-bhava-ayurveda-keraliya-panchakarma-clinic-nashik-india",
        24: "shree-vishwavallabh-ayurvedic-panchakarma-garbh-sanskar-center-nashik-india",
        25: "sukhayu-ayurveda-panchakarma-center-nashik-india"
    };

    let mdLines = markdown.split('\n');
    for (let i = 0; i < mdLines.length; i++) {
        let line = mdLines[i];
        if (line.trim().startsWith('| **')) {
            const seriesMatch = line.match(/^\|\s*\*\*(\d+)\*\*/);
            if (seriesMatch) {
                const series = parseInt(seriesMatch[1], 10);
                const slug = seriesToSlug[series];
                if (slug) {
                    const componentName = slugToComponent[slug];
                    if (componentName) {
                        try {
                            const compPath = `src/pages/centers/${componentName}.tsx`;
                            const compCode = fs.readFileSync(compPath, 'utf8');
                            const ratingMatch = compCode.match(/<Star[^>]*>[\s\S]*?<span[^>]*>([\d\.]+)<\/span>/) || compCode.match(/<span[^>]*(?:font-bold|font-semibold)[^>]*>([\d\.]+)<\/span>/);
                            const reviewsMatch = compCode.match(/<span[^>]*opacity-90[^>]*>\(([^)]+)\)<\/span>/) || compCode.match(/<span[^>]*opacity-80[^>]*>\(([^)]+)\)<\/span>/);
                            if (ratingMatch && reviewsMatch) {
                                const rating = ratingMatch[1];
                                const reviews = reviewsMatch[1].replace(' Reviews', '').replace('+', '').trim();
                                
                                let parts = line.split('|');
                                if (parts.length >= 6) {
                                    parts[4] = ` **★ ${rating}** (${reviews}+) `;
                                    mdLines[i] = parts.join('|');
                                }
                            } else {
                                console.log("Failed to match in ", componentName);
                            }
                        } catch (e) {
                            console.error(`Failed to process ${componentName}`, e.message);
                        }
                    }
                }
            }
        }
    }
    fs.writeFileSync(markdownPath, mdLines.join('\n'));
    console.log("Done fixing ratings!");
};
extractReviews();
