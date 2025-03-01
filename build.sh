#!/bin/sh
mkdir -p output
rsync -av --exclude='.git' ./output/
cp -R ./output/* ./dearbirdy/