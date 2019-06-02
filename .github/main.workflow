workflow "RunCircleCIOnPush" {
  on = "pull_request"
  resolves = ["shell"]
}

action "kick-circleci-pipeline" {
  uses = "./docker/jq"
  args = ["sh -x /kick_circle.sh"]
  secrets = [
    "HOGE_TOKEN",
    "CIRCLE_TOKEN",
  ]
}

action "shell" {
  uses = "actions/bin/sh@master"
  args = ["cat /github/workflow/event.json"]
}
