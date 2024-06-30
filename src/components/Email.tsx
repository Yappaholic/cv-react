import isEmail from "validator/lib/isEmail";
import { useState } from "react";

function Email() {
  const [email, setEmail] = useState("myemail@host.com")
  function emailCheck() {
    if (email === "") {
      return false
    }
    else if (isEmail(email) === false) {
      return true
    }
    return false
  }
  
  return (
    <>
      <label htmlFor="email">Your email: </label>
      <input id="email" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder={email} required name="email" autoComplete="email"/>
      {emailCheck() ? <p style={{color: "white", margin:0, padding: 0, gap: 0,textAlign:"center"}}>Is the email right?</p> : null}
    </>
  )
}
export default Email

