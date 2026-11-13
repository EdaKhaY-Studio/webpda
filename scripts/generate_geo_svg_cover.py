import os

svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675" fill="none">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080605" />
      <stop offset="45%" stop-color="#140E0B" />
      <stop offset="80%" stop-color="#1B120E" />
      <stop offset="100%" stop-color="#0B0807" />
    </linearGradient>

    <!-- Radial Glows -->
    <radialGradient id="centerHubGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F45B1A" stop-opacity="0.35" />
      <stop offset="40%" stop-color="#FF7A3D" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#F45B1A" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFB37C" stop-opacity="0.9" />
      <stop offset="30%" stop-color="#F45B1A" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#F45B1A" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="ambientBackGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FF5722" stop-opacity="0.12" />
      <stop offset="50%" stop-color="#3A1C0E" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#080605" stop-opacity="0" />
    </radialGradient>

    <!-- Linear Gradients for Roofs & Architecture -->
    <linearGradient id="roofOrange" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF7A3D" />
      <stop offset="100%" stop-color="#D94307" />
    </linearGradient>

    <linearGradient id="roofDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3A241A" />
      <stop offset="100%" stop-color="#1E130E" />
    </linearGradient>

    <linearGradient id="wallPlinth" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#241712" />
      <stop offset="100%" stop-color="#140D0A" />
    </linearGradient>

    <linearGradient id="pathGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F45B1A" stop-opacity="0.1" />
      <stop offset="50%" stop-color="#FF9E66" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#F45B1A" stop-opacity="0.1" />
    </linearGradient>

    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="16" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- 1. Background Base -->
  <rect width="1200" height="675" fill="url(#bgGrad)" />

  <!-- 2. Ambient Atmosphere -->
  <circle cx="600" cy="300" r="500" fill="url(#ambientBackGlow)" />
  <circle cx="600" cy="340" r="280" fill="url(#centerHubGlow)" />

  <!-- 3. Grid / Stepping Base Platform (Miniature Diorama Island) -->
  <g transform="translate(150, 160)" opacity="0.95">
    <!-- Isometric Diorama Plinth Ground -->
    <path d="M 450 60 L 850 240 L 450 420 L 50 240 Z" fill="#140D0A" stroke="#F45B1A" stroke-opacity="0.25" stroke-width="2" />
    <path d="M 50 240 L 450 420 L 450 460 L 50 280 Z" fill="#0C0806" />
    <path d="M 850 240 L 450 420 L 450 460 L 850 280 Z" fill="#180F0B" />

    <!-- Isometric Surface Grid Lines (Subtle) -->
    <path d="M 150 195 L 550 375" stroke="#FFFFFF" stroke-opacity="0.04" stroke-width="1.5" />
    <path d="M 250 150 L 650 330" stroke="#FFFFFF" stroke-opacity="0.04" stroke-width="1.5" />
    <path d="M 350 105 L 750 285" stroke="#FFFFFF" stroke-opacity="0.04" stroke-width="1.5" />

    <path d="M 750 195 L 350 375" stroke="#FFFFFF" stroke-opacity="0.04" stroke-width="1.5" />
    <path d="M 650 150 L 250 330" stroke="#FFFFFF" stroke-opacity="0.04" stroke-width="1.5" />
    <path d="M 550 105 L 150 285" stroke="#FFFFFF" stroke-opacity="0.04" stroke-width="1.5" />

    <!-- 4. Glowing Interconnection Pathways (RAG & Retrieval Network) -->
    <path d="M 450 230 L 250 200" stroke="#F45B1A" stroke-opacity="0.6" stroke-width="2.5" stroke-dasharray="4 4" />
    <path d="M 450 230 L 650 190" stroke="#F45B1A" stroke-opacity="0.6" stroke-width="2.5" stroke-dasharray="4 4" />
    <path d="M 450 230 L 320 300" stroke="#F45B1A" stroke-opacity="0.6" stroke-width="2.5" stroke-dasharray="4 4" />
    <path d="M 450 230 L 580 310" stroke="#F45B1A" stroke-opacity="0.7" stroke-width="3" />
    <path d="M 450 230 L 450 350" stroke="#F45B1A" stroke-opacity="0.8" stroke-width="3.5" filter="url(#softGlow)" />

    <!-- 5. Miniature Surrounding Houses (Websites & Businesses) -->
    
    <!-- House 1: West (Left Rear) -->
    <g transform="translate(210, 160)">
      <polygon points="40,20 70,5 10,5" fill="url(#roofDark)" stroke="#F45B1A" stroke-opacity="0.3" />
      <polygon points="40,20 70,5 70,40 40,55" fill="#1C120D" />
      <polygon points="40,20 10,5 10,40 40,55" fill="#291A13" />
      <!-- Warm Lit Window -->
      <rect x="18" y="25" width="12" height="15" rx="1.5" fill="#FFB37C" opacity="0.85" filter="url(#softGlow)" />
    </g>

    <!-- House 2: East (Right Rear) -->
    <g transform="translate(620, 150)">
      <polygon points="40,20 70,5 10,5" fill="url(#roofDark)" stroke="#F45B1A" stroke-opacity="0.3" />
      <polygon points="40,20 70,5 70,40 40,55" fill="#1C120D" />
      <polygon points="40,20 10,5 10,40 40,55" fill="#291A13" />
      <!-- Warm Lit Window -->
      <rect x="48" y="25" width="12" height="15" rx="1.5" fill="#FFB37C" opacity="0.85" filter="url(#softGlow)" />
    </g>

    <!-- House 3: South West (Left Front - Digital Directory / Media) -->
    <g transform="translate(280, 260)">
      <polygon points="50,25 90,5 10,5" fill="url(#roofDark)" stroke="#F45B1A" stroke-opacity="0.4" />
      <polygon points="50,25 90,5 90,50 50,70" fill="#1C120D" />
      <polygon points="50,25 10,5 10,50 50,70" fill="#2B1C15" />
      <!-- Warm Lit Windows -->
      <rect x="20" y="32" width="16" height="20" rx="2" fill="#FF9E66" opacity="0.9" filter="url(#softGlow)" />
    </g>

    <!-- House 4: South East (Right Front - Verified Business Partner / Paham Digital) -->
    <g transform="translate(540, 260)">
      <polygon points="50,25 90,5 10,5" fill="url(#roofOrange)" />
      <polygon points="50,25 90,5 90,55 50,75" fill="#211510" />
      <polygon points="50,25 10,5 10,55 50,75" fill="#361E14" stroke="#F45B1A" stroke-opacity="0.5" />
      <!-- Front Door & Large Luminous Window -->
      <rect x="22" y="35" width="18" height="25" rx="2" fill="#FFC299" opacity="0.95" filter="url(#softGlow)" />
      <!-- Ambient Ground Glow -->
      <circle cx="50" cy="75" r="30" fill="url(#centerHubGlow)" />
    </g>

    <!-- 6. Central Community Hub: "Balai Warga / Pos RT" (Pak RT = Pusat Informasi) -->
    <g transform="translate(400, 150)">
      <!-- Base Plinth -->
      <polygon points="50,70 95,45 5,45" fill="#3D261C" />
      <!-- Pavilion Roof (Traditional Limasan / Joglo-inspired Miniature Roof) -->
      <polygon points="50,15 95,45 5,45" fill="url(#roofOrange)" stroke="#FFA070" stroke-width="1.5" />
      <polygon points="50,15 50,0 45,5" fill="#FFE0CC" />
      
      <!-- Central Pillar & Hanging Lantern (Simbol Pusat Rujukan) -->
      <line x1="50" y1="25" x2="50" y2="50" stroke="#FFE0CC" stroke-width="2" />
      <!-- Glowing Lantern -->
      <circle cx="50" cy="52" r="14" fill="url(#lanternGlow)" filter="url(#strongGlow)" />
      <circle cx="50" cy="52" r="5" fill="#FFFFFF" />

      <!-- Foundation Pillars -->
      <rect x="20" y="45" width="5" height="30" fill="#2B1C15" />
      <rect x="75" y="45" width="5" height="30" fill="#2B1C15" />
      <rect x="47" y="55" width="6" height="20" fill="#2B1C15" />
    </g>

    <!-- 7. The New Neighbor House (Foreground South: Si AI / Tetangga Baru) -->
    <g transform="translate(400, 310)">
      <polygon points="50,25 95,5 5,5" fill="url(#roofDark)" stroke="#F45B1A" stroke-opacity="0.5" stroke-width="1.5" />
      <polygon points="50,25 95,5 95,65 50,85" fill="#1C120D" />
      <polygon points="50,25 5,5 5,65 50,85" fill="#301E17" />
      <!-- Open Welcoming Door / Portal with Soft Light -->
      <path d="M 35 55 L 65 55 L 65 82 L 35 82 Z" fill="#FF9E66" opacity="0.95" filter="url(#softGlow)" />
      <circle cx="50" cy="85" r="25" fill="url(#lanternGlow)" opacity="0.6" />
    </g>
  </g>

  <!-- 8. Cinematic Atmospheric Bokeh & Light Spheres -->
  <circle cx="280" cy="220" r="4" fill="#FFB37C" opacity="0.7" filter="url(#softGlow)" />
  <circle cx="890" cy="260" r="3" fill="#FF7A3D" opacity="0.8" filter="url(#softGlow)" />
  <circle cx="620" cy="480" r="5" fill="#F45B1A" opacity="0.75" filter="url(#softGlow)" />
  <circle cx="360" cy="420" r="3.5" fill="#FFB37C" opacity="0.6" />
  <circle cx="750" cy="180" r="2.5" fill="#FFA070" opacity="0.7" />

  <!-- Subtle Vignette Frame -->
  <rect width="1200" height="675" fill="none" stroke="#F45B1A" stroke-opacity="0.15" stroke-width="1" />
</svg>
'''

output_path = 'frontend/public/images/blog/apa-itu-geo-cover.svg'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(svg_content)
print(f'Successfully wrote {output_path}')
