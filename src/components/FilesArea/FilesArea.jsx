import styles from './FilesArea.module.css'

import { useMeasure, useWindowSize } from '@uidotdev/usehooks';


const FilesArea = ({files}) => {
    
    const [headerRef, header]   = useMeasure()
    const [bodyRef, body]       = useMeasure()
    const [contentRef, content] = useMeasure()

    const size = useWindowSize(),
          full_height = size.height

    const table_headers = ['File name', 'Size', 'Last Modification']


    return (<div className={styles['scroll-table']}>
        <div className={styles['table-head']} ref={headerRef}>
            <table>
                <thead>
                    <tr className={styles['table-row']}>
                        {table_headers.map(header => <th className={styles['table-header']}>{header}</th>)}
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
                        <tr className={styles['table-row']}>
                            {
                                Object.values(list).slice(1).map((val) => (
                                    <td className={styles['table-data']}>{val}</td>
                                ))
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>)
}


export default FilesArea