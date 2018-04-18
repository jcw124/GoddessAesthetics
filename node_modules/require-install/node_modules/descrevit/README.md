# Descrevit[*](https://translate.google.com/#en/la/synchronous)

Sometimes methods in Node require async operations and have no sync variants. Using this function we can make this sync and keep our code clean.

Thanks to [@abbr](https://github.com/abbr) for providing [deasync](https://github.com/abbr/deasync)

## Installation
Local
```bash
npm install --save descrevit
```
or global
```bash
npm install -g descrevit
```

## Usage
Where `yourAsyncMethod` is your asynchronous operation
```javascript
var sync = require('descrevit');

console.log('starting');

sync.do(function(){
    yourAsyncMethod(function(){
        console.log('operation done');
        sync.done();
    });
});

console.log('end');
```

## Example
```javascript
var sync = require('descrevit');

console.log('starting');

sync.do(function(){
    setTimeout(function(){
        console.log('timeout done');
        sync.done();
    }, 1000);
});

console.log('end');
```

## License
Copyright (c) 2015 Maikel Vlasman

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.