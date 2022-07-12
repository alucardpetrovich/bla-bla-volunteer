const path = require('path');
const { sync: glob } = require('glob');
const fs = require('fs');

const localeDir = path.join(process.cwd(), 'src/locale');

const t = {};

glob(path.join(localeDir, '*.json').replace(/\\/g, '/'))
  .filter(filename => !filename.endsWith('list.json'))
  .forEach(filename => {
    const fileNameArr = filename.split('/');
    t[fileNameArr[fileNameArr.length - 1].split('.')[0]] = require(filename);
    fs.unlinkSync(filename);
  });

fs.writeFileSync(`src/locale/list.json`, JSON.stringify(t));
