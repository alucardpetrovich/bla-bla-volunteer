#!/bin/bash

yarn formatjs compile-folder --ast "src/i18n" "src/locale" && rm -f "src/locale/messages.json"
