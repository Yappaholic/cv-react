import { useState } from "react";
function Surname() {
  
  const [surname, setSurname] = useState("Doom");
  function surnameCheck() {
    const regExp = / \w/;
    if (surname.match(regExp)) {
      return true 
    }
  }
  return (
    <>
      <label htmlFor="surname">Your surname: </label>
      <input id="surname" onChange={(e) => { setSurname(e.target.value) }} placeholder={surname} required name="surname" />
      {surnameCheck() ? <p style={{color: "white", margin:0, padding: 0, gap: 0,textAlign:"center"}}>No double surnames.</p> : null}    
    </>
  )
}

export default Surname
