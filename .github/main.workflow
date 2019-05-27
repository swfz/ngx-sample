workflow "RunCircleCIOnPullRequest" {
  on = "pull_request"
  resolves = ["shell"]
}

action "shell" {
  uses = "./docker/jq"
  args = ["cat /github/workflow/event.json | jq '.pull_request.head.ref' | xargs -i echo '$HOGE_TOKEN {}'"]
  secrets = [
    "HOGE_TOKEN",
    "CIRCLE_TOKEN",
  ]
}
