FROM ubuntu:latest

LABEL "name"="jq"
LABEL "com.github.actions.name"="Shell(jq) for GitHub Actions"
LABEL "com.github.actions.description"="Runs one or more commands in an Action"
LABEL "com.github.actions.icon"="terminal"
LABEL "com.github.actions.color"="blue"

RUN apt-get update
RUN apt-get -y install curl
RUN curl -o /usr/bin/jq -L https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 && chmod +x /usr/bin/jq

COPY entrypoint.sh /entrypoint.sh
COPY kick_circle.sh /kick_circle.sh

ENTRYPOINT ["/entrypoint.sh"]
