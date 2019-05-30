#!/bin/sh

branch=$(cat /github/workflow/event.json | jq '.ref' | sed 's/refs\/heads\///')
revision=$(cat /github/workflow/event.json | jq '.head_commit.id')
echo '--'
echo $branch
echo $revision
echo '--'

curl -q -u $CIRCLE_TOKEN: \
     -X POST \
     --header "Content-Type: application/json" \
     -d "{\"branch\": ${branch},\"revision\": ${revision}}" \
     "https://circleci.com/api/v1.1/project/github/swfz/ngx-sample/build"

