import { useLayoutEffect, useRef, useState } from 'react';
import styles from './FilesArea.module.css'

import { useWindowSize } from '@uidotdev/usehooks';


const FilesArea = () => {

    const ref = useRef(null)

    const size = useWindowSize()
    const full_height = size.height
    const [height, setHeight] = useState(0)

    useLayoutEffect(() => setHeight(ref.current.offsetHeight), [])

    console.log(full_height, height)

    return (<div className={styles['scroll-table']}>
        <div className={styles['table-header']}>
            <table ref={ref}>
                <thead>
                    <tr>
                        <th>File name</th>
                        <th>Size</th>
                        <th>Last Modification</th>
                    </tr>
                </thead>
            </table>
            <div className={styles.plug}></div>
        </div>	
        <div    className={styles['scroll-table-body']}
                style={ size.width < 580 ? {height: '60vh'} : {height: `calc(${full_height-height}px 
                - var(--App-margins) - var(--scrollbar-width))`}}>
            <table>
                <tbody>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td>Freecode Camp Freecode Camp</td>
                        <td>Freecode Camp</td>
                        <td>Enki</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>)
}


export default FilesArea