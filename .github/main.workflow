workflow "RunCircleCIOnPullRequest" {
  on = "pull_request"
  resolves = ["shell"]
}

action "shell" {
  uses = "./docker/jq"
  args = ["sh /kick_circle.sh"]
  secrets = ["HOGE_TOKEN"]
}
