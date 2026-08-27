import React from 'react'

export default function Textform(props) {
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
  <label for="exampleFormControlTextarea1" className="form-label">  Write Below...</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary">Convert into Uppercase</button>
    </div>
  )
}
