import styles from'./App.module.css';

import FoldersBar from './components/FoldersBar/FoldersBar';
import FilesArea from './components/FilesArea/FilesArea';


const App = () => {
  
  return (
    <div className={styles.App}>
      <FoldersBar/>
      <FilesArea />
    </div>
  );
}


export default App;
