const controller = require('./controller');

module.exports = (app) => {
    app.post('/api/note', controller.createNewNote);
    app.get('/api/notes/:type', controller.getAllNotes);
    // app.get('/api/note/:id', controller.getNote);
    app.put('/api/note/:id', controller.updateNoteById);
    app.delete('/api/note/:id', controller.deleteNote);
};