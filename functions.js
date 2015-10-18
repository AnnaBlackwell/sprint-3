1. Cube

function cube (x) {
return (x*x*x)
}

> cube(4)    // returns 64

2. Absolute

> function absolute (x) {
...   if (x>0) {
.....     return (x)
.....   } else {
.....     return (x*-1)
.....   }
... }

> absolute(7)   // returns 7
> absolute(-3)    // returns 3

3. Names

var names = ['Bill', 'Carl', 'Kat', 'Emil', 'Cath']
> function printNames (names) {
... console.log(names + 'y')
... }

> names.forEach(printNames)   // returns Billy Carly Cathy Emily Katy

4. Make Kia Ora

function makeKiaOra (name) {
... return ('Kia Ora' + ' ' + name);
... }

var name = 'Anna'

makeKiaOra (name)     // returns 'Kia Ora Anna'

5. Make Since

var since = (new Date)

> since   // returns Sun Oct 18 2015 15:47:02 GMT+1300 (NZDT)

function makeSince(d) {
  return (new Date() - since);
  since = since + makeSince;
}

var since = makeSince(new Date())

    // this is wrong, but I tried!
