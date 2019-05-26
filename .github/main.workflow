workflow "RunCircleCIOnPullRequest" {
  on = "pull_request"
  resolves = ["new-action"]
}

action "new-action" {
  uses = "owner/repo/path@ref"
}
