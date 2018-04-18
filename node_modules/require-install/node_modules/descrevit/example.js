var sync = require('./index.js');
console.log('starting');

sync.do(function(){
    setTimeout(function(){
        console.log('timeout done');
        sync.done();
    }, 1000);
});

console.log('end');