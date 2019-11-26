import React from 'react'
import './style.scss'

function Header(props) {
  return (
    <div className="header">
      <p> {props.brand} </p>
    </div>
  );
}

export default Header;