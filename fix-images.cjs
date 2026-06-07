const fs = require('fs');

const path = 'src/pages/centers/AryaVaidyaSala.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the corrupted folder name with the clean one
content = content.replace(/\/TOP cneters\/delhi\/Arya Vaidya Sala[^/]+\/main\.jpg/g, '/TOP cneters/delhi/Arya Vaidya Sala - Ayurvedic Hospital & Research Center (Delhi)/main.jpg');
content = content.replace(/\/TOP cneters\/delhi\/Arya Vaidya Sala[^/]+\/secondary\.jpg/g, '/TOP cneters/delhi/Arya Vaidya Sala - Ayurvedic Hospital & Research Center (Delhi)/secondary.jpg');

// The duplicate issue is around lines 480-500:
// <div><img src=".../main.jpg" ... /></div>
// <div><img src=".../main.jpg" ... translate-y-8 /></div>
// Let's replace the second one with secondary.jpg

const match = content.match(/<img\s+src="\/TOP cneters\/delhi\/Arya Vaidya Sala - Ayurvedic Hospital & Research Center \(Delhi\)\/main\.jpg"\s+alt="Arya Vaidya Sala Kottakkal view"\s+className="rounded-\[2rem\] w-full object-cover shadow-2xl border-4 border-white\/20 aspect-\[4\/3\] translate-y-8"/);

if (match) {
    content = content.replace(match[0], match[0].replace('main.jpg', 'secondary.jpg'));
}

fs.writeFileSync(path, content, 'utf8');
console.log("Fixed images in AryaVaidyaSala.tsx");
