#!/bin/bash

rm -f "src/locale/list.json" && node ./scripts/locale/list.js && yarn prettier --write "src/locale/list.json"
