import { createGlobalStyle } from 'styled-components';

const GlobalFonts = createGlobalStyle`
/* nokora-regular - latin */
@font-face {
  font-family: 'Nokora';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/nokora-v30-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/nokora-v30-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/nokora-v30-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/nokora-v30-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/nokora-v30-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/nokora-v30-latin-regular.svg#Nokora') format('svg'); /* Legacy iOS */
}
/* nokora-900 - latin */
@font-face {
  font-family: 'Nokora';
  font-style: normal;
  font-weight: 900;
  src: url('../fonts/nokora-v30-latin-900.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/nokora-v30-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/nokora-v30-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/nokora-v30-latin-900.woff') format('woff'), /* Modern Browsers */
       url('../fonts/nokora-v30-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/nokora-v30-latin-900.svg#Nokora') format('svg'); /* Legacy iOS */
}`;

export default GlobalFonts;
