#!/usr/bin/node

const path = require('path');
const fs = require('fs');
const { sync: glob } = require('glob');
const { pick } = require('lodash');

const localeDir = path.join(process.cwd(), 'src/i18n');

const defaultMessages = require(path.join(localeDir, 'messages.json'));
const messages = Object.entries(defaultMessages);

glob(path.join(localeDir, '*.json'))
  .filter(filename => !filename.endsWith('messages.json'))
  .forEach(filename => {
    const translations = pick(require(filename), Object.keys(defaultMessages));

    messages.forEach(([key, translation]) => {
      const prefix = filename.endsWith('uk.json') ? '' : '[uk]: ';

      translations[key] = translations[key] || {
        ...translation,
        defaultMessage: `${prefix}${translation.defaultMessage}`,
      };
    });

    fs.writeFileSync(filename, JSON.stringify(translations, undefined, 2));
  });
