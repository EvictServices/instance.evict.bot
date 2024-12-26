#!/bin/bash

docker network create bot_network 2>/dev/null || true

docker build -t instance-manager .
docker run -d \
    --name instance-manager \
    -p 8080:8080 \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /instances:/instances \
    -e API_KEY="t76oev5UkeMyo8XQwv5Ozwo3amVsi" \
    --network bot_network \
    instance-manager
