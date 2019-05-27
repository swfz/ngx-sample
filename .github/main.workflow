workflow "RunCircleCIOnPullRequest" {
  on = "pull_request"
  resolves = ["shell"]
}

action "shell" {
  uses = "./docker/jq"
  args = ["cat /github/workflow/event.json | jq '.pull_request.head.ref' | xargs -i echo {}"]
  secrets = ["HOGE_TOKEN"]
}
