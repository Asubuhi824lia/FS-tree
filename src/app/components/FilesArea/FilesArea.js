import styles from './FilesArea.module.css'

import { useMeasure, useWindowSize } from '@uidotdev/usehooks';

export default function FilesArea({files}) {
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
                        {table_headers.map((header, id) => <th className={styles['table-header']} key={id}>{header}</th>)}
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
                    {files.content.map((list, index) => (
                        <tr className={styles['table-row']} key={index}>
                            {
                                Object.values(list).slice(1).map((val, id) => (
                                    <td className={styles['table-data']} key={id}>{val}</td>
                                ))
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>)
}