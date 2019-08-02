import React from 'react';

import './App.css';

import Header from './Header'
import Menu from './Menu'

let lenguajes = ["HTML", "CSS", "Java Script", "JSX", "React", "Node.js"]

class App extends React.Component {

  render(){
   return (
    <div className="App">
      
      <Header title= "Mi primer app con React" action="Mas info" link="https://reactjs.org" />
      <Menu links = {lenguajes}/>
    </div>
  )
}
}



export default App;
