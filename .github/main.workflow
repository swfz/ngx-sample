workflow "RunCircleCIOnPullRequest" {
#  on = "pull_request"
  on = "push"
  resolves = ["shell"]
}

action "shell" {
  uses = "./docker/jq"
  args = ["cat /github/workflow/event.json | jq"]
}
