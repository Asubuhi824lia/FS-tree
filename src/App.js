import logo from './logo.svg';
import './App.css';

import json from './data/examp.json'
import { useMemo } from 'react';

function App() {
  
  console.log(json)

  function createListItem(id, lvl, text) {    
    return <li style={{marginLeft: `${lvl*30}px`}} key={id}>{text}</li>;
  }

  let count = 0;
  const getFileStruct = (data, lvl=0) => {
    if(data.type != "directory") return null;

    let struct = []
    const listEl = {id: count++, level: lvl, text: `${data.name} (${data.contents.length})`}
    struct.push(listEl)
    
    if(data.contents) data.contents.forEach(elem => { 
      const innerStruct = getFileStruct(elem, lvl+1);
      if(innerStruct) innerStruct.forEach(node => {struct.push(node)}); 
    });
    return struct;
  }    

  const tree = useMemo(() => getFileStruct(json[0]), [])
  console.log( tree )
  
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
