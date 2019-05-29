#!/bin/sh

branch=$(cat /github/workflow/event.json | jq '.pull_request.head.ref')

curl -u $CIRCLE_TOKEN: \
     -X POST \
     --header "Content-Type: application/json" \
     -d "{\"branch\": \"${branch}\"}" \
     "https://circleci.com/api/v1.1/project/github/swfz/ngx-sample/build"

