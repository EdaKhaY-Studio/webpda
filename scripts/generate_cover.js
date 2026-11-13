// Generate SVG for Gemini 4 Carbon editorial cover
const fs = require('fs');
const path = require('path');
const sharp = require(path.resolve(__dirname, '../frontend/node_modules/sharp'));

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675" fill="none">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#060404" />
      <stop offset="45%" stop-color="#0E0907" />
      <stop offset="80%" stop-color="#150D0A" />
      <stop offset="100%" stop-color="#080504" />
    </linearGradient>

    <!-- Radial Glows -->
    <radialGradient id="carbonCoreGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F45B1A" stop-opacity="0.45" />
      <stop offset="40%" stop-color="#FF7A3D" stop-opacity="0.2" />
      <stop offset="80%" stop-color="#F45B1A" stop-opacity="0.05" />
      <stop offset="100%" stop-color="#F45B1A" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="argonAuraGlow" cx="28%" cy="50%" r="45%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.3" />
      <stop offset="45%" stop-color="#0284C7" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#0284C7" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="carbonAuraGlow" cx="72%" cy="50%" r="45%">
      <stop offset="0%" stop-color="#F45B1A" stop-opacity="0.35" />
      <stop offset="45%" stop-color="#D94307" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#F45B1A" stop-opacity="0" />
    </radialGradient>

    <!-- Shading Filters -->
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <filter id="strongGlow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="14" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- 1. Background -->
  <rect width="1200" height="675" fill="url(#bgGrad)" />

  <!-- 2. Dual Atmospheric Glows: Argon (Cyan) & Carbon (Orange) -->
  <circle cx="340" cy="337" r="320" fill="url(#argonAuraGlow)" />
  <circle cx="860" cy="337" r="320" fill="url(#carbonAuraGlow)" />
  <circle cx="600" cy="337" r="280" fill="url(#carbonCoreGlow)" />

  <!-- 3. Isometric Grid & Circuit Board Traces (Subtle) -->
  <g stroke="#F45B1A" stroke-opacity="0.12" stroke-width="1.2">
    <!-- Top & Bottom Circuit Bus Lines -->
    <path d="M 100 80 L 300 80 L 340 120 L 500 120" />
    <path d="M 1100 80 L 900 80 L 860 120 L 700 120" />
    <path d="M 80 595 L 320 595 L 360 555 L 520 555" />
    <path d="M 1120 595 L 880 595 L 840 555 L 680 555" />

    <!-- Circuit Connection Nodes -->
    <circle cx="340" cy="120" r="3" fill="#F45B1A" fill-opacity="0.4" />
    <circle cx="500" cy="120" r="3" fill="#F45B1A" fill-opacity="0.6" />
    <circle cx="860" cy="120" r="3" fill="#F45B1A" fill-opacity="0.4" />
    <circle cx="700" cy="120" r="3" fill="#F45B1A" fill-opacity="0.6" />
    <circle cx="360" cy="555" r="3" fill="#F45B1A" fill-opacity="0.4" />
    <circle cx="840" cy="555" r="3" fill="#F45B1A" fill-opacity="0.4" />
  </g>

  <!-- 4. Subtle Hexagonal Lattice (Carbon Crystalline / Diamond Structure) -->
  <g stroke="#FFFFFF" stroke-opacity="0.04" stroke-width="1" fill="none">
    <polygon points="600,187 640,210 640,256 600,279 560,256 560,210" />
    <polygon points="600,395 640,418 640,464 600,487 560,464 560,418" />
    <polygon points="496,241 536,264 536,310 496,333 456,310 456,264" />
    <polygon points="704,241 744,264 744,310 704,333 664,310 664,264" />
    <polygon points="496,341 536,364 536,410 496,433 456,410 456,364" />
    <polygon points="704,341 744,364 744,410 704,433 664,410 664,364" />
  </g>

  <!-- 5. Central Carbon Atomic Structure -->
  <g transform="translate(600, 337)">
    <!-- Outer Orbital Ring 1 (Tilted Ellipse) -->
    <ellipse cx="0" cy="0" rx="220" ry="85" transform="rotate(-30)" stroke="#F45B1A" stroke-opacity="0.45" stroke-width="1.8" stroke-dasharray="6 4" fill="none" />
    
    <!-- Outer Orbital Ring 2 (Tilted Ellipse) -->
    <ellipse cx="0" cy="0" rx="220" ry="85" transform="rotate(30)" stroke="#F45B1A" stroke-opacity="0.45" stroke-width="1.8" stroke-dasharray="6 4" fill="none" />
    
    <!-- Outer Orbital Ring 3 (Horizontal Ellipse) -->
    <ellipse cx="0" cy="0" rx="230" ry="75" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1.2" fill="none" />

    <!-- Orbital Electrons (6 for Carbon - Atomic Number 6) -->
    <!-- Electron 1 (Top Left) -->
    <circle cx="-165" cy="-95" r="6" fill="#F45B1A" filter="url(#softGlow)" />
    <circle cx="-165" cy="-95" r="2.5" fill="#FFFFFF" />
    
    <!-- Electron 2 (Top Right) -->
    <circle cx="165" cy="-95" r="6" fill="#F45B1A" filter="url(#softGlow)" />
    <circle cx="165" cy="-95" r="2.5" fill="#FFFFFF" />
    
    <!-- Electron 3 (Bottom Left) -->
    <circle cx="-165" cy="95" r="6" fill="#F45B1A" filter="url(#softGlow)" />
    <circle cx="-165" cy="95" r="2.5" fill="#FFFFFF" />
    
    <!-- Electron 4 (Bottom Right) -->
    <circle cx="165" cy="95" r="6" fill="#F45B1A" filter="url(#softGlow)" />
    <circle cx="165" cy="95" r="2.5" fill="#FFFFFF" />
    
    <!-- Electron 5 (Far Left) -->
    <circle cx="-225" cy="0" r="5" fill="#38BDF8" filter="url(#softGlow)" />
    <circle cx="-225" cy="0" r="2" fill="#FFFFFF" />
    
    <!-- Electron 6 (Far Right) -->
    <circle cx="225" cy="0" r="5" fill="#FF7A3D" filter="url(#softGlow)" />
    <circle cx="225" cy="0" r="2" fill="#FFFFFF" />

    <!-- Central Nucleus Core -->
    <circle cx="0" cy="0" r="70" fill="#140D0A" stroke="#F45B1A" stroke-width="2.5" filter="url(#softGlow)" />
    <circle cx="0" cy="0" r="58" fill="#1A110D" stroke="#FFFFFF" stroke-opacity="0.2" stroke-width="1.2" />

    <!-- Symbol "C" (Carbon) -->
    <text x="0" y="24" font-family="'Geist', 'Segoe UI', system-ui, sans-serif" font-weight="900" font-size="68" fill="#F7F1EB" text-anchor="middle" letter-spacing="-2">C</text>
    <text x="0" y="44" font-family="'Geist', 'Segoe UI', system-ui, sans-serif" font-weight="700" font-size="11" fill="#F45B1A" text-anchor="middle" letter-spacing="3">CARBON · 6</text>
  </g>

  <!-- 6. Left Indicator: ARGON (Noble Gas 18 - Junior Specialist) -->
  <g transform="translate(140, 310)">
    <rect x="0" y="0" width="160" height="54" rx="12" fill="#0E1720" stroke="#0284C7" stroke-opacity="0.4" stroke-width="1.5" />
    <circle cx="24" cy="27" r="6" fill="#38BDF8" filter="url(#softGlow)" />
    <text x="42" y="23" font-family="'Geist', 'Segoe UI', system-ui, sans-serif" font-weight="800" font-size="13" fill="#E0F2FE" letter-spacing="1">GEMINI 4 ARGON</text>
    <text x="42" y="39" font-family="'Geist', 'Segoe UI', system-ui, sans-serif" font-weight="500" font-size="10" fill="#7DD3FC">Satpam Junior Terlatih</text>
  </g>

  <!-- 7. Right Indicator: CARBON (Frontier Specialist - Senior Investigator) -->
  <g transform="translate(900, 310)">
    <rect x="0" y="0" width="160" height="54" rx="12" fill="#1D100A" stroke="#F45B1A" stroke-opacity="0.5" stroke-width="1.5" />
    <circle cx="24" cy="27" r="6" fill="#F45B1A" filter="url(#softGlow)" />
    <text x="42" y="23" font-family="'Geist', 'Segoe UI', system-ui, sans-serif" font-weight="800" font-size="13" fill="#FFF7ED" letter-spacing="1">GEMINI 4 CARBON</text>
    <text x="42" y="39" font-family="'Geist', 'Segoe UI', system-ui, sans-serif" font-weight="500" font-size="10" fill="#FDBA74">Satpam Senior Spesialis</text>
  </g>

  <!-- 8. Editorial Badge at Top Center -->
  <g transform="translate(600, 75)">
    <rect x="-170" y="0" width="340" height="34" rx="17" fill="#17100D" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="1" />
    <circle cx="-145" cy="17" r="4" fill="#F45B1A" />
    <text x="0" y="22" font-family="'Geist', 'Segoe UI', system-ui, sans-serif" font-weight="700" font-size="11" fill="#A99A90" text-anchor="middle" letter-spacing="2">PAHAM DIGITAL · ARTIKEL 05</text>
  </g>

  <!-- 9. Editorial Bottom Banner / Subtitle Overlay -->
  <g transform="translate(600, 595)">
    <text x="0" y="-14" font-family="'Geist', 'Segoe UI', system-ui, sans-serif" font-weight="800" font-size="28" fill="#F7F1EB" text-anchor="middle" letter-spacing="-0.5">GEMINI 4 CARBON</text>
    <text x="0" y="10" font-family="'Geist', 'Segoe UI', system-ui, sans-serif" font-weight="500" font-size="13" fill="#A99A90" text-anchor="middle" letter-spacing="1.5">GOOGLE DEEPMIND · AGENTIC WORKFLOW · FRONTIER REASONING · 3D DEV</text>
  </g>
</svg>`;

const targetSvgPath = path.join(__dirname, '../frontend/public/images/blog/apa-itu-gemini-4-carbon-cover.svg');
const targetWebpPath = path.join(__dirname, '../frontend/public/images/blog/apa-itu-gemini-4-carbon-cover.webp');
const targetJpgPath = path.join(__dirname, '../frontend/public/images/blog/apa-itu-gemini-4-carbon-cover.jpg');

fs.writeFileSync(targetSvgPath, svgContent, 'utf-8');
console.log('Saved SVG:', targetSvgPath);

async function convert() {
  await sharp(Buffer.from(svgContent))
    .resize(1200, 675)
    .webp({ quality: 90 })
    .toFile(targetWebpPath);
  console.log('Saved WebP:', targetWebpPath);

  await sharp(Buffer.from(svgContent))
    .resize(1200, 675)
    .jpeg({ quality: 90 })
    .toFile(targetJpgPath);
  console.log('Saved JPG:', targetJpgPath);
}

convert().catch(err => {
  console.error('Error during sharp conversion:', err);
  process.exit(1);
});
