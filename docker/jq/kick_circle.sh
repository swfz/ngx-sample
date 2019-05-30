#!/bin/sh

branch=$(cat /github/workflow/event.json | jq '.ref')
revision=$(cat /github/workflow/event.json | jq '.head_commit.id')
echo $branch
echo $revision

curl -u $CIRCLE_TOKEN: \
     -X POST \
     --header "Content-Type: application/json" \
     -d "{\"branch\": \"${branch}\", \"revision\": \"${revision}\"}" \
     "https://circleci.com/api/v1.1/project/github/swfz/ngx-sample/build"

