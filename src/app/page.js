'use client'

import styles from './page.module.css'

import getLocalStructure from './components/FoldersBar/getLocalStructure'
import FoldersBar from './components/FoldersBar/FoldersBar'
import FilesArea from './components/FilesArea/FilesArea'
import { useState } from 'react'

export default function Home() {

  const [dirs, setDirs] = useState(Array())
  const [files, setFiles] = useState(Array())

  async function getData() {
    const [d, f] = await getLocalStructure()
    if (JSON.stringify(f) !== JSON.stringify(files)) {
      setDirs(d)
      setFiles(f)
    }
  }
  getData()
  console.log(dirs, files)

  const [chosenDirId, setChosenDirId] = useState()

  return (
    <main className={styles.App}>
      <FoldersBar dirs={dirs} setChosenDirId={setChosenDirId}/>
      <FilesArea files={chosenDirId ? files[chosenDirId] : {content: Array()}}/>
    </main>
  )
}
