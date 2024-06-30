import { useState } from "react";
import Name from "./components/Name";
import Surname from "./components/Surname";
import Email from "./components/Email";
import WorkButton from "./components/Work"
function Result({press}: {press: Function}) {
  const array: string[] = JSON.parse(sessionStorage.getItem("form")!)
  function reload() {
    press(false);
  };
  return (
    <>
    <div className="main changed">
      <div className="result">
        <h1>The result of your resume is: </h1>
        <h3>Name: <span>{array[0]}</span></h3>
        <h3>Surname: <span>{array[1]}</span></h3>
        <h3>Email: <span>{array[2]}</span></h3>
        <h3>About me:</h3>
        <p>{array[3]}</p>
        {array[4]?<h3>Previous job experience:</h3>: null}
        {array[4]?<p>{array[4]}</p>: null}
        <button onClick={reload}>Want to change something?</button>
      </div>

    </div>
    </>
  )
}
function App() {
  const [pressed, changePressed] = useState(false);
  function handleSubmit(event: any) {
    event.preventDefault()
    var array: string[] = [];
    for (let field of event.target) {
      array.push(field.value)
    }
    changePressed(true)
    sessionStorage.setItem("form", JSON.stringify(array))
  }
  if (pressed == false) {
  return (
    <>
      <div className="main">
        <h1>Welcome to your portfolio maker</h1>
        <h2>Please complete this form!</h2>
        <form onSubmit={handleSubmit}>
        <div className="info">
        <Name />
        <br />
        <Surname />
        <br />
        <Email />
        <br />
        </div>
        <label htmlFor="about">Tell a bit more about yourself:</label>
        <textarea id="about" rows={25} cols={60} spellCheck="true" name="about" required />
        <WorkButton />
        <button className="result" type="submit">Get result?</button>
        </form>
      
      </div>


    </>);
  }
  else {
    return (
      <>
        <Result press={changePressed} />
      </>
    )
  }
}

export default App;
