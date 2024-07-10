import React from 'react'
import ReactDOM from 'react-dom'
const name = "Ali";
const date = new Date();
const attr = {
  color: 'lightGreen' ,
  fontSize : '30px'
}
ReactDOM.render(<div>
  <h1>Hello to {name} </h1> 
  <p style={attr} contentEditable = 'true' spellCheck = 'false' > It is life do not be so sad just enjoy from it that is exactly life</p>
  <p>your lucky number is {Math.floor(Math.random()*10) }</p>
  <p>The year is {date.getFullYear()}</p>
<img src="" alt=""/>
  
  </div> 
  , document.getElementById('root'))


