#!/bin/bash

artifact_url_base="https://${CIRCLE_BUILD_NUM}-${REPO_ID}-gh.circle-artifacts.com/0/"
pr_number=$(echo ${CI_PULL_REQUEST} | awk -F/ '{print $(NF-0)}')

# stateがfailedでmessageに'images are different'というメッセージが含まれるもののdiffスクリーンショット
failed_diff_images=$(cat mochawesome.json \
  | jq -r '.suites.suites[].tests[]|select(.state=="failed")|(.context|fromjson.value.filename)+"/"+(.err.message|gsub("Error: ";"")|gsub(" images are different";"")+"-diff.png")' \
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
