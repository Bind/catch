const db = require('./db');

db.insert({
  email: 'douglasjbinder@gmail.com', 
  password: 'temp'
}).into('users')

.then(() => {
  console.log('seed date added');
})
.then(() => {
  return db.select('users.email').from('users');
})
.map((r) => {
  console.log(r);
})
.catch((e) => {
  console.log(e);
});

