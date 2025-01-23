import React from "react"
import "./ErrorMessage.css"

function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <strong>Error: </strong>
      <span>{message}</span>
    </div>
  )
}

export default ErrorMessage

