const fs = require('fs');


// replace file contents
function replace(filePath,regarr,escape) {
  return new Promise((resolve,reject) => {
    let content = fs.readFileSync(filePath, {
      encoding: 'utf-8'
    });
    return resolve(content);
  }).then((content) => {
      regarr.forEach((regObj) => {
        content = content.replace(regObj.rule, function () {
          if(!escape) {
            return regObj.scripts;  
          }
          
          return regObj.scripts.replace(/\\/g,'\\\\');
        });  
      })
      return fs.writeFileSync(filePath,content);
  })
}


module.exports = {
  replace: replace,
}