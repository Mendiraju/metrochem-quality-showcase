#!/bin/sh
# The site is plain static files — there is nothing to compile.
# This only copies the site into dist/, which is where the preview/publish
# deployer expects to find the files it serves. GitHub Pages serves the
# files straight from the repository root and does not use dist/ at all.
set -e
rm -rf dist
mkdir -p dist
cp index.html dist/
cp -r css js assets dist/
cp robots.txt CNAME dist/
echo "Static site copied to dist/ — nothing was built."
