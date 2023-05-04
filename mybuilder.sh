#!/bin/bash

# npm run deploy

# npm run deploy -- -m "Deploy React app to GitHub Pages"

# git add .

# git commit -m 'commit with bash script'

# git push

npm run deploy

npm run deploy -- -m "Deploy React app to GitHub Pages"

git add .

if [ $# -eq 0 ]
  then
    git commit -m 'commit with bash script'
  else
    git commit -m "$1"
fi

git push


