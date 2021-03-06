var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.stat('./cat.jpg', function(err, stats){
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue)
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});

fs.readdir('./', 'utf-8', function(err, files) {
    console.log('Lista plików przed zapisem'.green);
    console.log(files);
    fs.writeFile('./listFiles.txt', files, function(err){
        if (err) throw err;
        console.log('Zapisano!'.green);
        fs.readFile('./listFiles.txt', 'utf-8', function(err, data) {
            console.log('Lista plików po zapisie'.green);
            console.log(data);
        });
    });
}); 