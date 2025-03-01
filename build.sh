#!/bin/sh
mkdir -p output

if [ -d "./dearbirdy" ]; then
  echo "📁 Found dearbirdy directory. Proceeding with rsync..."
  rsync -av --exclude='.git' ./dearbirdy/ ./output/
else
  echo "❌ Error: Source directory './dearbirdy' not found!"
  exit 1
fi

if [ "$(ls -A output)" ]; then
  echo "✅ Output directory is not empty. Proceeding with copy..."
  cp -R ./output/* ./dearbirdy/
else
  echo "❌ Error: Output directory is empty. Check rsync command."
  exit 1
fi