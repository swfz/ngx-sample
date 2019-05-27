workflow "RunCircleCIOnPullRequest" {
#  on = "pull_request"
  on = "push"
  resolves = ["shell"]
}

action "shell" {
  uses = "actions/bin/sh@master"
  args = ["cat /github/workflow/event.json | jq"]
}
