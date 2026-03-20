const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'app/build/page.tsx',
  'app/corporate/page.tsx',
  'app/globals.css',
  'app/investors/page.tsx',
  'app/layout.tsx',
  'app/page.tsx',
  'app/privacy/page.tsx',
  'app/scale/page.tsx',
  'app/startups/page.tsx',
  'app/team/page.tsx',
  'app/terms/page.tsx',
  'components/Footer.tsx',
  'components/Navbar.tsx',
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Layout
    if (file === 'app/layout.tsx') {
      content = content.replace('bg-navy text-warm-white', 'bg-warm-white text-navy');
      content = content.replace('selection:bg-brand selection:text-white', 'selection:bg-brand selection:text-warm-white');
    }

    // Invert "What We Do" section in page.tsx before global text replacements
    if (file === 'app/page.tsx') {
      content = content.replace('bg-warm-white text-navy', 'bg-navy text-warm-white-temp');
    }

    // Global text replacements
    content = content.replace(/text-warm-white\/70/g, 'text-grey');
    content = content.replace(/text-warm-white\/80/g, 'text-navy/80');
    content = content.replace(/text-warm-white\/50/g, 'text-grey/80');
    content = content.replace(/text-warm-white\/40/g, 'text-grey/60');
    content = content.replace(/text-warm-white/g, 'text-navy');
    
    // Restore the temp text color for the inverted section
    if (file === 'app/page.tsx') {
      content = content.replace(/text-warm-white-temp/g, 'text-warm-white');
    }

    // Backgrounds
    content = content.replace(/bg-warm-white\/5/g, 'bg-white');
    content = content.replace(/bg-warm-white\/10/g, 'bg-white/80');
    content = content.replace(/bg-warm-white\/50/g, 'bg-white/50');
    
    // Gradients
    content = content.replace(/from-warm-white to-warm-white\/50/g, 'from-navy to-navy/70');
    content = content.replace(/from-navy to-transparent/g, 'from-warm-white to-transparent');
    content = content.replace(/bg-\[linear-gradient\(to_top,rgba\(11,31,59,1\)_0%,transparent_100%\)\]/g, 'bg-[linear-gradient(to_top,rgba(247,247,245,1)_0%,transparent_100%)]');

    // Fix button text colors
    content = content.replace(/bg-brand text-navy/g, 'bg-brand text-warm-white');
    content = content.replace(/bg-navy text-navy/g, 'bg-navy text-warm-white');
    
    // Navbar specific
    if (file === 'components/Navbar.tsx') {
      content = content.replace(/bg-navy\/80/g, 'bg-warm-white/80');
      content = content.replace(/bg-navy/g, 'bg-warm-white');
      content = content.replace(/text-grey hover:text-brand/g, 'text-grey hover:text-navy');
      content = content.replace(/text-navy hover:text-brand/g, 'text-navy hover:text-brand');
    }
    
    // Footer specific
    if (file === 'components/Footer.tsx') {
      content = content.replace(/bg-navy/g, 'bg-warm-white');
      content = content.replace(/border-grey\/40/g, 'border-grey/20');
    }

    // Fix inputs in page.tsx
    if (file === 'app/page.tsx') {
      content = content.replace(/text-navy focus:outline-none focus:border-brand/g, 'text-navy focus:outline-none focus:border-brand bg-white border-grey/40');
    }

    fs.writeFileSync(filePath, content, 'utf8');
  }
});
