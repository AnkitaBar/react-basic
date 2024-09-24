import React from "react";
import NoteContex from "./NoteContext";
const Notestate = (props) => {
  const state = {
    name: "Ankita",
    email: "mail : ankita@gmail.com",
    phone: "9123326497",
  };
  return (
    <>
      <NoteContex.Provider value={state}>{props.children}</NoteContex.Provider>
    </>
  );
};

export default Notestate;
