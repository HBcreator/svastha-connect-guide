const fs = require('fs');

const path = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Remove the bad city assignment that causes a ReferenceError
content = content.replace(
`      if (name.includes("Sri Sri")) {
        name = "Sri Sri Tattva Panchakarma Centre - Delhi";
        city = "Dwarka Sector 19, New Delhi, India";
      }`,
`      if (name.includes("Sri Sri")) {
        name = "Sri Sri Tattva Panchakarma Centre - Delhi";
      }`
);

// 2. Update LOCATION_OVERRIDE_BY_CENTER
content = content.replace(
  '"Sri Sri Tattva Panchakarma Center – Delhi": "Jhilmil, Delhi, India"',
  '"Sri Sri Tattva Panchakarma Centre - Delhi": "Dwarka Sector 19, New Delhi, India"'
);

// 3. Make the finalSlug matching more robust
content = content.replace(
`      } else if (name.includes("Sri Sri")) {
        finalSlug = "sri-sri-tattva-panchakarma-centre-new-delhi-india";
        finalRating = 4.6;
        finalReviews = "250+";`,
`      } else if (name.includes("Sri Sri Tattva")) {
        finalSlug = "sri-sri-tattva-panchakarma-centre-new-delhi-india";
        finalRating = 4.6;
        finalReviews = "250+";`
);

fs.writeFileSync(path, content);
console.log("Syntax error and logic fixed in DelhiNorthIndiaRegionCenters.tsx!");
