import styles from './page.module.css'

import FilesArea from '@/components/FilesArea/FilesArea'
import FoldersBar from '@/components/FoldersBar/FoldersBar'

export default function Home() {
  return (
    <main className={styles.App}>
      <FoldersBar/>
      <FilesArea/>
    </main>
  )
}
