workflow "RunCircleCIOnPullRequest" {
  on = "pull_request"
  resolves = ["shell"]
}

action "shell" {
  uses = "./docker/jq"
  args = ["cat /github/workflow/event.json | jq '.pull_request.head.ref' | xargs -i curl -u $HOGE_TOKEN: -X POST -d '{\"branch\": \"{}\"}' \"https://circleci.com/api/v1.1/project/github/swfz/ngx-sample/build\""]
  secrets = ["HOGE_TOKEN"]
}
