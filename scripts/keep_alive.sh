#!/bin/bash

while true; do
  curl http://192.168.27.14:11434/api/embeddings -d '{"model": "nomic-embed-text", "keep_alive": -1}'
  curl http://192.168.27.14:11434/api/generate -d '{"model": "neural-chat", "keep_alive": -1}'
  sleep 180 # Wait for 3 minutes (180 seconds)
done
