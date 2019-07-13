#!/bin/bash

artifact_url_base="https://circle-artifacts.com/gh/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}/${CIRCLE_BUILD_NUM}/artifacts/0/"
pr_number=$(echo ${CI_PULL_REQUEST} | awk -F/ '{print $(NF-0)}')

# stateがfailedでmessageに'images are different'というメッセージが含まれるもののdiffスクリーンショット
failed_diff_images=$(cat mochawesome.json \
  | jq '.suites.suites[]|select(.tests[].state=="failed")|(.title|gsub(" ";"-"))+".ts/"+(.tests[]|select(.state=="failed" and (.err|has("message")) and (.err.message|match("images are different"))).title|gsub(" ";"-"))+"-diff.png"' \
  | xargs -i echo "- {} \n ![{}](${artifact_url_base}cypress-snapshots/diff/{})\n"
)

comment_body=$(cat <<EOS
Cypress Test Failed. \n
See Summary Report. \n
[cypress-html/mochawesome.html](${artifact_url_base}/cypress-html/mochawesome.html) \n
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
