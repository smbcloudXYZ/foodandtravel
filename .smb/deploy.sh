#!/bin/bash

echo "------------------------  STARTING DEPLOYMENT  ------------------------"

# Check if the first argument is a directory
if [ ! -d "$1" ]
then
    echo "😩 $1 is not a directory."
    echo "🛑 Deployment failed."
    exit 1
fi

# Change to working directory
cd $1

source ~/.profile
echo "Setup Node.js"
nvm use
echo "Start Food and Travel"
pm2 start "pnpm start-foodandtravel"

echo "------------------------  DEPLOYED  ------------------------"