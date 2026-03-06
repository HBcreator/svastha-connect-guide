export const TOP_CENTER_SLUGS = new Set<string>([
  "bangalore/soukya",
  "bangalore/ayurvedagram",
  "dharamshala/himveda",
  "dharamshala/ayuskama-ayurveda",
  "kerala/somatheeram",
  "kerala/ayursoma",
  "kerala/kairali-ayurvedic-healing-village",
  "veda5",
  "rishikesh/yan-cure",
  "goa/soul-vacation",
  "goa/swan-yoga-retreat",
  "uttarakhand/ananda-in-the-himalayas",
  "delhi/namastedwaar",
  "kerala/ayurmana",
  "mysore/chamundi-hill-palace",
  "kerala/kairali-heritage",
  "kerala/agni-ayurvedic-village",
  "kerala/dheemahi-kumarakom",
  "kerala/nagarjuna-ayurveda-centre",
  "kerala/sanjeevanam-ayurveda-hospital",
  "kerala/back-to-roots",
  "kerala/dhathri-ayurveda",
  "kerala/krishnendu-ayurveda-hospital",
  "kerala/athreya-ayurvedic-centre",
  "kerala/ayur-bethaniya-ayurveda-hospital",
  "kerala/ayushi-ayurvedic-retreat",
  "idukki/sitaram-mountain-retreat",
  "kochi/akanta-ayurveda-and-yoga-resort",
  "mysore/indus-valley-ayurvedic-centre",
  "udupi/shathayu-ayurveda-yoga-retreat",
]);

export const prioritizeTopCenters = <T extends { slug?: string }>(list: T[]) => {
  const top = list.filter((center) => center.slug && TOP_CENTER_SLUGS.has(center.slug));
  const rest = list.filter((center) => !(center.slug && TOP_CENTER_SLUGS.has(center.slug)));
  return [...top, ...rest];
};
