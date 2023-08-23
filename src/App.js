import logo from './logo.svg';
import './App.css';

import json from './data/examp.json'
import { useEffect, useState } from 'react';

function App() {
  
  console.log(json)


  const tree = []

  function createListItem(id, lvl, text) {    
    return <li style={{marginLeft: `${lvl*30}px`}} key={id}>{text}</li>;
  }


  const getFileStruct = (data, lvl=0) => {
    if(data.type != "directory") return;

    // console.log(lvl, ': ', data.type, data.name, data.contents.length)
    const listEl = {id: tree.length, level: lvl, text: `${data.name} (${data.contents.length})`}

    tree.push(listEl)
    
    if(data.contents) data.contents.forEach(elem => { getFileStruct(elem, lvl+1) });
    return;
  }    
  getFileStruct(json[0])
  console.log(tree[tree.length-1])
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <ul style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        {tree.map(node => createListItem(node.id, node.level, node.text))}
      </ul>
    </div>
  );
}

export default App;
