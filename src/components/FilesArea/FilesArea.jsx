import { useLayoutEffect, useRef, useState } from 'react';
import styles from './FilesArea.module.css'

import { useWindowSize } from '@uidotdev/usehooks';


const FilesArea = () => {

    const ref = useRef(null)

    const full_height = useWindowSize().height
    const [height, setHeight] = useState(0)

    useLayoutEffect(() => setHeight(ref.current.offsetHeight), [])

    console.log(full_height, height)

    return (<div className={styles['scroll-table']}>
        <table ref={ref}>
            <thead>
                <tr>
                    <th>File name</th>
                    <th>Size</th>
                    <th>Last Modification</th>
                </tr>
            </thead>
        </table>	
        <div    className={styles['scroll-table-body']}
                style={{height: `calc(${full_height-height}px 
                - 2*var(--App-margins) - var(--scrollbar-width))`}}>
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