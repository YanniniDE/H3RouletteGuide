#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# handle 404 on reload of page by copying index.html into 404.html
cp index.html 404.html

# create CNAME for custom domain
# echo 'ENTER URL HERE' > CNAME

# if you are deploying to a custom domain

git init
git add -A
git commit -m 'deploy new version'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:YanniniDE/H3RouletteGuide.git master:gh-pages

cd -

sleep 5s