#!/bin/sh -x

branch=$(cat /github/workflow/event.json | jq '.pull_request.head.ref')

echo $branch
echo $HOGE_TOKEN

curl -v -u $CIRCLE_TOKEN: -X POST -d \'{"branch": "${branch}"}\' "https://circleci.com/api/v1.1/project/github/swfz/ngx-sample/build"
