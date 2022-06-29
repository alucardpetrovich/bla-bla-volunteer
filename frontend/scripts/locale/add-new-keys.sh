#!/bin/bash

CURRENT_DIR=`dirname "$0"`

$CURRENT_DIR/extract-messages.sh \
  && node ./scripts/locale/add-new-keys.js \
  && yarn prettier --write "src/i18n/*.json"
