const markdownLine = `| **25** | **Sri Sri Tattva Panchakarma Centre – Delhi** | An Ayurvedic wellness and Panchakarma centre in Delhi affiliated with the Art of Living Foundation — one of the world's largest yoga and wellness organizations led by Sri Sri Ravi Shankar. The centre offers holistic Panchakarma programs integrating classical Ayurvedic detox therapies with Sudarshan Kriya breathing, yoga, and meditation for a complete mind-body reset. Treatments include Abhyanga, Shirodhara, Nasya, herbal steam, and Virechana, all with qualified Ayurvedic physicians and freshly prepared Ayurvedic medicines. Especially popular for stress management, insomnia, and urban lifestyle disorders. | **★ 4.4** (700+) | **New Delhi** Delhi India |`;

const cleanMarkdownText = (value) =>
  value
    .replace(/\*\*/g, "")
    .replace(/\\([.#-])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

const parts = markdownLine.split("|").map((part) => part.trim());

let name = cleanMarkdownText(parts[2]);
console.log("Original name:", name);
let city = "";

if (name.includes("Sri Sri")) {
  name = "Sri Sri Tattva Panchakarma Centre - Delhi";
  city = "Dwarka Sector 19, New Delhi, India";
}

const description = cleanMarkdownText(parts[3]);
const ratingCell = cleanMarkdownText(parts[4]);
city = cleanMarkdownText(parts[5]).replace(/\s+/g, " ").trim();

console.log("Overridden name:", name);
console.log("City after part 5:", city);

const ratingMatch = ratingCell.match(/[\d.]+/);
const reviewsMatch = ratingCell.match(/\(([^)]+)\)/);
const rating = ratingMatch ? Number(ratingMatch[0]) : 0;
const reviews = reviewsMatch ? reviewsMatch[1].replace(/\+/g, "").trim() : "0";

let finalSlug = "";
let finalRating = rating;
let finalReviews = reviews;

if (name.includes("Sri Vaidya")) {
  finalSlug = "sri-vaidya-ayurveda-panchakarma-hospital-delhi-india";
} else if (name.includes("Sri Sri")) {
  finalSlug = "sri-sri-tattva-panchakarma-centre-new-delhi-india";
  finalRating = 4.6;
  finalReviews = "250+";
}

console.log({
  name,
  description: description.substring(0, 30) + "...",
  rating: finalRating,
  reviews: finalReviews,
  city,
  slug: finalSlug
});
