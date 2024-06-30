import { useState } from "react";
function Work() {
  return (
    <>
    <label htmlFor="job" >Describe your work experience:</label>
    <textarea id="job" rows={25} cols={60} spellCheck="true" required name="job" />
    </>
  )
}
function WorkButton() {
  const [clicked, changeClick] = useState(false)
  return (
    <>
      {clicked == false ? <button type="button" onClick={() => {changeClick(true)}}>Add working experience</button>: null}
      {clicked ? <Work/>:null}
    </>
  )
}
export default WorkButton
