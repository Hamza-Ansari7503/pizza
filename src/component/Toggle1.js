import React, { useState } from 'react'
import {  FaUserCircle } from "react-icons/fa";


const LogicalNot = () => {

  //Using Inline Function and the The Logical Not (!) to toggle state
  const [toggle, setToggle] = useState(true)

  return (
    <>
      <button 
            onClick={() => setToggle(!toggle)} 
            class="btn btn-primary mb-5">
          <FaUserCircle />
      </button>
      {toggle && (
        <ul class="list-group">
          <a href="/">Login</a>
          <a href="/">Signin</a>
        </ul>
      )}
    </>
  )
}
export default LogicalNot