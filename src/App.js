import styles from'./App.module.css';

import FoldersBar from './components/FoldersBar/FoldersBar';
import FilesArea from './components/FilesArea/FilesArea';
import { useState } from 'react';


const App = () => {

  const [chosenDirId, setChosenDirId] = useState()
  const [dirFiles, setDirFiles] = useState()
  
  return (
    <div className={styles.App}>
      <FoldersBar setChosenDirId={setChosenDirId} setDirFiles={setDirFiles}/>
      <FilesArea  chosenDirId={chosenDirId} files={chosenDirId ? dirFiles[chosenDirId] : {content: Array()}}/>
    </div>
  );
}


export default App;
