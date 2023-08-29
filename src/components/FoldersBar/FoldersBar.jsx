import styles from './FoldersBar.module.css'

import { useMemo } from 'react';

import json from '../../data/examp.json'


const FoldersBar = ({setChosenDirId, setDirFiles}) => {

    const onUpperDirClick = (e) => {
      e.target.classList.toggle(styles.collapsed)  //свёрнуто
      e.target.classList.toggle(styles.expanded)

      if(e.target.nextSibling != null) {
        e.target.nextSibling.classList.toggle(styles['collapsed-inner'])
      }
    }

    const createListItem = (id, text, innerItems=null) => {   
      return (
        <ul key={id}>
          <li className={innerItems ? styles.expanded : styles.endpoint}  onClick={(e) => {
              setChosenDirId(id)

              Array .from(document.getElementsByClassName(styles.chosen))
                    .forEach(e => e.classList.remove(styles.chosen))
              e.target.classList.toggle(styles.chosen)

              if(innerItems != null) onUpperDirClick(e)
          }}>{text}</li>
          {innerItems && <li style={{listStyleType: 'none'}}>{innerItems}</li>}
        </ul>);
    }
  
    let count = 0;
    const getFileStruct = (data, lvl=0, parentId=null) => {
      if(data.type != "directory") return [null, null];
  
      let struct  = [],
          content = []
      const curId = count++
      const elFill = {id: curId, content: data.contents.filter(node => node.type == 'file')}
      content.push(elFill)
      
      const index = parentId!=null ? `${parentId}-${curId}` : '0'

      const listEl = {id: curId, level: lvl, text: data.name, inner: []}
      if(data.contents) data.contents.forEach(elem => { 
        const [innerStruct, innerContent] = getFileStruct(elem, lvl+1, index);
        if(innerStruct)   innerStruct.forEach(node => {listEl.inner.push(node)}); 
        if(innerContent)  innerContent.forEach(node => {content.push(node)});
      });
      struct.push(listEl)
    
      return [struct, content];
    }    
  
    const [dirs, files] = useMemo(() => getFileStruct(json[0]), [])
    setDirFiles(files)


    const createList = (dirs) => {
      return dirs.map(dir => {
        if(dir.inner.length == 0) {
          return createListItem(dir.id, dir.text)
        }
        else {
          const innerList = createList(dir.inner)
          return createListItem(dir.id, dir.text, innerList)
        }
      })
    }


    return (
      <ul className={styles.list}>
          {createList(dirs)}
      </ul>
    )
}


export default FoldersBar