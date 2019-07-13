#!/bin/bash

artifact_url_base="https://circle-artifacts.com/gh/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}/${CIRCLE_BUILD_NUM}/artifacts/0/"
pr_number=$(echo ${CI_PULL_REQUEST} | awk -F/ '{print $(NF-0)}')

# stateがfailedでmessageに'images are different'というメッセージが含まれるもののdiffスクリーンショット
failed_diff_images=$(cat mochawesome.json \
  | jq -r '.suites.suites[]|select(.tests[].state=="failed").tests[]|select(.state=="failed" and (.err|has("message")) and (.err.message|match("images are different"))).fullTitle' \
  | awk '{print "cypress-snapshots/diff/" $1 ".ts/" $2 "-diff.png"}' \
  | xargs -i echo "![{}](${artifact_url_base}{})"
)

comment_body=$(cat <<EOS
Cypress Test Failed. \n
See Summary Report. \n
${artifact_url_base}/cypress-html/mochawesome.html \n
${failed_diff_images}
EOS
)

comment=$(curl -v -XPOST \
  https://api.github.com/repos/swfz/ngx-sample/issues/${pr_number}/comments \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  -H "Content-Type: application/json" \
  -d @- <<EOS
{
  "body": "${comment_body}"
}
EOS
)
