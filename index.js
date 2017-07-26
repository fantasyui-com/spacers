const fs = require('fs');
const path = require('path');
module.exports = {

  readFile: function(){
    const data = fs.readFileSync(path.join(__dirname, 'dist', `spacers.css`));
    return data;
  },

  writeFile: function(target){
    const data = fs.readFileSync(path.join(__dirname, 'dist', `spacers.css`));
    fs.writeFile(target, data);
  }

}
