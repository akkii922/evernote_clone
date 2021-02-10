const NoteReducer = (state, action) => {
    let draftNotes = [...state];
    switch (action.type) {
        case 'getAllNotesSuccess':
            return action.payload;
        case 'createNoteSuccess':
            draftNotes.unshift(action.payload);
            return draftNotes;
        case 'updateNoteSuccess':
            let index = state.findIndex(item => item._id === action.id);
            draftNotes[index] = { ...draftNotes[index], ...action.payload };
            return draftNotes;
        case 'archiveNoteSuccess':
            return draftNotes.filter((item) => item._id !== action.id);
        case 'deleteNoteSuccess':
            return draftNotes.filter((item) => item._id !== action.id);
        default:
            return state;
    }
}

export default NoteReducer;