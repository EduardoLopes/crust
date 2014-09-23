#!/bin/bash

echo "Deleting things..."
rm -rf .git
rm README.md
rm LICENSE.md
rm crust.sh
echo "Things deleted."
npm install
git init
