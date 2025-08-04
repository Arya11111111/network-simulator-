import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';

console.log('🚀 Starting production deployment...');

try {
  // Install all dependencies (including dev deps for build)
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Build the application
  console.log('🏗️ Building application...');
  execSync('node build.js', { stdio: 'inherit' });
  
  // Verify build output
  if (!existsSync('./dist/server.js')) {
    throw new Error('Server build failed - dist/server.js not found');
  }
  
  if (!existsSync('./dist/public/index.html')) {
    throw new Error('Frontend build failed - dist/public/index.html not found');
  }
  
  console.log('✅ Deployment build completed successfully!');
  console.log('📁 Build outputs:');
  console.log('   - Backend: dist/server.js');
  console.log('   - Frontend: dist/public/');
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}