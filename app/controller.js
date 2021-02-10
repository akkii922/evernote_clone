const { createNote, fetchAllNotes, updateNote, deleteNote } = require('./model');
const { getTime } = require('./helper');

exports.createNewNote = async (req, res) => {
    try {
        let currentTime = getTime();
        let newNote = {
            title: 'Untitled',
            desc: '',
            createdAt: currentTime,
            updatedAt: currentTime,
            archive: 0
        }
        let id = await createNote(newNote);
        newNote['_id'] = id;
        res.status(200).send(newNote);
    }
    catch (ex) {
        res.status(400).send(ex.message)
    }
}

exports.getAllNotes = async (req, res) => {
    try {
        let query = {
            archive: 0
        };
        if (req.params.type == 'trash') {
            query.archive = 1;
        }
        let data = await fetchAllNotes(query);
        res.status(200).send(data);
    }
    catch (ex) {
        res.status(400).send(ex.message)
    }
}

exports.updateNoteById = async (req, res) => {
    try {
        let currentTime = getTime();
        let query = {
            ...req.body,
            updatedAt: currentTime
        }
        await updateNote(req.params.id, query);
        res.status(200).send(query);
    }
    catch (ex) {
        res.status(400).send(ex.message)
    }
}

exports.deleteNote = async (req, res) => {
    try {
        const id = req.params.id;
        await deleteNote(id);
        res.status(200).send(id);
    }
    catch (ex) {
        res.status(400).send(ex.message)
    }
}