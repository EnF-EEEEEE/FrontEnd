#!/bin/sh
mkdir -p output
rsync -av --exclude='.git' ./FrontEnd/ ./output/
cp -R ./output/* ./FrontEnd/
