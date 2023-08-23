import styles from './FoldersBar.module.css'

import { useMemo } from 'react';

import json from '../../data/examp.json'


const FoldersBar = () => {

    console.log(json)

    const createListItem = (id, lvl, text) => {    
      return (
        <li style={{marginLeft: `${lvl*20}px`}} key={id}>
          {text}
        </li>);
    }
  
    let count = 0;
    const getFileStruct = (data, lvl=0) => {
      if(data.type != "directory") return [null, null];
  
      let struct  = [],
          content = []
      const listEl = {id: count, level: lvl, text: `${data.name} (${data.contents.length})`}
      struct.push(listEl)
      const elFill = {id: count++, content: data.contents.filter(node => node.type == 'file')}
      content.push(elFill)
  
      if(data.contents) data.contents.forEach(elem => { 
        const [innerStruct, innerContent] = getFileStruct(elem, lvl+1);
        if(innerStruct)   innerStruct.forEach(node => {struct.push(node)}); 
        if(innerContent)  innerContent.forEach(node => {content.push(node)})
      });
    
      return [struct, content];
    }    
  
    const [dirs, files] = useMemo(() => getFileStruct(json[0]), [])
    console.log( dirs, files )


    return (
        <ul className={styles.list}>
            {dirs.map(node => createListItem(node.id, node.level, node.text))}
        </ul>
    )
}


export default FoldersBar