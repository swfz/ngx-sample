workflow "RunCircleCIOnPullRequest" {
  on = "pull_request"
  resolves = ["shell"]
}

action "shell" {
  uses = "actions/bin/sh@master"
  args = ["cat /github/workflow/event.json"]
}
