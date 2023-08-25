import styles from './FilesArea.module.css'

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { useWindowSize } from '@uidotdev/usehooks';


const FilesArea = ({chosenDirId, files}) => {

    console.log(chosenDirId)
    console.log(files)

    const headerRef = useRef(null)
    const bodyRef   = useRef(null),
          tableRef  = useRef(null)
    const size = useWindowSize(),
          full_height = size.height,
          [headerH, setHeaderH] = useState(0),
          [bodyH, setBodyH] = useState(0),
          [tableH, setTableH] = useState(0)
    useLayoutEffect(() => {
        setHeaderH(headerRef.current.offsetHeight)
        setBodyH(bodyRef.current.offsetHeight)
        setTableH(tableRef.current.offsetHeight)
    })
    
    useEffect(() => setTableH(tableRef.current.offsetHeight), [tableRef])

    console.log(full_height, bodyH, tableH)

    return (<div className={styles['scroll-table']}>
        <div className={styles['table-header']} ref={headerRef}>
            <table>
                <thead>
                    <tr>
                        <th>File name</th>
                        <th>Size</th>
                        <th>Last Modification</th>
                    </tr>
                </thead>
            </table>
            <div className={styles.plug} style={tableH < bodyH ? {width: 0} : {width: 'var(--scrollbar-width)'}}/>
        </div>	
        <div    className={styles['scroll-table-body']} ref={bodyRef}
                style={ size.width < 580 ? {height: '60vh'} : {height: `calc(${full_height-headerH}px 
                - var(--App-margins) - var(--scrollbar-width))`}}>
            <table ref={tableRef}>
                <tbody>
                    {files.content.map(list => (
                        <tr>
                            <td>{list.name}</td>
                            <td>{list.size}</td>
                            <td>{list.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>)
}


export default FilesArea