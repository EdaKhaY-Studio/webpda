const fs = require('fs');
const path = require('path');

const standaloneDir = path.join(__dirname, '../frontend/.next/standalone');
const workspaceDir = path.join(standaloneDir, 'frontend');

if (fs.existsSync(workspaceDir)) {
  const publicSrc = path.join(__dirname, '../frontend/public');
  const publicDest = path.join(workspaceDir, 'public');
  if (fs.existsSync(publicSrc)) {
    fs.cpSync(publicSrc, publicDest, { recursive: true, force: true });
  }

  const staticSrc = path.join(__dirname, '../frontend/.next/static');
  const staticDest = path.join(workspaceDir, '.next/static');
  if (fs.existsSync(staticSrc)) {
    fs.cpSync(staticSrc, staticDest, { recursive: true, force: true });
  }

  // Also duplicate server.js, public, and .next/static at standaloneDir root
  const serverSrc = path.join(workspaceDir, 'server.js');
  const serverDest = path.join(standaloneDir, 'server.js');
  if (fs.existsSync(serverSrc)) {
    fs.copyFileSync(serverSrc, serverDest);
  }

  const rootNextStatic = path.join(standaloneDir, '.next/static');
  if (fs.existsSync(staticSrc)) {
    fs.cpSync(staticSrc, rootNextStatic, { recursive: true, force: true });
  }

  const rootPublic = path.join(standaloneDir, 'public');
  if (fs.existsSync(publicSrc)) {
    fs.cpSync(publicSrc, rootPublic, { recursive: true, force: true });
  }

  console.log('✓ Successfully prepared Next.js standalone server and static assets');
}
