import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '../out');

console.log('Connecting to Hostinger MCP...');
console.log('Deploy directory:', outDir);

const child = spawn('npx.cmd', ['--package=@hostinger/mcp@latest', 'hostinger-hosting-mcp'], {
  stdio: ['pipe', 'pipe', 'pipe'],
  shell: true,
  env: process.env,
});

let buffer = '';
let nextId = 1;
const pending = new Map();

child.stderr.on('data', (d) => {
  const msg = d.toString();
  console.log('[MCP STDERR]', msg.trim());
});

child.stdout.on('data', (d) => {
  buffer += d.toString();
  let idx;
  while ((idx = buffer.indexOf('\n')) >= 0) {
    const line = buffer.slice(0, idx).trim();
    buffer = buffer.slice(idx + 1);
    if (!line) continue;
    try {
      const msg = JSON.parse(line);
      if (msg.id && pending.has(msg.id)) {
        pending.get(msg.id)(msg);
        pending.delete(msg.id);
      }
    } catch {
      // ignore non-json line
    }
  }
});

function call(method, params = {}) {
  return new Promise((resolve) => {
    const id = nextId++;
    pending.set(id, resolve);
    child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id, method, params }) + '\n');
  });
}

async function run() {
  try {
    // 1. Initialize
    const initRes = await call('initialize', {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'hostinger-deployer', version: '1.0.0' }
    });
    console.log('[INIT SUCCESS]', initRes.result?.serverInfo?.name || 'MCP connected');

    child.stdin.write(JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' }) + '\n');

    // 2. Call execute with hosting_deploy
    console.log('Triggering hosting_deploy for pahamdigital.online...');
    const deployRes = await call('tools/call', {
      name: 'execute',
      arguments: {
        operation: 'hosting_deploy',
        params: {
          domain: 'pahamdigital.online',
          path: outDir,
          type: 'static'
        }
      }
    });

    console.log('[DEPLOY RESULT]');
    console.log(JSON.stringify(deployRes, null, 2));

  } catch (err) {
    console.error('[ERROR]', err);
  } finally {
    setTimeout(() => {
      child.kill();
      process.exit(0);
    }, 1000);
  }
}

run();
