const searchBox = document.querySelector("#search-input")
const title = document.querySelector("#note-title")
const Textarea = document.querySelector("#note-content")
const saveBtn = document.querySelector("button")
const notesCon = document.querySelector("#notes-container")

function loadNotes() {
    let notes;
    const writtenNotes = localStorage.getItem("notes");
    if (writtenNotes) {
        notes = JSON.parse(writtenNotes);
    }
    else {
        notes = [];
    }
    renderNotes(notes)
    console.log(notes)
}

loadNotes()

saveBtn.addEventListener("click", () => {
    const noteTitle = title.value;
    const noteContent = Textarea.value;

    if (!noteTitle || !noteContent) {
        alert("Please fill in both fields");
        return;
    }

    const newNote = {
        title: noteTitle,
        content: noteContent
    };

    let saving = JSON.parse(localStorage.getItem("notes")) || [];
    saving.push(newNote);
    localStorage.setItem("notes", JSON.stringify(saving));
    renderNotes(saving)
});

function renderNotes(notes) {
    notesCon.innerHTML = ""
    notes.forEach(function (note) {
        const newDiv = document.createElement("div");
        newDiv.textContent = note.title
        notesCon.append(newDiv)
    });

    
}