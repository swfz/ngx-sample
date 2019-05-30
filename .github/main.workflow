workflow "RunCircleCIOnPush" {
  # on = "pull_request"
  on = "push"
  resolves = ["kick-circleci-pipeline", "shell"]
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
