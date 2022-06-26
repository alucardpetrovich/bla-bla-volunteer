const path = require('path');
const { sync: glob } = require('glob');
const fs = require('fs');

const localeDir = path.join(process.cwd(), 'src/locale');

const t = {};

glob(path.join(localeDir, '*.json'))
  .filter(filename => !filename.endsWith('messages.json'))
  .forEach(filename => {
    const fileNameArr = filename.split('/');
    t[fileNameArr[fileNameArr.length - 1].split('.')[0]] = require(filename);
  });

fs.writeFileSync(`src/locale/list.json`, JSON.stringify(t));
