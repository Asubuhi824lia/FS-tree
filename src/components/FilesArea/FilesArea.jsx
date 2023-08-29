import styles from './FilesArea.module.css'

import { useMeasure, useWindowSize } from '@uidotdev/usehooks';


const FilesArea = ({files}) => {
    
    const [headerRef, header]   = useMeasure()
    const [bodyRef, body]       = useMeasure()
    const [contentRef, content] = useMeasure()

    const size = useWindowSize(),
          full_height = size.height


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
            <div className={styles.plug} style={content.height < body.height ? {width: 0} : {width: 'var(--scrollbar-width)'}}/>
        </div>	
        <div    className={styles['scroll-table-body']} ref={bodyRef}
                style={ size.width < 580 ? {height: '60vh'} : {height: `calc(${full_height-header.height}px 
                - var(--App-margins) - var(--scrollbar-width))`}}>
            <table ref={contentRef}>
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