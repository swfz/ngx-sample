FROM debian:stable-slim

LABEL "name"="jq"
LABEL "com.github.actions.name"="Shell(jq) for GitHub Actions"
LABEL "com.github.actions.description"="Runs one or more commands in an Action"
LABEL "com.github.actions.icon"="terminal"
LABEL "com.github.actions.color"="blue"

RUN apt-get install jq

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
