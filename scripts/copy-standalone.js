const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');
const frontendNextDir = path.join(frontendDir, '.next');
const standaloneDir = path.join(frontendNextDir, 'standalone');
const workspaceDir = path.join(standaloneDir, 'frontend');

if (fs.existsSync(workspaceDir)) {
  const publicSrc = path.join(frontendDir, 'public');
  const staticSrc = path.join(frontendNextDir, 'static');

  // 1. Populate workspace standalone
  const publicDest = path.join(workspaceDir, 'public');
  if (fs.existsSync(publicSrc)) {
    fs.cpSync(publicSrc, publicDest, { recursive: true, force: true });
  }

  const staticDest = path.join(workspaceDir, '.next/static');
  if (fs.existsSync(staticSrc)) {
    fs.cpSync(staticSrc, staticDest, { recursive: true, force: true });
  }

  // 2. Populate standaloneDir root
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

  // 3. Nested standalone in case the platform appends /standalone to outputDirectory
  const nestedStandaloneDir = path.join(standaloneDir, 'standalone');
  if (!fs.existsSync(nestedStandaloneDir)) {
    fs.mkdirSync(nestedStandaloneDir, { recursive: true });
  }
  if (fs.existsSync(serverSrc)) {
    fs.copyFileSync(serverSrc, path.join(nestedStandaloneDir, 'server.js'));
  }
  if (fs.existsSync(staticSrc)) {
    fs.cpSync(staticSrc, path.join(nestedStandaloneDir, '.next/static'), { recursive: true, force: true });
  }
  if (fs.existsSync(publicSrc)) {
    fs.cpSync(publicSrc, path.join(nestedStandaloneDir, 'public'), { recursive: true, force: true });
  }

  // 4. Mirror to repository root .next in case platform checks repo root
  const rootNextDir = path.join(__dirname, '../.next');
  fs.cpSync(frontendNextDir, rootNextDir, { recursive: true, force: true });

  console.log('✓ Successfully prepared Next.js standalone server and static assets across all target paths');
}
