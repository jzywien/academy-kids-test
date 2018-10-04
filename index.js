const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const results = {
  results: [{id: 1, name: 'test'}, {id: 2, name: 'test2'}]
};

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));
app.get('/db', (req, res) => res.render('pages/db', results ));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
