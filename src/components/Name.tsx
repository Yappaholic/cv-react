import { useState } from "react";
function Name() {
  const [name, setName] = useState("John");
  function nameCheck() {
    const regExp = / \w/;
    if (name.match(regExp)) {
      return true 
    }
  }
  return (
    <>
      <label htmlFor="name">Your name: </label>
      <input id="name" onChange={(e) => { setName(e.target.value) }} placeholder={name} required name="name" />
      {nameCheck() ? <p style={{color: "white", margin:0, padding: 0, gap: 0, textAlign:"center"}}>No "titles" in the name!</p> : null}
    </>
  )
}

export default Name
