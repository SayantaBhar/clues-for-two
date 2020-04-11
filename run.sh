#!/bin/sh
docker run --detach --restart=unless-stopped --publish 127.0.0.1:8051:8051 codenames-plus_codenames
