workflow "delete branch on PR merge" {
  on = "pull_request"
  resolves = ["Delete remote branch"]
}

action "PR Merged?" {
  uses = "actions/bin/filter@d820d56839906464fb7a57d1b4e1741cf5183efa"
  args = "action closed"
}

action "Delete remote branch" {
  uses = "swinton/httpie.action@8ab0a0e926d091e0444fcacd5eb679d2e2d4ab3d"
  needs = ["PR Merged?"]
  args = "[\"DELETE\", \"https://api.github.com/repos/$GITHUB_REPOSITORY/git/$GITHUB_REF\"]"
}
