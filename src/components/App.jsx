import React, { useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import notes from "../notes";

// function createNotes(noteItem) {
//   return (
//     <Note
//       key={noteItem.key}
//       title={noteItem.title}
//       content={noteItem.content}
//     />
//   );
// }

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNotes) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNotes];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      {/* {CreateArea.map(createNotes)} */}
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
