#!/bin/bash
# Optimize images for web - run: ./scripts/optimize-images.sh
# Requires: ImageMagick (brew install imagemagick) or similar

set -e
cd "$(dirname "$0")/.."

echo "Image optimization script"
echo "Current sizes:"
ls -lh src/assets/*.png src/assets/*.jpg public/*.png public/*.jpg 2>/dev/null || true

# Create optimized logo (32x32 for header) if ImageMagick available
if command -v convert &>/dev/null; then
  echo "Creating optimized logo-32.png..."
  convert src/assets/logo.png -resize 32x32 -quality 85 public/logo-32.png 2>/dev/null || true
  echo "Created public/logo-32.png"
fi

echo "Done. Consider:"
echo "  - Use logo-32.png in Layout (update src) for faster header load"
echo "  - Compress hero-bg.jpg: convert hero-bg.jpg -quality 80 -resize 1920x hero-bg-opt.jpg"
echo "  - Replace favicon.png (1.5MB) with favicon.ico (20KB) in index.html"
