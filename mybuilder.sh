#!/bin/bash

npm run deploy

npm run deploy -- -m "Deploy React app to GitHub Pages"

git add .

git commit -m 'commit with bash script'

git push

