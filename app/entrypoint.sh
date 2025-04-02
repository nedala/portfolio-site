#!/bin/sh

# Ensure dependencies are installed
if [ ! -d "node_modules" ]; then
  echo "📦 Installing npm dependencies..."
  npm install
else
  echo "✅ node_modules already exists, skipping install"
fi

# Run the main container command
exec "$@"
