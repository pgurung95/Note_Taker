let notes = require('../db/db.json');
let counter = 0;

module.exports = (app) => { 
  app.get('/api/notes', (req, res) => res.json(notes));

  app.post('/api/notes', (req, res) => {
    const newNote = { 
      ...req.body, id: counter++
    }
    notes.push(newNote);
    res.json(true);
  });

  app.delete('/api/notes/:id', (req, res) => {
    console.log(req.params.id)
    notes = notes.filter(note => req.params.id != note.id);
    console.log(notes)
    res.json(notes);
  })
}
