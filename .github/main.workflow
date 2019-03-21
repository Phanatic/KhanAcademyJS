workflow "delete branch on PR merge" {
  on = "pull_request"
  resolves = ["Delete remote branch"]
}

action "PR Merged?" {
  uses = "actions/bin/filter@d820d56839906464fb7a57d1b4e1741cf5183efa"
  runs = "jq  -r .merged /github/workflow/event.json | grep true"
}

action "Delete remote branch" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["PR Merged?"]
  runs = "git"
  args = "push origin --delete $(echo $GITHUB_REF | cut -d \"/\" -f3)"
}
