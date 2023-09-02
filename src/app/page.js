import styles from './page.module.css'

import FilesArea from './components/FilesArea/FilesArea'
import LocalStructure from './components/FoldersBar/LocalStructure'

export default function Home() {
  return (
    <main className={styles.App}>
      <LocalStructure/>
      <FilesArea/>
    </main>
  )
}
