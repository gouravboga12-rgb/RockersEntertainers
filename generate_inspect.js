import fs from 'fs';
import path from 'path';

const photosDir = './public/photos';
const files = fs.readdirSync(photosDir);

let htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Inspect Gallery Photos</title>
  <style>
    body { font-family: sans-serif; background: #111; color: #fff; padding: 20px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 30px; }
    .card { background: #222; border-radius: 8px; overflow: hidden; padding: 15px; border: 1px solid #333; }
    img { width: 100%; height: 220px; object-fit: cover; border-radius: 4px; }
    h3 { margin: 10px 0 5px 0; font-size: 16px; color: #ff3366; }
    p { margin: 5px 0; font-size: 14px; color: #aaa; }
  </style>
</head>
<body>
  <h1>Gallery Photos Inspector</h1>
  <div class="grid">
`;

files.forEach(file => {
  if (file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png')) {
    htmlContent += `
      <div class="card">
        <img src="/photos/${file}" alt="${file}">
        <h3>${file}</h3>
      </div>
    `;
  }
});

htmlContent += `
  </div>
</body>
</html>
`;

fs.writeFileSync('./public/inspect.html', htmlContent);
console.log('inspect.html generated successfully.');
