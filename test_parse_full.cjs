const fs = require('fs');

const markdown = fs.readFileSync('public/Anchor pages/Delhi/savastha_delhi 25_centers .md', 'utf8');

const cleanMarkdownText = (value) =>
  value
    .replace(/\*\*/g, "")
    .replace(/\\([.#-])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

try {
  const lines = markdown
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^\|\s*\*\*\d+\*\*/.test(line));

  const centers = lines.map((line) => {
      const parts = line.split("|").map((part) => part.trim());
      if (parts.length < 6) return null;

      const series = Number(cleanMarkdownText(parts[1]));
      if (!series || series > 25) return null;

      let name = cleanMarkdownText(parts[2]);
      if (name === "Sri Sri Ayurveda Panchakarma (PanchkarmaTreatment.com)") {
        name = "Sri Sri Ayurveda Panchakarma Ayurveda Center";
      }
      if (name.includes("Sri Sri Tattva Panchakarma Centre")) {
        name = "Sri Sri Tattva Panchakarma Centre - Delhi";
      }
      if (name.includes("Tibbia College")) {
        name = "A & U Tibbia College & Hospital";
      }
      if (name.includes("Sanjivani")) {
        name = "Sanjivani Ayurvedic Research Institute";
      }
      
      const description = cleanMarkdownText(parts[3]);
      const ratingCell = cleanMarkdownText(parts[4]);
      let city = cleanMarkdownText(parts[5]).replace(/\s+/g, " ").trim();
      city = city.replace(/\s*Delhi India$/i, ", India");
      if (!/India$/i.test(city)) {
        city = `${city}, India`;
      }
      
      return { series, name };
  });
  console.log("Parsed", centers.filter(c => c !== null).length, "centers successfully!");
} catch (e) {
  console.error(e);
}
