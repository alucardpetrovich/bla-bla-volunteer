#!/bin/bash

yarn formatjs extract "src/**/!(*.d).ts*" --out-file "src/i18n/messages.json" \
  && yarn prettier --write "src/i18n/messages.json"
