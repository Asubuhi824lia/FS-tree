"use client"

import styles from './FoldersBar.module.css'

export default function FoldersBar({dirs, files}) {

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
                // setChosenDirId(id)
                console.log(id)
  
                Array .from(document.getElementsByClassName(styles.chosen))
                      .forEach(e => e.classList.remove(styles.chosen))
                e.target.classList.toggle(styles.chosen)
  
                if(innerItems != null) onUpperDirClick(e)
            }}>{text}</li>
            {innerItems && <li style={{listStyleType: 'none'}}>{innerItems}</li>}
          </ul>);
      }

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