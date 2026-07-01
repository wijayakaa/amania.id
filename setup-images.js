const fs = require('fs');
const path = require('path');

const dirs = [
  'public/logo',
  'public/images/services',
  'public/images/team',
  'public/images/partners'
];

dirs.forEach(dir => {
  fs.mkdirSync(path.join(__dirname, dir), { recursive: true });
});

const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==', 'base64');

const files = [
  'public/logo/amania-logo.png',
  'public/images/hero-illustration.png',
  'public/images/services/event.png',
  'public/images/services/course.png',
  'public/images/services/digital-product.png',
  'public/images/services/article.png',
  'public/images/devices-mockup.png',
  'public/images/collaboration.png',
  'public/images/og-image.jpg',
  'public/favicon.ico',
  'public/images/team/member-1.jpg',
  'public/images/team/member-2.jpg',
  'public/images/team/member-3.jpg',
  'public/images/team/member-4.jpg',
  'public/images/partners/aptikom.png',
  'public/images/partners/aws.png',
  'public/images/partners/microsoft.png',
  'public/images/partners/asasi.png',
  'public/images/partners/iaii.png',
  'public/images/partners/pijar.png',
  'public/images/partners/kampus-merdeka.png'
];

files.forEach(f => {
  fs.writeFileSync(path.join(__dirname, f), png);
});

console.log('Images created');
