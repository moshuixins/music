const fs = require('fs');
const path = require('path');

let list = [];

fs.readdir(path.join(__dirname, './resources'), (err, files) => {
    if (err) {
        console.log(err);
    } else {
        files.forEach(file => {
            list.push({
                name: file,
            });
        });
        fs.writeFile(path.join(__dirname, './resourcesJson/music.json'), JSON.stringify(list), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('success');
            }
        });
    }
});