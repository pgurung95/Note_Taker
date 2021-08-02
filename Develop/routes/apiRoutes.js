let notes = require('../db/db.json');

module.exports = (app) => { 
  app.get('/api/notes', (req, res) => res.json(notes));

  app.post('/api/notes', (req, res) => {
    notes.push(req.body);
    res.json(true);
  });

  app.delete('/api/notes/:id', (req, res) => {
    console.log(req.params.id)
    notes = notes.filter(note => req.params.id != note.id);
    res.json(notes);
  })
}