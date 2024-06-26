import { useState } from "react";
import "./App.css";
interface Err {
  errMsg: string
}
function Error(props: Err) {
    const [error, setError] = useState("")
    if (props.errMsg === "name") {
      setError("Please write only one name")
      return <p>{error}</p>

    }
}
function App() {
  const [name, setName] = useState("John");
  const [surname, setSurname] = useState("Doom");
  const [email, setEmail] = useState("myemail@host.com")
  function nameCheck(str: string) {
    if (str.endsWith(" "))  {
      <Error errMsg={"name"}/>
    } else {
      setName(str)
    }
  }
  function surnameCheck(str: string) {
    if (str.includes(" "))  {
      <Error errMsg={"surname"}/>
    } else {
      setSurname(str)
    }
  }

  return (
    <>
      <h1>Welcome to your portfolio maker</h1>
      <h2>Please complete this form to get a compelling result!</h2>
      <label htmlFor="name">Your name: </label>
      <input id="name" onChange={(e) => {nameCheck(e.target.value)}} placeholder={name}/>
      <br/>
      <label htmlFor="surname">Your surname: </label>
      <input id="surname" onChange={(e) => {surnameCheck(e.target.value)}} placeholder={surname}/>
      <br/>
      <label htmlFor="email">Your email: </label>
      <input id="email" type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder={email}/>

    </>);
}

export default App;
