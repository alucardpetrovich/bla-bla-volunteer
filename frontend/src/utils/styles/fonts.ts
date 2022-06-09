import { createGlobalStyle } from 'styled-components';

const GlobalFonts = createGlobalStyle`
/* inter-regular - latin_cyrillic-ext_cyrillic */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-regular.svg#Inter') format('svg'); /* Legacy iOS */
}
/* inter-700 - latin_cyrillic-ext_cyrillic */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src: url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-700.woff') format('woff'), /* Modern Browsers */
       url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-700.svg#Inter') format('svg'); /* Legacy iOS */
}
/* inter-900 - latin_cyrillic-ext_cyrillic */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  src: url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-900.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-900.woff') format('woff'), /* Modern Browsers */
       url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/inter-v11-latin_cyrillic-ext_cyrillic-900.svg#Inter') format('svg'); /* Legacy iOS */
}

/* roboto-regular - latin_cyrillic-ext_cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/roboto-v30-latin_cyrillic-ext_cyrillic-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v30-latin_cyrillic-ext_cyrillic-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v30-latin_cyrillic-ext_cyrillic-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v30-latin_cyrillic-ext_cyrillic-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v30-latin_cyrillic-ext_cyrillic-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v30-latin_cyrillic-ext_cyrillic-regular.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-500 - latin_cyrillic-ext_cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/roboto-v30-latin_cyrillic-ext_cyrillic-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v30-latin_cyrillic-ext_cyrillic-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v30-latin_cyrillic-ext_cyrillic-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v30-latin_cyrillic-ext_cyrillic-500.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v30-latin_cyrillic-ext_cyrillic-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v30-latin_cyrillic-ext_cyrillic-500.svg#Roboto') format('svg'); /* Legacy iOS */
}`;

export default GlobalFonts;
