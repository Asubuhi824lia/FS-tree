import styles from'./App.module.css';

import FilesSpace from './components/FilesSpace/FilesSpace';
import FoldersBar from './components/FoldersBar/FoldersBar';

const App = () => {
  
  return (
    <div className={styles.App}>
      <FoldersBar/>
      <FilesSpace />
    </div>
  );
}

export default App;
