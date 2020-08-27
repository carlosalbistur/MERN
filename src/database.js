const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-tasks';

/*mongoose.set ('useFindAndModify', true); 
mongoose.set ('useCreateIndex', true); */

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(URI, {useNewUrlParser: true})
        .then(db => console.log('DB is connected'))
        .catch(err => console.error(err));

module.exports = mongoose;