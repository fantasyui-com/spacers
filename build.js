const fs = require('fs');
const postcss = require('postcss');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

fs.readFile('src/spacers.css', (err, css) => {
  postcss([precss, autoprefixer])
    .process(css, { from: 'src/spacers.css', to: 'dist/spacers.css' })
    .then(result => {
      fs.writeFile('dist/spacers.css', result.css);
      if ( result.map ) fs.writeFile('dist/spacers.css.map', result.map);
    });
});
