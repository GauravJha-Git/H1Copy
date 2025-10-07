const fs = require('fs');
const path = require('path');

console.log('Running post-build script...');

// Ensure all configuration files are copied to build directory
const filesToCopy = [
  { src: 'public/_redirects', dest: 'build/_redirects' },
  { src: 'public/.htaccess', dest: 'build/.htaccess' },
  { src: 'public/404.html', dest: 'build/404.html' }
];

filesToCopy.forEach(file => {
  try {
    if (fs.existsSync(file.src)) {
      fs.copyFileSync(file.src, file.dest);
      console.log(`✅ Copied ${file.src} to ${file.dest}`);
    } else {
      console.log(`❌ Source file not found: ${file.src}`);
    }
  } catch (error) {
    console.error(`❌ Error copying ${file.src}:`, error.message);
  }
});

// List build directory contents
console.log('\nBuild directory contents:');
try {
  const buildFiles = fs.readdirSync('build');
  buildFiles.forEach(file => {
    const filePath = path.join('build', file);
    const stats = fs.statSync(filePath);
    const type = stats.isDirectory() ? '📁' : '📄';
    console.log(`  ${type} ${file}`);
  });
} catch (error) {
  console.error('❌ Error reading build directory:', error.message);
}

console.log('\n✅ Post-build script completed!');
