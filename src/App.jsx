import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Post } from './components/Post';

import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header />
    
      <div className={styles.wrapper}>
        <SideBar />
        
        <main>
          <Post />
          <Post />

        </main>
      </div>
    </div>
  )
}
