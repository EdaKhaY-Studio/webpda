const fs = require('fs');
const path = require('path');

const srcOut = path.join(__dirname, '../frontend/out');
const rootOut = path.join(__dirname, '../out');
const rootDist = path.join(__dirname, '../dist');
const rootBuild = path.join(__dirname, '../build');
const publicHtaccess = path.join(__dirname, '../frontend/public/.htaccess');

if (!fs.existsSync(srcOut)) {
  console.error('ERROR: frontend/out does not exist! Build failed or did not export.');
  process.exit(1);
}

// Ensure .htaccess in frontend/out
if (fs.existsSync(publicHtaccess)) {
  fs.copyFileSync(publicHtaccess, path.join(srcOut, '.htaccess'));
}

const targets = [rootOut, rootDist, rootBuild];

for (const target of targets) {
  try {
    if (fs.existsSync(target)) {
      fs.rmSync(target, { recursive: true, force: true });
    }
    fs.cpSync(srcOut, target, { recursive: true, force: true });

    // Explicitly copy .htaccess from public
    const htaccessDest = path.join(target, '.htaccess');
    if (fs.existsSync(publicHtaccess)) {
      fs.copyFileSync(publicHtaccess, htaccessDest);
    }
    console.log(`✓ Mirrored export to ${path.relative(path.join(__dirname, '..'), target)}/`);
  } catch (err) {
    console.error(`Failed to copy to ${target}:`, err);
    process.exit(1);
  }
}

console.log('✓ All root output directories (out, dist, build) successfully populated for Hostinger deployment.');
